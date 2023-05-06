export default function Header(props) {
  return <div>
    <p className="primary_font primary_font-size">{props.title.toUpperCase()}</p>
    </div>;
}
