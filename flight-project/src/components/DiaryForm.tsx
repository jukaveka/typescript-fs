import { useState } from "react";
import { createDiary } from "../services/DiaryService";
import { Visibility, Weather, type DiaryEntry } from "../types";

interface DiaryFormProps {
  diaries: DiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}

const DiaryForm = (props: DiaryFormProps) => {
  const { diaries, setDiaries } = props;

  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<Weather>(Weather.Rainy);
  const [visibility, setVisibility] = useState(Visibility.Poor);
  const [comment, setComment] = useState("");

  const handleNewDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newDiary = {
      date: date,
      weather: weather,
      visibility: visibility,
      comment: comment,
    };

    createDiary(newDiary).then((data) => {
      setDiaries(diaries.concat(data));
    });

    setDate("");
    setWeather(Weather.Rainy);
    setVisibility(Visibility.Poor);
    setComment("");
  };

  return (
    <>
      <h3> Add new entry </h3>
      <form>
        <p>
          <label htmlFor="new-diary-date">
            <b>Date</b>
          </label>
          <br />
          <input
            id="new-diary-date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor="new-diary-weather">
            <b>Weather</b>
          </label>
          <br />
          <label htmlFor="weather-rainy"> Rainy </label>
          <input
            type="radio"
            id="weather-rainy"
            name="new-diary-weather"
            value="rainy"
            onChange={() => setWeather(Weather.Rainy)}
          />
          <label htmlFor="weather-cloudy"> Cloudy </label>
          <input
            type="radio"
            id="weather-cloudy"
            name="new-diary-weather"
            value="cloudy"
            onChange={() => setWeather(Weather.Cloudy)}
          />
          <label htmlFor="weather-windy"> Windy </label>
          <input
            type="radio"
            id="weather-windy"
            name="new-diary-weather"
            value="windy"
            onChange={() => setWeather(Weather.Windy)}
          />
          <label htmlFor="weather-stormy"> Stormy </label>
          <input
            type="radio"
            id="weather-stormy"
            name="new-diary-weather"
            value="stormy"
            onChange={() => setWeather(Weather.Stormy)}
          />
          <label htmlFor="weather-sunny"> Sunny </label>
          <input
            type="radio"
            id="weather-sunny"
            name="new-diary-weather"
            value="sunny"
            onChange={() => setWeather(Weather.Sunny)}
          />
        </p>
        <p>
          <label htmlFor="new-diary-visibility">
            <b>Visibility</b>
          </label>
          <br />
          <label htmlFor="visibility-poor"> Poor </label>
          <input
            type="radio"
            id="visibility-poor"
            value="poor"
            name="new-diary-visibility"
            onChange={() => setVisibility(Visibility.Poor)}
          />
          <label htmlFor="visibility-okay"> Okay </label>
          <input
            type="radio"
            id="visibility-okay"
            value="ok"
            name="new-diary-visibility"
            onChange={() => setVisibility(Visibility.Ok)}
          />
          <label htmlFor="good-weather"> Good </label>
          <input
            type="radio"
            id="visibility-good"
            value="good"
            name="new-diary-visibility"
            onChange={() => setVisibility(Visibility.Good)}
          />
          <label htmlFor="great-weather"> Great </label>
          <input
            type="radio"
            id="visibility-great"
            value="great"
            name="new-diary-visibility"
            onChange={() => setVisibility(Visibility.Great)}
          />
        </p>
        <p>
          <label htmlFor="new-diary-comment">
            <b>Comment</b>
          </label>
          <br />
          <input
            id="new-diary-comment"
            value={comment}
            onChange={(event) => setComment(event?.target.value)}
          />
        </p>
        <button type="submit" onClick={handleNewDiary}>
          Add diary
        </button>
      </form>
    </>
  );
};

export default DiaryForm;
