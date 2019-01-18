
const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "This is get method",
        status: "Ok"
    });
});

router.post('/', (req, res, next) => {
    const record = {
        name: req.body.name,
        no: req.body.no
    }
    res.status(200).json({
        message: "This is post method",
        status: record
    });
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: "This is put method",
        status: "Ok"
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "This is delete method",
        status: "Ok"
    });
});

router.get('/VerifyLogin', (req, res, next) => {
    const loginCreditionals = req.body;
    if (loginCreditionals.username == "admin" && loginCreditionals.password == "Bishop90") {
        res.status(200).json({
            message: "This is Verify Password method",
            status: "Ok",
            token: jwt.sign({ username: "admininistrator" }, "dineshkumar", { expiresIn: 30000 })
        });
    }
});
module.exports = router;
