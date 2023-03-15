var scores = [24, 32, 17];          //Array of scores
var arrayLength = scores.length;    //Items in array
var roundNumber = 0;                //Current round
var msg = '';                       //Message
var i;                              //Counter

//Loop through the elements of the array
for (i = 0; i <arrayLength; i++) {
    
    //Arrays are zero base, so round 1 is 0
    //Add 1 to the current round
    roundNumber = (i + i);

    //Write the current round to the message
    msg += 'Round ' + roundNumber + ': ' 

    //Get the score from the scores array
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;
