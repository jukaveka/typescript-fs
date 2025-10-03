import { type DiaryEntry } from "../types";

interface DiaryProps {
  diaryEntry: DiaryEntry;
}

const Diary = (props: DiaryProps) => {
  const entry = props.diaryEntry;

  return (
    <>
      <p>
        <b>{entry.date}</b>{" "}
      </p>
      <p> {entry.weather} </p>
      <p> {entry.visibility} </p>
    </>
  );
};

export default Diary;
