import { useState } from "react";
import { Div } from "../Components/Files";
function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <Div NameClass="footer">
      <Div NameClass="container">
        Copyright © <span className="year">{currentYear}</span> <a className="company">Cyborg Gaming</a> Company. All rights reserved. <br/>
        Design: TemplateMo
      </Div>
    </Div>
  );
}
export default Footer;
