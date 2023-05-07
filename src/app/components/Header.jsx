export default function Header(props) {
  return (
    <>
      <p className="primary_font primary_font-size">
        {props.title.toUpperCase()}
      </p>
    </>
  );
}
