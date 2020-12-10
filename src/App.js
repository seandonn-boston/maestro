import React from "react";
import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import "./App.scss";

function App() {
  //   const [data, setData] = useState({});
  //   const [err, setErr] = useState(null);

  //   const fetchData = () => {
  //     fetch("https://https://api.spacex.land/rest/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setErr(null);
  //         setData(data);
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         setErr(err);
  //       });
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="App">
      <Header />
      <p className="subHeading">
        Welcome back, here’s what’s happening with SpaceX today. Below is an
        overview of the fleets, all launches past and upcoming.
      </p>
    </div>
  );
}

export default App;
