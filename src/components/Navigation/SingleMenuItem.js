import { ListItem } from '@mui/material';
import { MenuItemContent } from './MenuItemContent';

export const SingleMenuItem = ({ config }) => {
  return (
    <ListItem button>
      <MenuItemContent config={config} />
    </ListItem>
  );
};
