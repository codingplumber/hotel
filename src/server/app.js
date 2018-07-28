const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , config = require('./config')
    , control = require('./control')
    , port = 3001;

const app = module.exports = express();

// const massiveInstance = massive.connectSync({connectionString: config.connectionString});
// app.set('db', massiveInstance);

// app.use(bodyParser.json());
// // app.use(cors(corsOptions));
// app.use(express.static(__dirname + './../dist'));

// app.use(session({
//   secret: config.password,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));



app.get('/getCustomer', control.getCustomer);
app.post('/createCustomer', control.createCustomer);
app.delete('/deleteCustomer', control.deleteCustomer);


app.listen(port, console.log('Listening on port:', port));