var itemTwo = document.getElementById('two');   //Get second list item

var elText = itemTwo.firstChild.nodeValue;      //Get its text content

elText = elText.replace('pine nuts', 'hello');  //Change pine nutes to kale

itemTwo.firstChild.nodeValue = elText           //Update the list item