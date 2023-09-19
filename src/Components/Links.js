import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
function Links() {
  return (
    <div className="links">
      <NavLink  to="/" className="">
      Home
      </NavLink>
      <NavLink to="/Browse">
      Browse
      </NavLink>
      <NavLink to="/Details">
      Details
      </NavLink>
      <NavLink to="/Streams">
      Streams
      </NavLink>
    </div>
  );
}
export default Links;
{/* <ul className="links">
<li  className="active">
  <NavLink to="/">Home</NavLink>
</li>
<li>
  <NavLink to="/Browse">Browse</NavLink>
</li>
<li>
  <NavLink to="/Details">Details</NavLink>
</li>
<li>
  <NavLink to="/Streams">Streams</NavLink>
</li>
</ul> */}