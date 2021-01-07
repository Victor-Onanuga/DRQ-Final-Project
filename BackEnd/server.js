const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:Ola$imbo61@cluster0.eujqi.mongodb.net/drq-final-project?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
//
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const showSchema = new Schema({
    scandalName:String,
    Date:String,
    Photos:String
})

const ShowModel = mongoose.model('Sports', showSchema);


app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log(req.body.lastname);
    res.send('post recieved from '
        + req.body.firstname + ' ' +
        req.body.lastname)
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/shows', (req, res) => {

    ShowModel.find((error, data) =>{
        res.json({scandals:data});
    })
    
})

app.get('/api/shows/:id', (req, res)=>{
    console.log(req.params.id);

    ShowModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.delete('/api/shows/:id', (req, res)=>{
    console.log(req.params.id);

    ShowModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.put('/api/shows/:id',(req,res)=>{
    console.log("Edit: "+req.params.id);
    console.log(req.body);
    
    ShowModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

app.get('/api/shows/:id', (req,res)=>{
    console.log("GET: "+req.params.id);

    ShowModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})

app.post('/api/shows', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.scandalName);
    console.log(req.body.Date);
    console.log(req.body.Photos);

    ShowModel.create({
        scandalName:req.body.scandalName, 
        Date:req.body.Date, 
        Photos:req.body.Photos
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))