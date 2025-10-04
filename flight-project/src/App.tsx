import { useState, useEffect } from "react";

import { type DiaryEntry } from "./types";

import DiaryEntries from "./components/DiaryEntries";
import Header from "./components/Header";

import { getAllDiaries } from "./services/DiaryService";
import DiaryForm from "./components/DiaryForm";
import Notification from "./components/Notification";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);

  return (
    <>
      <Header />
      <Notification notification={notification} />
      <DiaryForm
        diaries={diaries}
        setDiaries={setDiaries}
        setNotification={setNotification}
      />
      <DiaryEntries diaries={diaries} />
    </>
  );
}

export default App;
