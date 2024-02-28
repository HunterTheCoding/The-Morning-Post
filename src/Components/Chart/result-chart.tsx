import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import useAxiosPublic from '../../Hook/useAxiosPublic';


interface OptionData {
  option: string;
  optionImage?: string;
  votes: unknown[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

interface Data {
  name: string;
  image?: string;
  value: number;
}

interface RenderCustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  index: number;
}

const ResultChart: React.FC<{ pollId: string }> = ({ pollId }) => {
  const [pollData, setPollData] = useState<OptionData[]>([]);
 const AxiosPublic= useAxiosPublic()
  useEffect(() => {
    AxiosPublic
      .get(`/polls/${pollId}`)
      .then((response: { data: { options: React.SetStateAction<OptionData[]>; }; }) => {
        setPollData(response.data.options);
      })
      .catch((error: unknown) => {
        console.error('Error fetching poll data:', error);
      });
  }, [AxiosPublic, pollId]);

 
  const data: Data[] = pollData.map((optionData) => ({
    name: optionData?.option,
    image: optionData?.optionImage,
    value: optionData?.votes.length,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const isSmallScreen = window.innerWidth <= 768;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: RenderCustomizedLabelProps) => {
    const radiusMultiplier = isSmallScreen ? 0.5 : 1.2;
    const radius = innerRadius + (outerRadius - innerRadius) * radiusMultiplier;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central">
        {!isSmallScreen && data[index].name + ' : '} {data[index].value}
      </text>
    );
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const optionData = payload[0].payload;
      const { name, image, value } = optionData;

      let content;
      if (typeof name === 'string') {
        content = (
          <div className="p-3 text-sm rounded-lg shadow bg-primary-700">
            {image && <img src={image} alt="Option" width="100" height="100" />}
            {image ? (
              <p>
                <strong>Name:</strong> {name}
              </p>
            ) : (
              <p>{name}</p>
            )}
            <p>Votes: {value}</p>
            <p>Popularity: {`${(value / 100).toFixed(2)}%`}</p>
          </div>
        );
      }

      return <div className="custom-tooltip">{content}</div>;
    }

    return null;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="flex flex-col items-center text-2xl font-bold text-white font-secondary">
        Poll results
        <span className="text-sm text-primary-300">
          click or hover to see more
        </span>
      </h2>
      <div className="overflow-auto chart-container">
        <PieChart width={isSmallScreen ? 220 : 400} height={300}>
          <Pie
            data={data}
            cx={isSmallScreen ? '50%' : '50%'}
            cy={isSmallScreen ? '50%' : '50%'}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            cursor="pointer">
            {data.map((_entry,index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </div>
    </div>
  );
};

export default ResultChart;
