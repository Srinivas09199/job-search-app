import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function JobCard({ job, onBookmark, isBookmarked }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {job.location}
        </Typography>
        <Typography variant="body2">Salary: {job.salary}</Typography>
        <Typography variant="body2">Phone: {job.phone}</Typography>
        <Button onClick={handleViewDetails}>View Details</Button>
        {!isBookmarked && <Button onClick={() => onBookmark(job)}>Bookmark</Button>}
      </CardContent>
    </Card>
  );
}

export default JobCard;