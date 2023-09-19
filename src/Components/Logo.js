import logo from "../assets/images/logo.png";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function Logo() {
  return (
      <Link to="/" className="logo">
        <img src={logo} />
      </Link>
  );
}

export default Logo;
