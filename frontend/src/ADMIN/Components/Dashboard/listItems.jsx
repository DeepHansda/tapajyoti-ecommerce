import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import {
  FiAirplay,
  FiBarChart,
  FiBarChart2,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const listData = [
  {
    icon: FiDatabase,
    text: "Dashboard",
    link: "/admin/main",
  },

  {
    icon: FiShoppingCart,
    text: "Orders",
    link: "/admin/orders",
  },
  {
    icon: FiUser,
    text: "Customers",
    link: "/admin/customers",
  },
  {
    icon: FiLayers,
    text: "Products",
    link: "/admin/products",
  },
  {
    icon: FiBarChart2,
    text: "Utils",
    link: "/admin/extras",
  },
];

let activeStyle = {
  color: "#1976d2",
};
export const mainListItems = (
  <React.Fragment>
    {listData.map((item, index) => {
      return (
        <NavLink
          to={item.link}
          key={index}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#1976d2",
                }
              : { color: "#000" }
          }
        >
          <ListItemButton sx={{ textDecoration: "none",}}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </NavLink>
      );
    })}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FiAirplay />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FiGitBranch />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FiGitBranch />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
