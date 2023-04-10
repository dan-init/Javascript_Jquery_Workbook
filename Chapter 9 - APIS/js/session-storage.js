/*  SESSION STORAGE IS MORE SUITED TO INFORMATION THAT:
    - CHANGES FREQUENTLY (each time as user visits the site, such as whether they are logged in or location data)
    - IS PERSONAL AND SHOULD NOT BE VIEWED BY OTHER USERS OF THE DEVICE
*/


if (window.sessionStorage) {
    var txtUsername = document.getElementById('username');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username');
    txtAnswer.value = sessionStorage.getItem('answer');

    txtUsername.addEventListener('input', function() {
        sessionStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function() {
        sessionStorage.setItem('answer', txtAnswer.value);
    }, false);

};
