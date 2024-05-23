import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    title: "New Note!",
    body: " "
})

console.log(NotesAPI.getAllNotes());
