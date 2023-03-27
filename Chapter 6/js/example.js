var noteInput, noteName, textEntered, target;                       //Declare variable

noteName = document.getElementById('noteName');                     //Element that holds note
noteInput = document.getElementById('noteInput');                   //Input for writing the note

function writeLabel(e) {                                            //Declare function
    if (!e) {                                                       //If event object not present
        e = window.event;                                           //Use IE-5 fallback
    }
   target = e.target || e.srcElement;                               //Get target of event
   textEntered = e.target.value;                                    //Value of that element
   noteName.textContent = textEntered;                              //Update note text
}

//This is where the record / pause controls and functions go..

if (document.addEventListener) {                                    //If event listener supported

    document.addEventListener('click', function(e){                 //for any click document
        recorderControls(e);                                        //Call recorderControls()
    }, false);                                                      //Capture during bubbling phase
//NOTE, ERROR ON PAGE 290, ITS STATES THE SCRIPT SHOULD SAY
//'username.addEventListener('input', wrtieLabel, false);'
//username IS NOT CALLED ANYWHERE IN THE HTML OR ELSEWHERE
//IN THE SCRIPT, THE CORRECT VARIABLE TO CALL HERE IS 'noteInput'
    noteInput.addEventListener('input', writeLabel, false);         //If input events fire on noteInput call writeLabel()
} else {                                                            //Otherwise
    document.attachEvent('onclick', function(e){                    //IE fallback: onclick
        recorderControls(e);                                        //Calls recorderControls
    });

    noteInput.attachEvent('onkeyup', writeLabel, false);            //If keyup event fires on noteInput call writeLabel()
}

function recorderControls(e) {                                      //Declare recorderControls()
    if (!e) {                                                       //if event object not present
        e = window.event;                                           //IE fallback
    }
    target = e.target || e.srcElement;                              //Get the target element
    if (e.preventDefault) {                                         //If preventDefault() supported
        e.preventDefault();                                         //Stop default action
    } else {                                                        //Otherwise
        e.returnValue = false;                                      //IE fallback
    }

    switch(target.getAttribute('data-state')) {                     //Get the data-state attribute
        case 'record':                                              //If its value is record
            record(target);                                         //Call the record() function
            break;
        case 'stop':                                                //If its value is stop
            stop(target);                                           //Call the stop() function
            break;
    }
};
function stop(target) {                                             //Declare function
    target.setAttribute('data-state', 'stop');                      //Set data-state attr to stop
    target.textContent = 'record';                                  //Set text to 'record'
}

function record(target) {
    target.setAttribute('data-state', 'record');                    //Set data-state attr to record
    target.textContent = 'stop';                                    //Set text to 'stop'
}

