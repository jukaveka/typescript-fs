import type { DiaryEntry } from "../types";
import Diary from "./Diary";

interface DiaryEntriesProps {
  diaries: DiaryEntry[];
}

const DiaryEntries = (props: DiaryEntriesProps) => {
  const diaries = props.diaries;

  return (
    <>
      <h3> Diary entries</h3>
      {diaries.map((diary) => {
        return (
          <>
            <Diary key={diary.id} diaryEntry={diary} />
          </>
        );
      })}
    </>
  );
};

export default DiaryEntries;
