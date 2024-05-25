function stimmen() {
    window.location = "stimmen.html";
    {
        audioContext = new AudioContext(); 
        analyser = audioContext.createAnalyser(); 
    
        dial = document.querySelector('.dial'); 
        noteValue = document.querySelector('.NoteValue'); 
    
        //// Creating Audio Context 
        // MAX_SIZE = Math.max(4, Math.floor(audioContext.sampleRate / 5000)); // Corresponds to a 5kHZ signal
    
        MicInput(); // Initializing the 
    
    }
}
function calendar() {
    window.location = "calendar.html";
}
function home() {
    window.location = "app.html";
}
function login() {
    document.getElementById('forms').style.display='block';
}
function closelogin() {
    document.getElementById('forms').style.display='none';
}