interface CourseContent {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: CourseContent[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courseParts.map((part, index) => {
        return (
          <p key={`course-${index + 1}`}>
            {part.name} {part.exerciseCount}
          </p>
        );
      })}
    </div>
  );
};

export default Content;
