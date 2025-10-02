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
        return <p> {coursePart.groupProjectCount} group projects </p>;
      case "background":
        return <a href={coursePart.backgroundMaterial}>Background material</a>;
      case "requirements":
        return <p> {coursePart.requirements.join(", ")} required </p>;
      default:
        assertNever(coursePart);
        break;
    }
  };

  return (
    <>
      <p>
        <b> {coursePart.name} </b>
      </p>
      <p>{coursePart.exerciseCount} exercises</p>
      {renderOptionalFields()}
      <hr />
    </>
  );
};

export default Part;
