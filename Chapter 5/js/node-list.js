var hotItems = document.querySelectorAll('li.hot'); //Store Nodelist in array

if (hotItems.length > 0) {                          //If array not empty
    
    for (var i=0; i < hotItems.length; i++) {       //Loop through each element in array
        hotItems[i].className = 'cool';             //Change value of class attribute
    }
}