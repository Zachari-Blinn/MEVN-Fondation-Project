const { check, validationResult } = require('express-validator');

exports.validateRegister = [
    //Check firstname
    check('firstname')
        .not()
        .isEmpty()
        .withMessage('Firstname field is empty')
        .bail(),
    //Check lastname
    check('lastname')
        .not()
        .isEmpty()
        .withMessage('Lastname field is empty')
        .bail(),
    //Check email
    check('email')
        .exists()
        .trim()
        .normalizeEmail()
        .withMessage('Email not valid')
        .bail()
        .not()
        .isEmpty()
        .withMessage('Email field is empty')
        .bail(),
    //Check password
    check('password')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Password field is empty')
        .bail()
        .isLength({
            min: 6
        })
        .withMessage('Password must have 6 characters min')
        .bail()
        .isLength({
            max: 32
        })
        .withMessage('Password must have 32 characters max')
        .bail(),
    //result
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({
                errors: errors.array()
            });
        next();
    },
];

exports.validateLogin = [
    //check email
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email field is empty')
        .bail(),
    //check password
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password field is empty')
        .bail(),
    //result
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({
                errors: errors.array()
            });
        next();
    },
];