import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Label.jsx';
import { chart_Data, getTotal } from '../helper/helper.jsx';
import { default as api } from '../store/apiSlice';

Chart.register(ArcElement);

export default function Graph() {

  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex justify-center max-w-xs mx-auto chart-container">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <div className="chart-text">
            <span>Total</span>
            <span className='text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
          </div>
        </div>
        <div className="flex flex-col py-10 gap-4">
          {/* Labels */}
          <Labels></Labels>
        </div>
      </div>
    </div>
  )
}
