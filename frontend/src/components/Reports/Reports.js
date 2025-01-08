import React, { useEffect, useState } from 'react';
import API from '../../services/api';
// import { Pie } from 'react-chartjs-2';

const Reports = () => {
  const [report, setReport] = useState(null);

  const fetchMonthlyReport = async () => {
    try {
      const response = await API.get('/reports/monthly');
      setReport(response.data.report);
    } catch (error) {
      console.error(error.response?.data?.message || 'Error fetching report');
    }
  };

  useEffect(() => {
    fetchMonthlyReport();
  }, []);

  if (!report) return <p>Loading report...</p>;

  const data = {
    labels: report.categories.map(c => c.category),
    datasets: [
      {
        data: report.categories.map(c => c.percentage),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Monthly Report</h2>
      {/* <Pie data={data} /> */}
    </div>
  );
};

export default Reports;
