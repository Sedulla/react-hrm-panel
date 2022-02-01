import { List } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ExpandableMenuItem } from './ExpandableMenuItem';
import { SingleMenuItem } from './SingleMenuItem';

export const Menu = ({ items }) => {
  const createList = (items) => {
    let menu = [];

    items.map((menuItem) => {
      if (Array.isArray(menuItem.items) && menuItem.items.length > 0) {
        menu.push(<ExpandableMenuItem config={menuItem} key={menuItem.id} />);
      } else {
        menu.push(<SingleMenuItem config={menuItem} key={menuItem.id} />);
      }
    });
    return menu.concat();
  };

  return <List component="nav">{createList(items)}</List>;
};
