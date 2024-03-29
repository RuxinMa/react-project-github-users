// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart , FusionTheme);

// STEP 2 - Chart Data
// STEP 3 - Creating the JSON object to store the chart configurations
// hard coding data => dynamic data

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Popular",
        theme: "fusion",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
        paletteColors: '#14b8a6, #3730a3, #fbbf24, #fb7185, #854d0e'
      },
      // Chart Data
      data
    }
  };
  
  return (<ReactFC {...chartConfigs} />);
}

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// class App extends React.Component {
//   render() {
//     return (<ReactFC {...chartConfigs} />);
//   }
// }

export default ChartComponent;