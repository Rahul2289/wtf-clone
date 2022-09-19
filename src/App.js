import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gym from "./pages/Gym";
import GymDetails from "./pages/GymDetails";
import axios from "axios";

function App() {
  const [gymData, setGymData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${cityName}`
      );

      setGymData(res.data.data);
      setTerms(res.data.terms);
      setLoading(false);
    };

    fetchData();
  }, [cityName]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Gym
              gymData={gymData}
              loading={loading}
              setCityName={setCityName}
              cityName={cityName}
            />
          }
        />
        <Route path="/gym/details/:id" element={<GymDetails terms={terms} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
