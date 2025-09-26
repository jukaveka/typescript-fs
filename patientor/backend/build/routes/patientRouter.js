"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const toNewPatient_1 = require("../utils/toNewPatient");
const parseValue_1 = require("../utils/parseValue");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    return res.send(patientService_1.default.getNonSensitivePatients());
});
router.post("/", (req, res) => {
    try {
        const validatedPatient = (0, toNewPatient_1.toNewPatient)(req.body);
        const addedPatient = patientService_1.default.addPatient(validatedPatient);
        return res.send(addedPatient);
    }
    catch (error) {
        return res.status(400).send((0, parseValue_1.parseErrorMessage)(error));
    }
});
exports.default = router;
