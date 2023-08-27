import './App.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import Data from './Data';
import Header from './components/Header';
import PieChart from './components/PieChart';
import { BarChart } from './components/BarChart';
import LineChart from './components/LineChart';

Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 

  return (
    <>
      <Header />
    <div className="App">
      <LineChart chartData={chartData} />
      <BarChart chartData={chartData} />
      <PieChart chartData={chartData} />
    </div>
    </>
  );

}

export default App;
