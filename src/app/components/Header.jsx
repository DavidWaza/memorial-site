export default function Header(props) {
  return (
      <div className="primary_font primary_font-size">
        {props.title.toUpperCase()}
      </div>
  );
}
