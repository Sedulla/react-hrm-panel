import { ListItem } from '@mui/material';
import { MenuItemContent } from './MenuItemContent';
import { NavLink } from 'react-router-dom';

export const SingleMenuItem = ({ config }) => {
  return (
    <ListItem button component={NavLink} to={config.path}>
      <MenuItemContent config={config} />
    </ListItem>
  );
};
