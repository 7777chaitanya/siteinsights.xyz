import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

    
// const data = [{ name: "12 Apr", Visitors: 1 },
// { name: "16 Apr", Visitors: 1 },
// { name: "20 Apr", Visitors: 10000 },
// { name: "24 Apr", Visitors: 1 },
// { name: "28 Apr", Visitors: 0 },
// { name: "2 May", Visitors: 0 },
// { name: "6 May", Visitors: 0 },
// { name: "10 May", Visitors: 0 },
// { name: "16 Apr", Visitors: 1 },
// { name: "20 Apr", Visitors: 10000 },
// { name: "24 Apr", Visitors: 1 },
// { name: "28 Apr", Visitors: 0 },
// { name: "2 May", Visitors: 0 },
// { name: "6 May", Visitors: 0 },
// { name: "10 May", Visitors: 0 },


// ];


const DataChart = ({data}) => {
  return (
    <div style={{width: '80vw', margin:'20px auto'}}>

      <LineChart
        width={900}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="Visitors" stroke="#ff7300" yAxisId={0}  strokeWidth="2px"
/>
        {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
      </LineChart>
    </div>
  )
}

export default DataChart