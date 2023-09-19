import {
  Footer,
  Container,
  Header,
  Browse,
  Home,
  Details,
  Streams,
  Profile,
  Api,
} from "./Components/Files";
import "./assets/css/homepage.css";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Browse" element={<Browse />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Streams" element={<Streams />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          <Api />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
