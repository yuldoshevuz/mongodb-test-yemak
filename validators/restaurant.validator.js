const { checkSchema } = require('express-validator')

module.exports.addRestaurantValidation = checkSchema({
    name: {
        isLength: {
            options: { min: 3, max: 100 },
            errorMessage: 'The name must be at least 3 and at most 100 characters'
        },
        isString: {
            errorMessage: 'The name must be a string',
            bail: true
        },
        notEmpty: {
            errorMessage: 'The name cannot be empty',
            bail: true
        }
    },
    phone_number: {
        isNumeric: {
            errorMessage: 'The phone number must be in numeric format'
        },
        isLength: {
            options: { min: 9, max: 9 },
            errorMessage: 'Phone number must be 9 characters long'
        }
    },
    s_work_time: {
        isString: {
            errorMessage: 'Start working time must be a string',
            bail: true
        },
        matches: {
            options: /([0-1][0-9]|[[2][0-3]):[0-5][0-9]:[0-5][0-9]/,
            errorMessage: 'Error time format',
            bail: true
        }
    },
    e_work_time: {
        isString: {
            errorMessage: 'End working time must be a string',
            bail: true
        },
        matches: {
            options: /([0-1][0-9]|[[2][0-3]):[0-5][0-9]:[0-5][0-9]/,
            errorMessage: 'Error time format',
            bail: true
        }
    },
    work_status: {
        isBoolean: {
            errorMessage: 'Work status should be boolean only',
            bail: true
        }
    },
    address: {
        isString: {
            options: { min: 5 },
            errorMessage: 'The address must be a string',
            bail: true
        }
    }
}, ['body'])

module.exports.updateRestaurantValidation = checkSchema({
    name: {
        isLength: {
            options: { min: 3, max: 100 },
            errorMessage: 'The name must be at least 3 and at most 100 characters'
        },
        isString: {
            errorMessage: 'The name must be a string',
            bail: true
        },
        notEmpty: {
            errorMessage: 'The name cannot be empty',
            bail: true
        },
        optional: true
    },
    phone_number: {
        isNumeric: {
            errorMessage: 'The phone number must be in numeric format'
        },
        isLength: {
            options: { min: 9, max: 9 },
            errorMessage: 'Phone number must be 9 characters long'
        },
        optional: true
    },
    s_work_time: {
        isString: {
            errorMessage: 'Start working time must be a string',
            bail: true
        },
        matches: {
            options: /([0-1][0-9]|[[2][0-3]):[0-5][0-9]:[0-5][0-9]/,
            errorMessage: 'Error time format',
            bail: true
        },
        optional: true
    },
    e_work_time: {
        isString: {
            errorMessage: 'End working time must be a string',
            bail: true
        },
        matches: {
            options: /([0-1][0-9]|[[2][0-3]):[0-5][0-9]:[0-5][0-9]/,
            errorMessage: 'Error time format',
            bail: true
        },
        optional: true
    },
    work_status: {
        isBoolean: {
            errorMessage: 'Work status should be boolean only',
            bail: true
        },
        optional: true
    },
    address: {
        isString: {
            options: { min: 5 },
            errorMessage: 'The address must be a string',
            bail: true
        },
        optional: true
    }
}, ['body'])