import { useState, useEffect } from "react";

import { type DiaryEntry } from "./types";

import DiaryEntries from "./components/DiaryEntries";
import Header from "./components/Header";

import { getAllDiaries } from "./services/DiaryService";
import DiaryForm from "./components/DiaryForm";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  return (
    <>
      <Header />
      <DiaryForm diaries={diaries} setDiaries={setDiaries} />
      <DiaryEntries diaries={diaries} />
    </>
  );
}

export default App;
