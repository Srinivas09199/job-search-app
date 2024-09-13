import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './JobCard';
import { CircularProgress, Typography } from '@mui/material';

function JobList({ jobs, hasMore, loadMore, onBookmark, isBookmarked = false }) {
  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<CircularProgress />}
      endMessage={
        <Typography align="center">
          {jobs.length > 0 ? "You've seen all available jobs" : "No jobs available"}
        </Typography>
      }
    >
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job} 
          onBookmark={onBookmark} 
          isBookmarked={isBookmarked} 
        />
      ))}
    </InfiniteScroll>
  );
}

export default JobList;