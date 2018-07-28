const app = require('./app')
    , db = app.get('db');

module.exports = {
    getCustomer: (req, res) => {
        let first = req.params.firstName,
            last = req.params.lastName,
            fromRes = req.params.fromRes,
            toRes = req.params.toRes;

            console.log(first, last, fromRes, toRes)

        db.get_customer([customer.fist, customer.last, customer.fromRes, customer.toRes], (err, customer) => {
            if (!err) {
                res.status(200).send(customer);
              } else {
                res.send(err);
              }
        });
    },

    createCustomer: (req, res) => {
        let customer = req.bod.customer;
        db.create_customer([customer.first, customer.last, customer.fromRes, customer.toRes], (err, customer) => {
            if (!err) {
                res.send(customer);
              } else {
                res.send(err);
              }
        });
    },

    deleteCustomer: (req, res) => {
        db.deleteCustomer((err, customer) => {
            if (!err) {
                res.send(customer);
            } else {
                res.send(err);
            }
        });
    }



};