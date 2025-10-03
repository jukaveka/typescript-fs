import { useState, useEffect } from "react";
import DiaryEntries from "./components/DiaryEntries";
import { type DiaryEntry } from "./types";
import { getAllDiaries } from "./services/DiaryService";
import Header from "./components/Header";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  return (
    <>
      <Header />
      <DiaryEntries diaries={diaries} />
    </>
  );
}

export default App;
