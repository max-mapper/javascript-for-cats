var fs = require('fs')
var marked = require('marked')
var mustache = require('mustache')

var template = fs.readFileSync('./index.mustache').toString()
var readme = fs.readFileSync('./README.md').toString()
fs.writeFileSync('./index.html', mustache.render(template, {content: marked(readme)}))