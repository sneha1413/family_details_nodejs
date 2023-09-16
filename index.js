const express = require('express')
const mongoose = require ('mongoose')
const url = 'mongodb+srv://snehadabbiru:Snehavit14@cluster0.ntc74oz.mongodb.net/Learn?retryWrites=true&w=majority'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('error', console.error.bind(console, 'MongoDB connection error:'));
con.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json())
const familyRouter = require('./routers/family')
app.use('/family',familyRouter)

app.listen(9000,()=> {
console.log('Server started')
});

