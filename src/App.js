import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gym from "./pages/Gym";
import GymDetails from "./pages/GymDetails";
import axios from "axios";

function App() {
  const [gymData, setGymData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState(" ");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${cityName}`
      );
      console.log(res);
      console.log(res.data.data);
      setGymData(res.data.data);
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
            />
          }
        />
        <Route path="/gym/details" element={<GymDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
