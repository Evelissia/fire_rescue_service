import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../../redux/slices/reports';
import { ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Report from '../../components/Reports/Reports';

import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportIcon from '@mui/icons-material/Report';
import ResourcesIcon from '@mui/icons-material/Build';
import UsersIcon from '@mui/icons-material/Group';

import theme from './theme.js';
import CreateReportForm from './CreateReportForm.jsx';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { reports } = useSelector((state) => state.reports);

  const isReportsLoading = reports.status === 'loading';

  const [tabIndex, setTabIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReport, setNewReport] = useState({
    location: {
      street: '',
      house: '',
      apartment: '',
    },
    dangerLevel: '',
    areaSize: '',
    description: '',
    resources: [],
  });

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleCreateReport = () => {};

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ display: 'flex', paddingLeft: '400px', height: '100vh' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="Vertical tabs example"
          style={{ borderRight: `1px solid #ddd`, width: '200px' }}>
          <Tab icon={<AssignmentIcon />} label="Заявки" />
          <Tab icon={<ReportIcon />} label="Отчеты" />
          <Tab icon={<ResourcesIcon />} label="Ресурсы" />
          <Tab icon={<UsersIcon />} label="Пользователи" />
        </Tabs>
        <Box style={{ flex: 1, padding: 20 }}>
          {tabIndex === 0 && <div>Здесь будет контент для заявок</div>}
          {tabIndex === 1 && (
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsFormOpen(true)}
                style={{ marginBottom: '20px' }}>
                Создать отчет
              </Button>
              {isFormOpen && (
                <CreateReportForm onSubmit={handleCreateReport} onClose={handleCloseForm} />
              )}
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
                  />
                ),
              )}
            </Box>
          )}
          {tabIndex === 2 && <div>Здесь будет контент для ресурсов</div>}
          {tabIndex === 3 && <div>Здесь будет контент для пользователей</div>}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminPage;