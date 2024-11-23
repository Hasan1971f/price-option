import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { name: 'Student 1', math: 85, physics: 78, chemistry: 90 },
        { name: 'Student 2', math: 78, physics: 82, chemistry: 88 },
        { name: 'Student 3', math: 92, physics: 89, chemistry: 94 },
        { name: 'Student 4', math: 88, physics: 76, chemistry: 85 },
        { name: 'Student 5', math: 76, physics: 80, chemistry: 78 },
        { name: 'Student 6', math: 95, physics: 92, chemistry: 91 },
        { name: 'Student 7', math: 89, physics: 85, chemistry: 87 },
        { name: 'Student 8', math: 84, physics: 90, chemistry: 83 },
        { name: 'Student 9', math: 91, physics: 88, chemistry: 89 },
        { name: 'Student 10', math: 87, physics: 84, chemistry: 92 },
      ];
  
    return (
        <div>
            <LChart width={500} height={500} data={ subjectMarksData}>
            <XAxis dataKey="day" />
            <YAxis></YAxis>
            
              <Line dataKey="math" stroke='red'></Line>
              <Line dataKey={"physics"} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;