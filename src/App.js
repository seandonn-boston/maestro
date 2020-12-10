import React from "react";
import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { SubHeader } from "./SubHeader/SubHeader";
import { Card } from "./Card/Card";
import "./App.scss";

const ROCKETS = {
  title: "rockets",
  description: "View details on the rocket fleet",
};
const SHIPS = { title: "ships", description: "View details on the ship fleet" };
const CAPSULES = {
  title: "capsules",
  description: "View details on the capsules",
};
const ROADSTER = {
  title: "roadster",
  description: "View details in its 557 day journey",
};

const cardConstants = [ROCKETS, SHIPS, CAPSULES, ROADSTER];

function App() {
  const [cardData, setCardData] = useState([]);
  const [err, setErr] = useState(null);

  // TODO: Roadster API does not seem to be working appropriately, double back to resolve
  const fetchCardData = () => {
    let fetchArr = cardConstants.map(({ title }) => {
      return fetch(`https://api.spacex.land/rest/${title}`);
    });
    Promise.all(fetchArr)
      .then((responses) => {
        return Promise.all(
          responses.map((res) => {
            return res.json();
          })
        );
      })
      .then((data) => {
        const parsedData = data.map((d, i) => {
          return {
            count: d.length,
            title:
              cardConstants[i].title.charAt(0).toUpperCase() +
              cardConstants[i].title.slice(1),
            // Temp URL linking to API, unsure where these links are supposed to be going at this time
            link: `https://api.spacex.land/rest/${cardConstants[i].title}`,
            description: cardConstants[i].description,
          };
        });
        setCardData(parsedData);
      })
      .catch((err) => setErr(err));
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
        <SubHeader />
      </header>
      <section>
        <div className="Cards">
          {cardData.map(({ count = 0, title, description, link }, i) => {
            return (
              <Card
                key={i}
                title={`${count} ${title}`}
                description={description}
                link={link}
              />
            );
          })}
        </div>
        <aside>{/* For Past Launches */}</aside>
      </section>
    </div>
  );
}

export default App;
