const fs = require('fs');
const {productType} = require('./productType');
const { objectify } = require('./objectification');
const {fieldSet} = require('./fieldSet');

module.exports = async (path) => {
    const entry = fs.readFileSync(path, 'utf8');
    const entry1 = entry.split('\n');
    const mapping = fieldSet(entry1[0]);
    const writer = fs.createWriteStream(`${__dirname}/../Testing/output.txt`);
    for (let i = 1; i < entry1.length; i++) {
        const line = entry1[i].trim();
        if (!line) continue; // skip empty lines
        const cols = line.split(',');
        // objectify returns a JSON string now; add newline between records
        writer.write(objectify(cols, mapping) + '\n');
    }
    writer.end();
}
