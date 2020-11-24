const fs = require('fs');
const path = require('path');

function crateWordLayer(dir, level = -1) {
    fs.readdirSync(dir).forEach((file, index) => {
        const fullname = path.join(dir, file);
        const info = fs.statSync(fullname);
        if(info.isDirectory()) {
            crateWordLayer(fullname, level + 1);
        } else {
            const text = fs.readFileSync(fullname, 'utf8');
            const list = text.split(/\n\n/);
            for (const line of list) {
                const li = line.replace(/(^#+)[^#]*/, '$1');
                const no = li.length + Math.max(level, 0);
                console.log(`${no}: ---- ${line}`);
            }
        }
    });
}
crateWordLayer('word');
