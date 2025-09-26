"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const patientData_1 = __importDefault(require("../data/patientData"));
const toNonSensitivePatient_1 = require("../utils/toNonSensitivePatient");
const getPatients = () => {
    return patientData_1.default;
};
const getNonSensitivePatients = () => {
    return patientData_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: (0, uuid_1.v4)() }, patient);
    patientData_1.default.push(newPatient);
    return (0, toNonSensitivePatient_1.toNonSensitivePatient)(newPatient);
};
exports.default = {
    getPatients,
    getNonSensitivePatients,
    addPatient,
};
