const { text } = require("express");

let recordedChunks = [];
let year, month, day;
let dir;


var factory = window.indexedDB.open('storage', 5);

var count;

const recBtn = document.getElementById('record' + toString(count));

let cannot = false;
let is = false;

/*
const playBtn = document.getElementById('play');
*/
const audioPlayer = document.getElementById('audioPlayer' + toString(count));

window.resolveLocalFileSystemURL(cordova.file.dataDirectory, 
    function (data) {
    console.log("got main dir", data);
    dir = data;
    }, 
    function (error) {
    console.log("Error accessing data directory:", error);
    }
);

recBtn.addEventListener('click', toggleRec);

function editor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    window.location = 'editor.html';
    count = 0;
}

function buildPage() {
    var filesdir = dir + '/' + year + '/' + month + '/' + day;
    var textarea = document.createElement('textarea');
    textarea.setAttribute('id', `textarea${count}`);
    filesdir.getFile(`${count}.txt`, text);
    textarea.value = text;
    count++;
}

function toggleRec() {
    if(!cannot) return;
    is = !is;
    if(is) {
        audio1 = document.createElement("audio");
        audio1.setAttribute("id", "audioPlayer" + toString(count));
        audio1.setAttribute("controls", "");
        recorder.start();
    } else {
        recorder.stop();
    }
}


function setAudio() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({
                audio: true
            })
            .then(setStream)
            .catch(err => {
                console.error(err)
            });
    }
}
setAudio();

function setStream(stream) {
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = e => {
        recordedChunks.push(e.data);
    }
    recorder.onstop = e => {
        const blob = new Blob(recordedChunks, { type: "audio/mp3" });
        recordedChunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        audioPlayer.src = audioURL;
    }
    cannot = true;
}


function calendar() {
    window.location.replace("calendar.html");
}

function plus() {
    wrap = document.getElementById("maindiv");
    text = document.createElement("textarea");
    text.setAttribute("class", "txtarea");
    audio = document.getElementById("audioPlayer");
    audio.removeAttribute("id");
    audio1 = document.createElement("audio");
    audio1.setAttribute("id", "audioPlayer" + toString(count));
    audio1.setAttribute("controls", "");
    wrap.appendChild(text);
    wrap.appendChild(audio1);
}
function plusinit() {
    wrap = document.getElementById("maindiv");
    text = document.getElementById("textarea" + toString(count));
}