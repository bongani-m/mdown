#! /usr/bin/env node
// Requirements
const fs = require('fs');
const showdown = require('showdown');
showdown.setFlavor('github');
const path = require('path');
// reads file
var input = process.argv;
var filePaths = input.slice(2, input.length);
var files = filePaths.map((file) => {
	return fs.readFileSync(file,'utf8');
});
const converter = new showdown.Converter();
// creates html
files.forEach((content, index) => {
	var html = converter.makeHtml(content);
	var writePath = path.join( process.cwd(),'index' + index + '.html');
	fs.writeFileSync(writePath, html);
});
console.log('converted: ' + filePaths + ' to : ' + process.cwd());
