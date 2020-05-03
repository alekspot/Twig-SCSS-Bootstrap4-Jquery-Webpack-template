const path = require('path');
const fs = require('fs');


 const obj = { 
    getEntryJs: (folder) => {
        const files = fs.readdirSync(path.resolve(__dirname, folder));
        return files.reduce((acc, file) => {
            const fileName = file.split('.')[0]
            acc[fileName] = `./${folder}/${file}`
            return acc
        }, {})
    },
    generateHtmlPlugins: (templateDir, plugin) => {
        const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

        return templateFiles.map(filename => {
        const name = filename.split('.')[0]
        return new plugin({
                filename: `${name}.html`,
                chunks: [name],
                template: `${templateDir}/${filename}`,
            })
        })
    }
}

module.exports = obj
