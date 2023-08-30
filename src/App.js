import './App.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import Data from './Data';
import Data2 from './Data2';
import Header from './components/Header';
import PieChart from './components/PieChart';
import { BarChart } from './components/BarChart';
import LineChart from './components/LineChart';


// What does this do?, Enables treeshaking?
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
        borderColor: "blue",
        borderWidth: 2
      },
      {
        label: "Users Gained ",
        data: Data2.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "red",
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
