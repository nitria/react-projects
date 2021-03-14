import React, { useState, useEffect } from "react";
const url = "https://nitria-hotels-api.herokuapp.com/hotels";
function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchHotels = async () => {
    const response = await fetch(url);
    const hotels = await response.json();
    setHotels(hotels);
    setLoading(false);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <div className="title loading-title">
          <h2>hotels</h2>
        </div>
        <img
          className="loadingBorder"
          src="../images/loading-border.png"
          alt="loading-border"
        />
      </section>
    );
  }

  const { name, location, img, id, desc } = hotels[value];

  return (
    <section className="section">
      <div className="title">
        <h2>hotels</h2>
      </div>
      <div className="hotels-container">
        <div className="btn-container">
          {hotels.map((hotel, index) => {
            return (
              <button
                key={hotel.id}
                onClick={() => setValue(index)}
                className={`hotel-btn ${index === value && "active-btn"}`}
              >
                {hotel.name}
              </button>
            );
          })}
        </div>
        <article className="hotel" key={id}>
          <img src={img} alt={name} className="img" />
          <h3>{name}</h3>
          <h4>{location}</h4>
          <p>{desc}</p>
        </article>
      </div>
    </section>
  );
}

export default App;
