import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import CountRatings from "./CountRatings"
const RatingChart = ({ reviews }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const groupedData = CountRatings(reviews);
    setData(groupedData);
  }, [reviews]);

  return (
    <div className="bg-base-100 p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-2">⭐ Rating Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
