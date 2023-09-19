function ListItem(props) {
  return (
    <li className={props.nameClass}>
    {props.children}
  </li>
  );
}

export default ListItem;