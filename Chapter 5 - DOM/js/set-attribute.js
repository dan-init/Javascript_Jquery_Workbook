var firstItem = document.getElementById('one');                 //Get the first item
firstItem.className = 'complete';                               //Change its class attribute

var forthItem = document.getElementsByTagName('li').item(3);    //Get forth item
forthItem.setAttribute('class', 'cool');                        //Add an attribute to it