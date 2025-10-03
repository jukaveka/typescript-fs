import { type DiaryEntry } from "../types";

interface DiaryProps {
  diaryEntry: DiaryEntry;
}

const Diary = (props: DiaryProps) => {
  console.log(`Diary to display ${props.diaryEntry}`);
  const entry = props.diaryEntry;

  console.log(`Entry to display ${entry}`);
  return (
    <>
      <p>
        <b>{entry.date}</b>{" "}
      </p>
      <p> {entry.weather} </p>
      <p> {entry.visibility} </p>
      <br />
    </>
  );
};

export default Diary;
