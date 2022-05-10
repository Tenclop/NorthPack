const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PUBLISHABLE_KEY =
  "pk_test_51Kkw9VCyczacwlgvlR72gi5YXdeVyz4i9E0b5PVfHDgxpQqPj1ITPCvhqU55aHuYFhyI1cZcWpxAm6hdy4Wzh09u001EwJqkZ1";

const stripe = require("stripe")(PUBLISHABLE_KEY);

app.set("views", path.join(__dirname, ""));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.header("Content-Type", "text/html");
  // res.attachment();
  res.render("Home", {
    key: PUBLISHABLE_KEY,
    // utils: totals,
    //<%= utils %>"
  });
});

app.post("/payment", (req, res) => {
  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
      name: "Tenclop",
      address: {
        line1: "TC 9/4 Old MES colony",
        postal_code: "0018",
        city: "Oslo",
        country: "Norway",
      },
    })
    .then((customer) => {
      return stripe.charges.create({
        amount: 7000, // Charing Rs 25
        description: "Backpacks",
        currency: "USD",
        customer: customer.id,
      });
    })
    .then((charge) => {
      res.send("Success"); // If no error occurs
    })
    .catch((err) => {
      res.send(err); // If some error occurs
    });
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
