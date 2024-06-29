import React, { useContext, useEffect } from 'react';
import { ReportContext } from '../../context/ReportContext';
import { fetchData } from '../../utils/api';  // Correct import statement

const ReportList = () => {
  const { reports, setReports } = useContext(ReportContext);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const url = `mongodb://localhost:27017/crime-report`;
        setReports(response);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, [setReports]);

  return (
    <div>
      <h2>Crime Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            {report.type} at {report.location}: {report.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
