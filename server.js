var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var reservation = [
    {
        name: "Andrew Mulvaney",
        phoneNumber: "555-555-5555",
        email: "AJLDKJFSD@Gmail.com",
        uniqueID: "3123"
    }
];
var waitlist = [
    {
        name: "Superman",
        phoneNumber: "555-555-5555",
        email: "AJLDKJFSD@Gmail.com",
        uniqueID: "4121"
    }
];

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function(request, response) {
    response.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(request, response) {
    response.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/reservation", function(request, response){
    response.json(reservation);
});

app.get("/api/waitlist", function(request, response){
    response.json(waitlist);
});

app.post("/api/new", function(request, response) {
    var newCustomer = request.body;

    console.log(newCustomer);

    if (reservation.length >= 5) {
        waitlist.push(newCustomer);
    }
    else {
        reservation.push(newCustomer);
    };

    response.json(newCustomer);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});