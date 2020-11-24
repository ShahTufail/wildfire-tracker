import Map from "./components/Map";
import { useState, useEffect } from "react";
import LoaderIcon from "./components/loaderIcon";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEventData();
  }, []);

  return (
    <div>
      <Header />
      {loading ? <LoaderIcon /> : <Map eventData={eventData} />}
    </div>
  );
}

export default App;
