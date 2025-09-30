type HeaderProps = { text: string };

const Header = (props: HeaderProps) => {
  return (
    <div>
      <h1> {props.text} </h1>
    </div>
  );
};

export default Header;
