"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSsn = exports.parseDateOfBirth = exports.parseErrorMessage = exports.parseString = void 0;
const isType_1 = require("./isType");
const parseString = (input, description) => {
    if (!input || !(0, isType_1.isString)(input)) {
        throw new Error(`${description} is missing or not valid string. ${description}: ${input}`);
    }
    return input;
};
exports.parseString = parseString;
const parseErrorMessage = (error) => {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
        errorMessage += ` Error: ${error.message}`;
    }
    return errorMessage;
};
exports.parseErrorMessage = parseErrorMessage;
const parseDateOfBirth = (dob) => {
    if (!dob || !(0, isType_1.isString)(dob) || !(0, isType_1.isDate)(dob) || !(0, isType_1.isValidDateOfBirth)(dob)) {
        throw new Error(`Date of birth is missing, not valid date or not valid date of birth. Date of birth: ${dob}`);
    }
    return dob;
};
exports.parseDateOfBirth = parseDateOfBirth;
const parseSsn = (ssn) => {
    if (!ssn || !(0, isType_1.isString)(ssn) || !(0, isType_1.isValidSsn)(ssn)) {
        throw new Error(`SSN is missing, not valid string or not valid SSN. SSN: ${ssn}`);
    }
    return ssn;
};
exports.parseSsn = parseSsn;
