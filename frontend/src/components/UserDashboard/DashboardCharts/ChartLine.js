import React, { useState } from "react";

import {
  ChartComponent,
  Category,
  DataLabel,
  LineSeries,
  Legend,
  Tooltip,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
} from "@syncfusion/ej2-react-charts";

const ChartLine = () => {
  let info = [
    { month: "Jan", sales: 35 },
    { month: "Feb", sales: 28 },
    { month: "Mar", sales: 34 },
    { month: "Apr", sales: 32 },
    { month: "May", sales: 40 },
    { month: "Jun", sales: 32 },
    { month: "Jul", sales: 35 },
    { month: "Aug", sales: 55 },
    { month: "Sep", sales: 38 },
    { month: "Oct", sales: 30 },
    { month: "Nov", sales: 25 },
    { month: "Dec", sales: 32 },
  ];

  const [data, setData] = useState(info);
  return (
    <ChartComponent
      id="charts"
      width="auto"
      primaryXAxis={{ valueType: "Category" }}
    >
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={info}
          xName="month"
          yName="sales"
          name="Sales"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default ChartLine;
