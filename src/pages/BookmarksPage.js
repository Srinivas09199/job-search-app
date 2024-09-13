import React from 'react';
import { Container, Typography } from '@mui/material';
import JobList from '../components/JobList';

function BookmarksPage({ bookmarkedJobs }) {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Bookmarked Jobs
      </Typography>
      <JobList 
        jobs={bookmarkedJobs} 
        hasMore={false} 
        isBookmarked={true} 
      />
    </Container>
  );
}

export default BookmarksPage;