import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports, fetchAddReport } from '../../redux/slices/reports';
import { fetchResources } from '../../redux/slices/resources.js';
import { ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Report from '../../components/Reports/Reports';
import Resources from '../../components/Resources/Resources.jsx';

import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportIcon from '@mui/icons-material/Report';
import ResourcesIcon from '@mui/icons-material/Build';
import UsersIcon from '@mui/icons-material/Group';
import { selectIsAuth } from '../../redux/slices/auth.js';
import { Navigate } from 'react-router-dom';

import theme from './theme.js';
import CreateReportForm from './CreateReportForm.jsx';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { reports } = useSelector((state) => state.reports);
  const { resources } = useSelector((state) => state.resources);
  const isAuth = useSelector(selectIsAuth);

  const isReportsLoading = reports.status === 'loading';
  const isResourcesLoading = resources.status === 'loading';

  const [tabIndex, setTabIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchReports());
    dispatch(fetchResources());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleCreateReport = (newReport) => {
    dispatch(fetchAddReport(newReport)).then(() => {
      setIsFormOpen(false);
    });
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  if (!isAuth) {
    return <Navigate to="/" />;
  }

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
          <Tab icon={<ReportIcon />} label="Отчеты" />
          <Tab icon={<ResourcesIcon />} label="Ресурсы" />
          <Tab icon={<UsersIcon />} label="Пользователи" />
        </Tabs>
        <Box style={{ flex: 1, padding: 20 }}>
          {tabIndex === 0 && (
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
          {tabIndex === 1 && (
            <Box>
              {(isResourcesLoading ? [...Array(5)] : resources.items).map((resource, index) =>
                isResourcesLoading ? (
                  <Resources key={index} isLoading={true} />
                ) : (
                  <Resources
                    key={resource._id}
                    _id={resource._id}
                    name={resource.name}
                    type={resource.type}
                    status={resource.status}
                  />
                ),
              )}
            </Box>
          )}
          {tabIndex === 2 && <div>Здесь будет контент для пользователей</div>}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminPage;
