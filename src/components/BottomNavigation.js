import React from 'react';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';
import { Work as WorkIcon, Bookmark as BookmarkIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <MuiBottomNavigation
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      showLabels
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <BottomNavigationAction label="Jobs" value="/" icon={<WorkIcon />} />
      <BottomNavigationAction label="Bookmarks" value="/bookmarks" icon={<BookmarkIcon />} />
    </MuiBottomNavigation>
  );
}