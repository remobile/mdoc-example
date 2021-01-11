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
    for (const item of list) {
        const image = Media.addImage(doc, fs.readFileSync(path.join(dir, item.image)), 400, 300);
        children.push(new Paragraph({ children: [image], alignment: AlignmentType.CENTER }));
        const text = new TextRun({
            text: item.text,
            size: 20,
            font: { name : 'Songti SC Regular' },
        });
        children.push(new Paragraph({ children: [text], alignment: AlignmentType.CENTER }));
    }
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
                if (/^#+\s+/.test(line)) {
                    const li = line.replace(/(^#+)[^#]*/, '$1');
                    const no = li.length + Math.max(level, 0);
                    const title = line.replace(/^#+\s+/, '');
                    console.log(`HEADING_${no}:${_.repeat('-', no*3)}${title}`);
                    children.push(new Paragraph({
                        text: title,
                        heading: HeadingLevel[`HEADING_${no}`],
                    }));
                } else if (/^\s*!\[([^\]]*)\]\(([^)]*)\)/.test(line)) {
                    const list = parseImage(line, []);
                    createImage(doc, dir, list, children);
                } else {
                    children.push(new Paragraph({ children: [new TextRun({
                        text: line,
                        color: 'red',
                        size: 28,
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
