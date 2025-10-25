import React, { useState } from "react";
import "./App.css";


function App() {
  const [showFact, setShowFact] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleFact = () => setShowFact(!showFact);

  const playDeathSound = () => {
    const audio = new Audio("/sounds/you-died.mp3");
    audio.play();
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Hello World!</h1>

      <p>My Name is <strong>Karl Ngonge</strong></p>
      <p>Bachelor in Computer Engineering</p>
      <p>I am from San Antonio, TX</p>
      <p>I like to work out, play video games, and hang out with friends.</p>

      <div className="gallery">
  <img src="/images/karl-ngonge.jpg" alt="Karl Ngonge" />
  <img src="/images/san-antonio-skyline.jpg" alt="San Antonio skyline" />
  <img src="/images/er.jpg" alt="ER placeholder" />
</div>


     
      <div className="buttons">
        <button onClick={toggleFact}>
          {showFact ? "Hide Fun Fact" : "Show Fun Fact"}
        </button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={playDeathSound}>Play "YOU DIED"</button>
      </div>

      
      {showFact && <p className="fun-fact">I like to skateboard!</p>}

    </div>

    
  );
}

export default App;
