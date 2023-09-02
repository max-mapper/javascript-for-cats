let fs = require('fs')
let marked = require('marked')
let mustache = require('mustache')

let template = fs.readFileSync('./index.mustache').toString()
let readme = fs.readFileSync('./README.md').toString()
fs.writeFileSync('./index.html', mustache.render(template, {content: marked(readme)}))
