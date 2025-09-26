"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPatient = void 0;
const parseValue_1 = require("./parseValue");
const toNewPatient = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Missing or incomplete data in request body");
    }
    if ("name" in object &&
        "dateOfBirth" in object &&
        "ssn" in object &&
        "gender" in object &&
        "occupation" in object) {
        const newPatient = {
            name: (0, parseValue_1.parseString)(object.name, "Name"),
            dateOfBirth: (0, parseValue_1.parseDateOfBirth)(object.dateOfBirth),
            ssn: (0, parseValue_1.parseSsn)(object.ssn),
            gender: (0, parseValue_1.parseString)(object.gender, "Gender"),
            occupation: (0, parseValue_1.parseString)(object.occupation, "Occupation"),
        };
        return newPatient;
    }
    throw new Error("Missing fields in request body");
};
exports.toNewPatient = toNewPatient;
