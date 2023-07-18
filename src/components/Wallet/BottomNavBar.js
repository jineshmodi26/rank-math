import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function BottomNavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = {
    root : {
      height : "40px"
    },
    icons : {
        color : "#c7c7c7"
    }
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} sx={classes.root}>
      <BottomNavigationAction icon={<FolderIcon />} sx={classes.icons}/>
      <BottomNavigationAction icon={<ExploreIcon />} sx={classes.icons}/>
      <BottomNavigationAction icon={<NotificationsIcon />} sx={classes.icons}/>
      <BottomNavigationAction icon={<SettingsIcon />} sx={classes.icons}/>
    </BottomNavigation>
  );
}