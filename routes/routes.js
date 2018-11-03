var faker = require("faker");
var db = require('../utilities/db.js')

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/user", function (req, res) {
        var data = ({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email()
        });
        res.status(200).send(data);
    });

    app.get("/users/:num", function (req, res) {
        var users = [];
        var num = req.params.num;
     
        if (isFinite(num) && num  > 0 ) {
          for (i = 0; i <= num-1; i++) {
            users.push({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email()
             });
          }
     
          res.status(200).send(users);
         
        } else {
          res.status(400).send({ message: 'invalid number supplied' });
        }
     
    });

    app.get('/cars', function(req, res){
        db.query('select * from cars;', function(err, result) {
            res.send(result);
        })
    })

    app.post('/create/car', function(req, res) {
        var post = [req.body.name, req.body.make, parseInt(req.body.year)];
        console.log(post)

        var sqlquery = "INSERT INTO cars (name, make, year) VALUES ('"+req.body.name+"','"+req.body.make+"',"+req.body.year+")";
        db.query(sqlquery, function(err, result) {
            if (err) throw err;
        });
        res.send('success');
    })
  }
  
module.exports = appRouter;