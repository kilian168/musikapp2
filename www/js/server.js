const express = require("express")
const app = express()


function mainfunc(){
    if(process.env.NODE_ENV !== 'production') {
        require('dotenv').config()
    }

    const express = require('express');
    const app = express();
    const bcrypt = require('bcrypt');

    const mongoose = require('mongoose');
    mongoose.connect(process.env.DATABASE_URL);
    const db = mongoose.connection;
    db.on('error', error => console.error(error));
    db.on('open', () => console.log('Connected to Mongoose'));

    app.listen(process.env.PORT || 3000)
}
mainfunc()