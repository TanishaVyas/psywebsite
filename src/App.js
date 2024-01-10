import "./App.css";
import Cover from "./components/cover";
import Features from "./components/features";
import VideoLinks from "./components/youtube";
import ContactUS from "./components/aboutus";
function App() {
  return (
    <div>
      <Cover></Cover>
      <Features></Features>
      <VideoLinks />
      <ContactUS />
    </div>
  );
}

export default App;
