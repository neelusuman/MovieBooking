
const express= require("express")
const bodyParser= require("body-parser")
const mongoose= require("mongoose")

const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config')

const app= express();
app.use(bodyParser.json())

mongoose.connect(dbConfig.DB_URL,()=>{
    console.log("connected to mongoDB")
},err=>{
    console.log("Error:",err.message)
})

app.get('/',(req,res)=>{
    res.send({title:'Movie Booking'})
})

require("./routes/movie.routes")(app);
require("./routes/theatre.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/booking.routes")(app);
require("./routes/payment.routes")(app);
app.listen(serverConfig.PORT,()=>{
    console.log(`Application is running on port ${serverConfig.PORT}`)
})
