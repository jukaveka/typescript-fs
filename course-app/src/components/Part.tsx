import type { CoursePart } from "../types";

interface CoursePartProps {
  coursePart: CoursePart;
}

const Part = (props: CoursePartProps) => {
  const coursePart = props.coursePart;

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const renderOptionalFields = () => {
    switch (coursePart.kind) {
      case "basic":
        return null;
      case "group":
        return <p>Group projects - {coursePart.groupProjectCount}</p>;
      case "background":
        return <a href={coursePart.backgroundMaterial}>Background material</a>;
      case "requirements":
        return <p> Requirements - {coursePart.requirements.join(", ")}</p>;
      default:
        assertNever(coursePart);
        break;
    }
  };

  return (
    <>
      <p> Course - {coursePart.name} </p>
      <p>Exercises - {coursePart.exerciseCount}</p>
      {renderOptionalFields()}
      <hr />
    </>
  );
};

export default Part;
