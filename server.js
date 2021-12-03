const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var morgan = require('morgan')
const path = require("path")
const userRouter = require('./routers/user')
const machineRouter = require('./routers/machine')


const port = process.env.PORT || 3001;
const mongoUrl = 'mongodb+srv://chat_bot_project:IRBvfBHRrXTfaJX1@cluster0.sbfdh.mongodb.net/exam_db?retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

app.use("/users", userRouter)
app.use("/machine", machineRouter)
app.use('/', express.static(path.join(__dirname,'front',)));
//app.use("/",express.static(path.join("angular")))



mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("connected to mongo db");
    app.listen(port, () => {
        console.log('app running on port ' + port);
    })
}).catch((err)=>console.log(err));

app.get('', (req, res) =>{
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

