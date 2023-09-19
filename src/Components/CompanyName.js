function CompanyName(props) {
  return (
    <h4>
      {props.title}
      <br /> {props.category && <span className={`companyName ${props.NameClass}`}>{props.category}</span>}
    </h4>
  );
}
export default CompanyName;