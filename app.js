// var express = require('express');

// var app = express();

// var routes = require('./routes');

// app.set('view engine', 'ejs');

// var path = require('path');
// // Serve static assets from the public folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes

// app.get('/', routes.home);

// app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// app.get('*', routes.notFound);


// // Listen on port 3000
// app.listen(process.env.PORT || 3000);

var express = require('express')
, morgan = require('morgan')
, bodyParser = require('body-parser')
, methodOverride = require('method-override')
, app = express()
, port = process.env.PORT || 3000
, router = express.Router();

app.use(express.static(__dirname + '/views')); // set the static files location for the static html
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser());                      // pull information from html in POST
app.use(methodOverride());                  // simulate DELETE and PUT



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port :'3300',
  user     : 'root',
  password : '1234',
  database : 'my_db'
});
connection.connect();


router.get('/', function(req, res, next) {
res.render('index.html');
});

app.post('/loginpost',function(req,res){
    console.log(req.body);
    var query = "SELECT * FROM user WHERE username='"+ req.body.email + "' AND password='"+ req.body.password+"';";
    console.log(query);
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        if(results.length  === 0){
            console.log('user not found');
            res.send('login fail');
        } else {
            console.log('log in sucess');
            res.send('login successssssssssss');
        }
    });
    // res.render('index.html');
       
    //   connection.end();
});



app.post('/signuppost',function(req,res){
    console.log(req.body);
    var query = "insert into user value ('"+ req.body.signupEmail + "' ,'"+ req.body.password+"');";
    console.log(query);
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        if(results.length  === 0){
            console.log('user not found');
            res.send('login fail');
        } else {
            console.log('log in sucess');
            res.send('login successssssssssss');
        }
    });
    // res.render('index.html');
       
    //   connection.end();
});

app.use('/', router);

app.listen(port);
console.log('App running on port', port);