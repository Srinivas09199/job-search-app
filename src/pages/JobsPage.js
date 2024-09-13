import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import JobList from '../components/JobList';
import { fetchJobs } from '../services/api';

function JobsPage({ onBookmark }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadJobs = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const newJobs = await fetchJobs(page);
      console.log('New jobs:', newJobs); // Log the new jobs to check the response
      setJobs((prevJobs) => [...prevJobs, ...newJobs]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newJobs.length > 0);
    } catch (error) {
      setError('Error fetching jobs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Jobs
      </Typography>
      <JobList 
        jobs={jobs} 
        hasMore={hasMore} 
        loadMore={loadJobs} 
        onBookmark={onBookmark} 
      />
    </Container>
  );
}

export default JobsPage;
