var firstItem = document.getElementById('one'); //Get the first item

if (firstItem.hasAttribute('class')) {          //If item has class attribute
    var attr = firstItem.getAttribute('class'); //Get the attribute.

    //Add the value of the attribute after the list
    var el = document.getElementById('scriptResults');
    console.log(attr);
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}

// var liELements = document.getElementsByTagName('li');

// for (var i = 0; i < liELements.length; i++) {
//     if (liELements[i].hasAttribute('class')) {
//         console.log(liELements[i]);
//     }
    
// }