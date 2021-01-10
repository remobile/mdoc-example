const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const {
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TextRun,
}  = require( "./docx");

function crateWordLayer(dir, children, level = -1) {
    fs.readdirSync(dir).forEach((file, index) => {
        const fullname = path.join(dir, file);
        const info = fs.statSync(fullname);
        if(info.isDirectory()) {
            crateWordLayer(fullname, children, level + 1);
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
    crateWordLayer('word', children);
    doc.addSection({ children });
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("test.docx", buffer);
    });
}

main();
