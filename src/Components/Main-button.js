export function MainButton(props) {
  return (
      <a onClick={props.onClick} className={`main-button ${props.className}`}>{props.text}</a>
  );
}
export default MainButton;
