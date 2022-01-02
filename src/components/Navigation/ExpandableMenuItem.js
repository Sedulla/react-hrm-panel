import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItem } from '@mui/material';
import { Menu } from './Menu';
import { MenuItemContent } from './MenuItemContent';

export const ExpandableMenuItem = ({ config }) => {
  const [navListOpen, setNavListOpen] = useState(false);

  const handleToggleNavList = () => {
    setNavListOpen((prev) => !prev);
  };

  return (
    <div component="nav">
      <ListItem button onClick={handleToggleNavList}>
        <MenuItemContent config={config} />
        {navListOpen ? (
          <ExpandLess sx={{ color: '#fff' }} />
        ) : (
          <ExpandMore sx={{ color: '#fff' }} />
        )}
      </ListItem>

      <Collapse in={navListOpen} timeout="auto" unmountOnExit>
        <Menu items={config.items} />
      </Collapse>
    </div>
  );
};
