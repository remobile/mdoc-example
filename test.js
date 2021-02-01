const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    Table,
    TableCell,
    TableRow,
    WidthType,
    Media,
}  = require( "./docx");

function parseImage(line, list = []) {
    const match = line.match(/\s*!\[([^\]]*)\]\(([^)]*)\)\s*/);
    if (match) {
        const text = match[1];
        const image = match[2];
        list.push({ text, image });
        line = line.replace(/\s*!\[([^\]]*)\]\(([^)]*)\)\s*/, '');
        if (line) {
            return parseImage(line, list);
        }
    }
    return list;
}
function createImage(doc, dir, list, children) {
    let w, h;
    const fontSize = 20; // 字体大小
    const tw = 600; // 总宽度
    if (list.length === 1) {
        w = tw;
        h = w * 3 / 5;
    } else {
        w = tw / list.length;
        h = w * 4 / 3;
    }
    const width = { size: 100, type: WidthType.PERCENTAGE };
    const border = { color: "white", size: 1 };
    const borders = { top: border, bottom: border, left: border, right: border };
    const text = (str) => new Paragraph({ children: [new TextRun({ text: str, size: fontSize, font: { name: 'Songti SC Regular' } })], alignment: AlignmentType.CENTER });
    const image = (img, w, h) => new Paragraph({ children: [Media.addImage(doc, fs.readFileSync(path.join(dir, img)), w, h)], alignment: AlignmentType.CENTER });
    const imageList = list.map(o=> new TableCell({ children: [image(o.image, w, h)], borders }));
    const textList = list.map(o=> new TableCell({ children: [text(o.text)], borders, margins: { top: 100 } }));
    const table = new Table({ width, rows: [new TableRow({ children: imageList }), new TableRow({ children: textList })] });
    children.push(table);
}
function crateWordLayer(doc, dir, children, level = -1) {
    fs.readdirSync(dir).forEach((file, index) => {
        const fullname = path.join(dir, file);
        const info = fs.statSync(fullname);
        if(info.isDirectory()) {
            crateWordLayer(doc, fullname, children, level + 1);
        } else if (/.*\.md/.test(file)) {
            const text = fs.readFileSync(fullname, 'utf8');
            const list = text.split(/\n/);
            for (const line of list) {
                if (/^#+\s+/.test(line)) { // 标题
                    const li = line.replace(/(^#+)[^#]*/, '$1');
                    const no = li.length + Math.max(level, 0);
                    const title = line.replace(/^#+\s+/, '');
                    console.log(`HEADING_${no}:${_.repeat('-', no*3)}${title}`);
                    children.push(new Paragraph({
                        text: title,
                        heading: HeadingLevel[`HEADING_${no}`],
                    }));
                } else if (/^\s*!\[([^\]]*)\]\(([^)]*)\)/.test(line)) { // 图片
                    const list = parseImage(line, []);
                    createImage(doc, dir, list, children);
                } else if (/^\*+\s+/.test(line)) { // 列表
                    const li = line.replace(/(^\*+)[^*]*/, '$1');
                    const level = li.length;
                    const title = line.replace(/^\*+\s+/, '');
                    const head = [ '', '■', '\t◆', '\t\t ●' ][level];
                    children.push(new Paragraph({ children: [new TextRun({
                        text: `${head} ${title}`,
                        size: 24,
                        font: { name : 'Songti SC Regular' },
                    })], indent: { left: 900, hanging: 360 } }));
                } else {
                    children.push(new Paragraph({ children: [new TextRun({
                        text: line,
                        size: 24,
                        font: { name : 'Songti SC Regular' },
                    })], indent: { left: 900, hanging: 360 } }));
                }
            }
        }
    });
}
function main() {
    const styles = fs.readFileSync("./res/styles.xml", "utf-8");
    const numbering = fs.readFileSync("./res/numbering.xml", "utf-8");
    const doc = new Document({
        title: "计划书",
        background: { color: "FFFFFF" },
        externalStyles: styles,
        externalNumbering: numbering,
    });
    const children = [];
    crateWordLayer(doc, 'word', children);
    doc.addSection({ children });
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("test.docx", buffer);
    });
}

main();
