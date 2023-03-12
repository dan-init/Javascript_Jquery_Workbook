var msg = '<p><b>page title: </b>' + document.title + '<br />';     //document.title gets the title of the HTML Document
msg += '<b>page address: </b>' +  document.URL + '<br />';          //document.URL gets the URL location of the HTML document
msg += '<b>last modified: </b>' + document.lastModified + '</p>';   //document.lastmodified gets the datetime stamp the HTML document was last modified.

var el = document.getElementById('footer');
el.innerHTML = msg;