import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../../redux/slices/reports';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Report from '../../components/Reports/Reports';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { reports, locations } = useSelector((state) => state.reports);

  const isReportsLoading = reports.status === 'loading';

  useEffect(() => {
    dispatch(fetchReports());
  }, []);

  console.log(reports);

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isReportsLoading ? [...Array(5)] : reports.items).map((report, index) =>
            isReportsLoading ? (
              <Report key={index} isLoading={true} />
            ) : (
              <Report
                key={report._id}
                _id={report._id}
                location={report.location}
                dangerLevel={report.dangerLevel}
                areaSize={report.areaSize}
                description={report.description}
                resources={report.resources}
                // Другие поля, если есть
              />
            ),
          )}
        </Grid>
        {/* Остальная часть вашей страницы */}
      </Grid>
    </>
  );
};

export default AdminPage;
