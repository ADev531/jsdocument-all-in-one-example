var JSDocument = require('jsdocument')

var document = new JSDocument.JSDocument()
var title = new JSDocument.JSObjects.JSTitleObject() // creates new title object
var h1 =  new JSDocument.JSObjects.JSH1Object()
var text = new JSDocument.JSObjects.JSPObject()

JSDocument.UseCSS(document, 'index.css')
JSDocument.UseIcon(document, 'jsdocument.ico')

h1.Text = 'JSDocument' // innerHTML
text.Text = 'My First JSDocument Page!' // innerHTML
title.Text = 'Hello, World!' // innerHTML

document.AddHeaderObject(title) // adds object on head tag, use on title tag or script tag.
document.AddObject(h1)
document.AddObject(text) // adds object on body tag

document.setresponsehandler(function() {
    document.SendDocument() // sends document to client
}, '/')