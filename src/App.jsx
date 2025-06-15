import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './components/Home';
import JobSearchList from './components/sarkari-job/JobSearchList';
import JobDetails from './components/sarkari-job/JobDetails';
import SarkariJobCreate from './components/sarkari-job-create/sarkari-job-create';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sarkari-job-search" element={<JobSearchList />} />
          <Route path="/sarkari-job-details/:id" element={<JobDetails />} />
          <Route path="/sarkari-job/create" element={<SarkariJobCreate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
