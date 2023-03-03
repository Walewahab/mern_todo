// 1.  Require Dependencies 
//const fs = require('fs')
const cors = require('cors')
const express = require('express');
//const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const routes = require('./routes/TodoRouter')

// dotenv 

const dotenv = require('dotenv').config();
// 3. Initialise Express
const app = express()
// use express.json to get data into json format
app.use(express.json())
app.use(cors())


// 2.  Connect Mongoose
mongoose
  .connect(process.env.MONGODB_URL)
  
  .then(() => {
    console.log('DB Connected Successfully ! ');
  })
  .catch((err) => {
    console.log('Connection Failure !' + err);
  });







  app.use(routes)
  //app.use( TodoRoute)
// 4. Require MiddleWare 
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))


// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(
//   bodyParser.json({
//     type: ["application/x-www-form-urlencoded", "application/json"]
//   })
// );



// 5. Configure View Engine

// app.engine('hbs', exphbs.engine({
//   extname: '.hbs',
//   defaultLayout: 'main',
//   runtimeOptions: {
//     allowProtoMethodsByDefault: true,
//     allowProtoPropertiesByDefault: true
//   }

// }))

//app.set('view engine', 'hbs')

// process.env.PORT
const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`Now Listening on Port ${PORT}`)
}); 