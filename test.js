const fs = require('fs');
const path = require('path');
const _ = require('lodash');

function crateWordLayer(dir, level = -1) {
    fs.readdirSync(dir).forEach((file, index) => {
        const fullname = path.join(dir, file);
        const info = fs.statSync(fullname);
        if(info.isDirectory()) {
            crateWordLayer(fullname, level + 1);
        } else if (/.*\.md/.test(file)) {
            const text = fs.readFileSync(fullname, 'utf8');
            const list = text.split(/\n/);
            for (const line of list) {
                if (/^#+\s+/.test(line)) {
                    const li = line.replace(/(^#+)[^#]*/, '$1');
                    const no = li.length + Math.max(level, 0);
                    console.log(`${no}:${_.repeat('-', no*3)}${line.replace(/^#+\s+/, '')}`);
                } else {
                    console.log(line);
                }
            }
        }
    });
}
crateWordLayer('word');
