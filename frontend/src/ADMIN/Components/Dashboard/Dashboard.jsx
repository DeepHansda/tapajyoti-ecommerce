import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import { mainListItems, secondaryListItems } from "./listItems";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiAward,
  FiBell,
  FiCircle,
  FiHome,
  FiMail,
  FiMenu,
  FiPhone,
} from "react-icons/fi";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, Chip, Paper } from "@mui/material";
import { useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const nav = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navigate = (query) => {
    nav(query);
  };

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    navigate("/admin/main");
  },[])
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <FiMenu />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <Button
            color="inherit"
            startIcon={<FiHome />}
            onClick={() => navigate("/")}
          >
            Go Back to Website
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: [1],
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              {user.full_name}
            </Typography>
          </Box>

          <IconButton onClick={toggleDrawer}>
            <FiArrowLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{mainListItems}</List>
        <Divider sx={{ my: 1 }} />

        <Paper variant="outlined" sx={{ textAlign: "center", p: 1 }}>
          <Avatar
            sx={{ width: "40px", height: "40px", margin: "10px auto" }}
            src={user.avatar.img}
          />
          <Box>
            <Typography variant="h6" component="p">{user.full_name}</Typography>
          </Box>
          <Box
            sx={{
              p: 1,
            }}
          >
            <Chip
              variant="filled"
              label={user.gender}
              size="small"
              sx={{ textTransform: "capitalize" }}
              icon={<FiCircle />}
            />{" "}
            <Chip
              variant="filled"
              label={user.role}
              size="small"
              sx={{ textTransform: "capitalize" }}
              icon={<FiAward />}
            />
          </Box>
          <Box>
            <Chip
              variant="outlined"
              icon={<FiMail />}
              label={user.email}
              size="small"
            />
          </Box>

          <Box sx={{mt:1}}>
            <Chip
              variant="outlined"
              icon={<FiPhone />}
              label={user.mobile_number}
              size="small"
            />
          </Box>
          <Button startIcon={<FiAlertCircle/>} variant="contained" color="error" fullWidth size="small" sx={{mt:2}}>Log Out</Button>
        </Paper>
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />

        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
