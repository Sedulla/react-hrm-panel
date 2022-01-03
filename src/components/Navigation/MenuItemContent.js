import { ListItemIcon, ListItemText } from "@mui/material";

export const MenuItemContent = ({ config }) => {
  return (
    <>
      <ListItemIcon>{config.icon}</ListItemIcon>
      <ListItemText primary={config.title}/>
    </>
  );
};
