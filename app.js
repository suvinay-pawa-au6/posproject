const express = require("express");
require("./db");
const path = require("path");

var bodyParser = require("body-parser");
const app = express();
const passport = require("passport");

//Route Imports
const Register = require("./api/routes/Register");
const Login = require("./api/routes/login");
const Company = require("./api/routes/Company");
const offers = require("./api/routes/offer");
const products = require("./api/routes/Product");
const Dashboard = require("./api/routes/dashboard");
const Billing = require("./api/routes/Billing");
const billpdf = require("./api/routes/billpdf");
//const setting = require("./api/routes/setting");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Flow of the routes
//1 Register here
app.use("/Register", Register);
//2; Login with Facebook or Login with id and pass
app.use("/login", Login);
//3 Add branches and enter pos system
app.use("/Company", Company);
//4
app.use("/products", products);
//app.use("/settings", setting);
app.use("/offers", offers);
app.use("/billpdf", billpdf);
app.use("/products", products);
app.use("/dashboard", Dashboard);
app.use("/billing", Billing);

module.exports = app;
