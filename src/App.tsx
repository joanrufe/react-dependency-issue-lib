import React, {useState, useEffect} from "react";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  },[])

  return (
    <div className="App">
      {loaded ? 'Loaded!' : 'Loading....'}
    </div>
  );
}

export default App;
