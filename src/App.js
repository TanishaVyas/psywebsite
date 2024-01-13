import "./App.css";
import Test from "./components/test";
import Navbar from "./components/navbar";
import Cover from "./components/cover";
import Features from "./components/features";
import VideoLinks from "./components/youtube";
import ContactUS from "./components/aboutus";
import Aboutproj from "./components/pg1";
import Pg2 from "./components/page2";
import Pg3 from "./components/page3";
import Terms from "./components/terms";
import Clip from "./components/clip";

function App() {
  return (
    <div>
      
      <Navbar />
      <Cover></Cover>
      <Features></Features>
      <Aboutproj />
      <Pg2 />
      <Pg3 />
      <VideoLinks />
      <Clip />
      <ContactUS />
      <Terms />
    </div>
  );
}

export default App;
