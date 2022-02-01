import { ListItemIcon, ListItemText } from '@mui/material';

export const MenuItemContent = ({ config }) => {
  return (
    <>
      {/* <NavLink to={config.path}> */}
      <ListItemIcon>{config.icon}</ListItemIcon>
      <ListItemText primary={config.title} />
      {/* </NavLink> */}
    </>
  );
};
