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
        return (
          <p key={`course-${coursePart.name}-projects`}>
            Group projects - {coursePart.groupProjectCount}
          </p>
        );
      case "background":
        return (
          <a
            key={`course-${coursePart.name}-material`}
            href={coursePart.backgroundMaterial}
          >
            Background material
          </a>
        );
      default:
        assertNever(coursePart);
        break;
    }
  };

  return (
    <>
      <p key={`course-${coursePart.name}-name`}> Course - {coursePart.name} </p>
      <p key={`course-${coursePart.name}-count`}>
        Exercises - {coursePart.exerciseCount}
      </p>
      {renderOptionalFields()}
      <hr />
    </>
  );
};

export default Part;
