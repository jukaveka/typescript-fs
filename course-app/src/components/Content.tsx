import type { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map((part, index) => {
        return (
          <>
            <Part key={`course-${index + 1}-${part.kind}`} coursePart={part} />
          </>
        );
      })}
    </>
  );
};

export default Content;
