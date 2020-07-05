import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

const state = {
  labels: ['Maharashtra', 'Gujrat', 'Madhya Pradesh',
    'karnataka', 'Telangana'],
  datasets: [
    {
      label: 'Network',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}
export class Chart extends React.Component {
  render() {
    return (
      <div>
        <div className="card-deck">
          <div className="card shadow-sm">
            <Pie
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Network speed permonth',
                  fontSize: 15,
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </div>
          <div className="card shadow-sm">
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 15
                },
                legend: {
                  display: false,
                  position: 'left'
                }
              }}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default Chart;