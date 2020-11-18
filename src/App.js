import React, {useEffect} from "react";
import MainLayout from "./layouts/MainLayout";
import 'semantic-ui-css/semantic.min.css'
import useBoats from "./lib/hooks/useBoats";

function App() {
    const {
        getAllBoats
    } = useBoats();

    useEffect(() => {
        getAllBoats();
    }, []);
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
