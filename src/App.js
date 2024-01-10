import "./App.css";
import Cover from "./components/cover";
import Features from "./components/features";
import VideoLinks from "./components/youtube";
import ContactUS from "./components/aboutus";
import Aboutproj from "./components/pg1";
import Pg2 from "./components/page2";
import Pg3 from "./components/page3";
import Terms from "./components/terms";
function App() {
  return (
    <div>
      <Cover></Cover>
      <Features></Features>
      <VideoLinks />
      
      <Aboutproj/>
      <Pg2/>
      <Pg3/>
      <Terms/>
    </div>
  );
}

export default App;
