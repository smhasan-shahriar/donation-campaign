import React, { useContext, PureComponent  } from 'react';
import { TotalContext } from '../mainLayout/MainLayout';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const [total] = useContext(TotalContext);
    const totalDonations = [...total];
    console.log(totalDonations)
    const data = [
        { name: 'Group A', value: 12-totalDonations.length },
        { name: 'Group B', value: totalDonations.length },
      ];
      
      const COLORS = ['#FF444A', '#00C49F' ];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
    return (
        <div className='mx-auto max-w-[1320px] flex flex-col justify-center items-center mb-20'>
            <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='flex flex-col md:flex-row gap-14'>
            <div className='flex justify-center items-center gap-4'>
                <p>Your Donation</p>
                <div className='w-24 h-3 bg-[#00C49F]'></div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <p>Total Donation</p>
                <div className='w-24 h-3 bg-[#FF444A]'></div>
            </div>
        </div>
        </div>
    );
};

export default Statistics;