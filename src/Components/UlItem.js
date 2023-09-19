 function UlItem (props)  {
  return(
        <ul className={props.nameClass}>
            {props.children}
        </ul>
  );
};

export default UlItem;
 