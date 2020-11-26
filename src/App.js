import React, {useEffect, useState} from "react";
import MainLayout from "./layouts/MainLayout";
import 'semantic-ui-css/semantic.min.css'
import useBoats from "./lib/hooks/useBoats";
import useLoading from "./lib/hooks/useLoading";
import Loader from "./components/Loader";

function App() {
    const {
        getAllBoats
    } = useBoats();

    const {
        isLoading
    } = useLoading();

    const [pageLoading, setPageLoading] = useState(isLoading);

    useEffect(() => {
        getAllBoats();
    }, []);

    useEffect(() => {
        setPageLoading(isLoading)
    }, [isLoading]);

  return (
    <div className="App">
        {pageLoading ? (<Loader size="massive" />) : ( <MainLayout />)}
    </div>
  );
}

export default App;
