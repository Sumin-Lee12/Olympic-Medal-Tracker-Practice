import { useState } from 'react';
import './App.css'
import MedalForm from './components/MedalForm';
import MedalList from './components/MedalList';

function App() {

  const [medals, setMedals] = useState([]);
  const [sortType, setSortType] = useState("gold");

  const handleDelete = (country) => {
    const updatedMedals = medals.filter((medal) => medal.country !== country);
    setMedals(updatedMedals);
  }

  const getSortedMedals = () => {
    if (sortType === "gold") {
      const updatedMedals = medals.sort((a, b) => b.gold - a.gold);
      return updatedMedals;
    } else {
      const updatedMedals = medals.sort((a, b) => (b.gold + b.silver + b.bronze) - (a.gold + a.silver + a.bronze))
      return updatedMedals;
    }
  }

  const updatedMedals = getSortedMedals();

  return (
    <>
      <div className='app'>
        <h1 className='title'>파리 올림픽 메달 트래커!</h1>
        <div>
          <label>
            <input 
              type="radio"
              value={"gold"}
              checked={sortType === "gold"}
              onChange={(e) => setSortType(e.target.value)}
            />
            금메달 순
          </label>
          <label>
            <input 
              type="radio"
              value={"total"}
              checked={sortType === "total"}
              onChange={(e) => setSortType(e.target.value)}
            />
            총 메달 순
          </label>
        </div>
        <MedalForm medals={medals} setMedals={setMedals}/>
        <MedalList medals={updatedMedals} handleDelete={handleDelete}/>

      </div>
    </>
  )
}

export default App
