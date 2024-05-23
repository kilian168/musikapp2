const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e => {
    textarea.style.height = "48px";
    let scHeight = e.target.scrollHeight;
    if(textarea.style.height > window.innerHeight*0.5){
        textarea.style.height = window.innerHeight*0.5
        
        return
    }
    console.log(window.innerHeight)
    console.log(textarea.style.height)
    
    textarea.style.height = `${scHeight}px`;
});