let recordedChunks = [];

<<<<<<< HEAD:www/js/audio.js
const counter = 0;

const recBtn = document.getElementById('record');
=======
const count = 0;
>>>>>>> 29a723f5f9a01910486348a113befd17d3dabdf6:www/js/editor.js

const recBtn = document.getElementById('record' + toString(count));

let cannot = false;
let is = false;

/*
const playBtn = document.getElementById('play');
*/
const audioPlayer = document.getElementById('audioPlayer' + toString(count));

recBtn.addEventListener('click', toggleRec);

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