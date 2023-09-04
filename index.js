var JSDocument = require('jsdocument')

var index = new JSDocument.JSPage()
var h1 =  new JSDocument.JSObjects.JSH1Object()
var text = new JSDocument.JSObjects.JSPObject()

index.SetTitle("Hello, world!")

JSDocument.UseCSS(index.GetJSDocumentObject(), 'index.css', JSDocument.Server)
JSDocument.UseIcon(index.GetJSDocumentObject(), 'jsdocument.ico', JSDocument.Server)

h1.Text = 'JSDocument' // innerHTML
text.Text = 'My First JSDocument Page!' // innerHTML

document.AddObject(h1)
document.AddObject(text) // adds object on body tag

index.Deploy('/') // Deploys site on index