import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import JobsPage from './pages/JobsPage';
import BookmarksPage from './pages/BookmarksPage';
import JobDetailPage from './pages/JobDetailPage';
import BottomNavigation from './components/BottomNavigation';
import { getBookmarkedJobs, saveBookmarkedJobs } from './services/storage';

const theme = createTheme();

function App() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const loadBookmarkedJobs = async () => {
      const jobs = await getBookmarkedJobs();
      setBookmarkedJobs(jobs);
    };
    loadBookmarkedJobs();
  }, []);

  const handleBookmark = (job) => {
    const updatedBookmarks = [...bookmarkedJobs, job];
    setBookmarkedJobs(updatedBookmarks);
    saveBookmarkedJobs(updatedBookmarks);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ paddingBottom: '56px' }}>
          <Routes>
            <Route path="/" element={<JobsPage onBookmark={handleBookmark} />} />
            <Route path="/bookmarks" element={<BookmarksPage bookmarkedJobs={bookmarkedJobs} />} />
            <Route path="/job/:id" element={<JobDetailPage />} />
          </Routes>
        </div>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;