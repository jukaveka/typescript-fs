"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNonSensitivePatient = void 0;
const parseValue_1 = require("./parseValue");
const toNonSensitivePatient = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Missing or incomplete data in request body");
    }
    if ("id" in object &&
        "name" in object &&
        "dateOfBirth" in object &&
        "ssn" in object &&
        "gender" in object &&
        "occupation" in object) {
        const nonSensitivePatient = {
            id: (0, parseValue_1.parseString)(object.id, "ID"),
            name: (0, parseValue_1.parseString)(object.name, "Name"),
            dateOfBirth: (0, parseValue_1.parseDateOfBirth)(object.dateOfBirth),
            gender: (0, parseValue_1.parseString)(object.gender, "Gender"),
            occupation: (0, parseValue_1.parseString)(object.occupation, "Occupation"),
        };
        return nonSensitivePatient;
    }
    throw new Error("Object given as parameter is missing required fields.");
};
exports.toNonSensitivePatient = toNonSensitivePatient;
