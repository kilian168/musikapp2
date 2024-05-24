let recordedChunks = [];

const counter = 0;

const recBtn = document.getElementById('record');

let can = false;
let is = false;

/*
const playBtn = document.getElementById('play');
*/
const audioPlayer = document.getElementById('audioPlayer');

recBtn.addEventListener('click', toggleRec);

function toggleRec() {
    if(!can) return;
    is = !is;
    if(is) {
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
        const blob = new Blob(recordedChunks, { type: "audio/wav" });
        recordedChunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        audioPlayer.src = audioURL;
    }
    can = true;
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
    audio1.setAttribute("id", "audioPlayer");
    audio1.setAttribute("controls", "");
    wrap.appendChild(text);
    wrap.appendChild(audio1);
}