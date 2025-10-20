import axios, { AxiosResponse } from "axios";
import { Entry, EntryFormFields, Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";
import { parseNewEntryFromValues } from "../utils/parseNewEntry";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

const getById = async (id: string | undefined) => {
  if (typeof id === "string") {
    const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);

    return data;
  } else {
    throw new Error(`Patient ID is undefined`);
  }
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
};

const addEntry = async (patientId: Patient["id"], object: EntryFormFields) => {
  const newEntryObject = parseNewEntryFromValues(object);

  const { data } = await axios.post<EntryFormFields, AxiosResponse<Entry>>(
    `${apiBaseUrl}/patients/${patientId}/entries`,
    newEntryObject
  );

  return data;
};

export default {
  getAll,
  getById,
  create,
  addEntry,
};
