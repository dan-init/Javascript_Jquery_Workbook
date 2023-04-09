/* NOTE THIS SCRIPT HAS HAD TO BE ADAPTED BECAUSE OF THE ABSENCE OF MODERNIZR.JS 
I CAN ONLY ASSUME AT THE TIME THE BOOK WAS PUBLISHED MODERNIZR WE STILL BEING UPDATED
BY MODERNIZR.COM, IT HAS NOT BEEN UPDATED ON THE SITE SINCE 2017, HOWEVER THIS PROJECT
IS STILL ONGOING VIA GIT REPO. IT CAN STILL BE INSTALLED, BUT I ELECTED TO EXCLUDE IT
FROM THIS SCRIPT AS I AM USING A MODERN BROWSER THAT SUPPORTS GEOLOCATION. */

var elmap = document.getElementById('loc');         //Get HTML element

navigator.geolocation.getCurrentPosition(success);  //Ask for location
elmap.textContent = 'Checking location...';         //Add text to HTML element

function success(position) {                        //Got location
    msg = '<h3>Longitude:<br>';                     //Create message
    msg += position.coords.longitude + '</h3>';     //Add longitude
    msg += '<h3>Latitude:<br>';                     //Add to message
    msg += position.coords.latitude + '</h3>';      //Add latitude
    elmap.innerHTML = msg;                          //Show location
};