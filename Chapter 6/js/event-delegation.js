function getTarget(e) {                             //Declare function
    if (!e) {                                       //If there is no event object
        e = window.event;                           //Use old IE event object
    }
    return e.target || e.srcElement;                //Get the target or event
}

function itemDone(e) {                              //Declare function
    //Remove element from list
    var target, elParent, elGrandparent;            //Declare variables
    target = getTarget(e);                          //Get the item clicked link
    elParent = target.parentNode;                   //Get its list item
    elGrandparent = target.parentNode.parentNode;   //Get the list
    elGrandparent.removeChild(elParent);            //Remove item from the list

    //Prevent the link from redirecting elsewhere
    if (e.preventDefault) {                         //If preventDefault() works
        e.preventDefault();                         //Use preventDefault()
    } else {                                        //Otherwise
        e.returnValue = false;                      //Use old IT version
    }
}

//Set event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');   //Get shopping list
if (el.addEventListener) {                          //If event listeners work
    el.addEventListener('click', function(e) {      //Add listener on click
        itemDone(e);                                //It calls itemDone()
}, false);                                          //Use bubbling phase for flow
} else {                                            //Otherwise
    el.attachEvent('onclick', function(e){          //Use old IE model: onclick
        itemDone(e);                                //Call itemDone()
    });
}