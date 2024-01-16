import "./App.css";
import Tilt from "./components/tilt";
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
import ScrollToTopButton from "./components/ScrollToTopButton";
import React, { useEffect, useState } from 'react';

function App() {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const handleOrientationChange = (e) => {
      setIsPortrait(e.matches);
    };

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", handleOrientationChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      {isPortrait ? (
        <>
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
          <ScrollToTopButton />
        </>
      ) : (
        <div>
          <Tilt />
        </div>
      )}
    </div>
  );
}

export default App;
