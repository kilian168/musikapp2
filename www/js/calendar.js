



function editor(year, month, day) {
    const fs = require("fs");
    path = "db/"+year+"/"+month+"/"+day
    if(!fs.existsSync(path)) {
        fs.mkdirSync(path);
        path = path + "/editor.html";
        if(!fs.existsSync(path)) {            
            fs.writeFileSync(path);
        }
        fs.copyFile("editor.html", path);
    }
    window.location.replace(path);
}

function editornormal() {
    window.location.replace("editor.html");
}