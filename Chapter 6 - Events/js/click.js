var msg = '<div class = \"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>Systems Maintenance</h2>';
msg +='Servers down, much distruption</div>';


var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);