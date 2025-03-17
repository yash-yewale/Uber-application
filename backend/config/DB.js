
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const DB_conncte = () => {
    mongoose.connect(process.env.DB_URL).then(()=>console.log("DB connection established")).catch((error)=>console.log(error)
    )
}

module.exports = DB_conncte;