import axios from "axios";
import type { DiaryEntry, newDiaryEntry } from "../types";

const baseUrl = "http://localhost:3000/api/diaries/";

export const getAllDiaries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then((response) => response.data);
};

export const createDiary = (object: newDiaryEntry) => {
  try {
    return axios
      .post<DiaryEntry>(baseUrl, object)
      .then((response) => response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Something went wrong with creating new diary entry. Status: ${error.status}. Error: ${error.response}`
      );
    } else {
      throw new Error(`Something went wrong with creating new diary entry`);
    }
  }
};
