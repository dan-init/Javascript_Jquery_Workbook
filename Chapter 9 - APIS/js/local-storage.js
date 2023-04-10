/*  LOCAL STORAGE IS MORE SUITED TO INFORMATION THAT:
    - ONLY CHANGES AT SET INTERVALS (such as timetables /pricelists), WHICH CAN BE STORED OFFLINE
    - THE USER MIGHT WANT TO COME BACK AND USE AGAIN (such as saving preferences/settings)
*/

if (window.localStorage) {
    var txtUsername = document.getElementById('username');
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = localStorage.getItem('username');
    txtAnswer.value = localStorage.getItem('answer');

    txtUsername.addEventListener('input', function() {
        localStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function() {
        localStorage.setItem('answer', txtAnswer.value);
    }, false);

};
