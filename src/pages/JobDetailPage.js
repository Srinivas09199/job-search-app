import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';
import { fetchJobDetails } from '../services/api';

function JobDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobDetails = async () => {
      try {
        const jobDetails = await fetchJobDetails(id);
        setJob(jobDetails);
      } catch (error) {
        setError('Error fetching job details. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    loadJobDetails();
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!job) {
    return <Typography>No job details available.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {job.title}
      </Typography>
      <Typography variant="body1" paragraph>
        Location: {job.location}
      </Typography>
      <Typography variant="body1" paragraph>
        Salary: {job.salary}
      </Typography>
      <Typography variant="body1" paragraph>
        Phone: {job.phone}
      </Typography>
      <Typography variant="body1" paragraph>
        Description: {job.description}
      </Typography>
    </Container>
  );
}

export default JobDetailPage;