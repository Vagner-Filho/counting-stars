import '../node_modules/react-vis/dist/style.css'
import { Chart } from './components/Chart'
import { fetchStars } from './utils/fetchStars';
import { getComposedStarsHistory } from './utils/getComposedStarsHistory';
import { Historico } from './utils/interfaces';
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  let loadingData = useRef(true);
  
  const [starsData, setStarsData] = useState<Historico>()
  useEffect(() => {
    fetchStars()
    .then((res) => {
      loadingData.current = false;
      return setStarsData(getComposedStarsHistory(res));
    })
  }, [])

  return (
    <div>
      <header className='App-header'>
        <h1>Counting Stars</h1>
      </header>
      {!loadingData.current &&
        <Chart chartHeight={600} chartWidth={1000} starsHistory={starsData as Historico} />
      }
    </div>
  );
}

export default App;
