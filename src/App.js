import axios from "axios";
import React, { useState, useEffect } from 'react';
import CardList from "./components/CardList";
import Header from "./components/Header";
import moment from 'moment';
import "./styles/App.css";

function App() {
  const [stats, setStats] = useState({});
  const [terms, setTerms] = useState({});
  const [date, setDate] = useState(new Date());
  let currDate = moment(date).format('YYYY-MM-DD')

  useEffect(() => {
    if (!localStorage.getItem(currDate)) {
      axios.get(`https://russianwarship.rip/api/v1/statistics/latest`).then(res => {
        setStats(res.data.data)
        localStorage.setItem(currDate, JSON.stringify(res.data.data));
      })
    }
    else {
      setStats(JSON.parse(localStorage.getItem(currDate)))
    }

    if (!localStorage.getItem("terms")) {
      axios.get("https://russianwarship.rip/api/v1/terms/en").then(res => {
        setTerms(res.data.data)
        localStorage.setItem("terms", JSON.stringify(res.data.data));
      })
    }
    else {
      setTerms(JSON.parse(localStorage.getItem("terms")))
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(currDate)) {
      axios.get(`https://russianwarship.rip/api/v1/statistics/${moment(date).format('YYYY-MM-DD')}`).then(res => {
        setStats(res.data.data)
        localStorage.setItem(currDate, JSON.stringify(res.data.data));
      })
    }
    else {
      setStats(JSON.parse(localStorage.getItem(currDate)))
    }

  }, [date]);

  return (
    <React.StrictMode>
      <Header setStats={setStats} date={date} setDate={setDate}/>
      <CardList stats={stats} terms={terms}/>
    </React.StrictMode>
  );
}

export default App;
