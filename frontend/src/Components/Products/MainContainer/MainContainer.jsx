import {
  Divider,
  Drawer,
  Paper,
  Toolbar,
  Typography,
  Slider,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemButton,
  Radio,
  FormControlLabel,
  List,
  RadioGroup,
  Pagination,
  Button,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import { FiArrowDown, FiChevronDown, FiSettings } from "react-icons/fi";
import { ProjectContext } from "../../../App";
import Footer from "../../Footer/Footer";
import ProductsContainer from "../ProductsContainer";
// import Slider from 'react-slick'
import "./mainContainer.css";
export default function MainContainer() {
  const [value, setValue] = React.useState([0, 1000]);
  const [brand, setBrand] = React.useState("All");
  const [rating, setRating] = React.useState("All");
  const [page, setPage] = React.useState(1);
  const { offset, width } = useContext(ProjectContext);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const brands = [
    {
      value: "all",
    },
    {
      value: "nokia",
    },
    {
      value: "samsung",
    },
    {
      value: "moto",
    },
    {
      value: "asus",
    },
    {
      value: "xiomi",
    },
    {
      value: "realme",
    },
    {
      value: "poco",
    },
  ];
  const marks = [
    {
      value: 0,
      label: "₹0",
    },
    {
      value: 200,
      label: "₹200",
    },
    {
      value: 400,
      label: "₹400",
    },
    {
      value: 600,
      label: "₹600",
    },
    {
      value: 800,
      label: "₹800",
    },
    {
      value: 1000,
      label: "₹1000",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBrandChange = (event, newValue) => {
    setBrand(newValue);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const breakPo = () => {
    return width <= 600;
  };
  console.log(value);
  console.log(brand);
  console.log(rating);

  const drawerWidth = breakPo() ? "100%" : "300px";

  return (
    <React.Fragment>
    <div className="products-mainContainer">
      <div className="products-mainContainer-filter">
        {/* Drawer sections */}
        <Paper elevation={3}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                position: `${breakPo() ? "fixed" : "relative"}`,
              },
            }}
            variant={`${breakPo() ? "temporary" : "permanent"}`}
            anchor={breakPo() ? "top" : "left"}
            open={breakPo() && openDrawer}
          >
            {/* <Toolbar /> */}
            <Container sx={{ padding: "20px" }}>
              <Typography variant="h4">Filters</Typography>
            </Container>
            <Divider />

            {/* price section */}
            <Container sx={{ marginTop: "20px" }}>
              <Typography variant="h6">Price</Typography>
              <Slider
                aria-label="Custom marks"
                // defaultValue={value}
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
                step={200}
                valueLabelDisplay="auto"
                marks={marks}
                size="small"
                min={0}
                max={1000}
              />
            </Container>

            {/* Brands sections */}

            <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<FiChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Brands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={brand}
                    onChange={handleBrandChange}
                  >
                    <List
                      sx={{
                        width: "100%",
                        // maxWidth: 360,
                        bgcolor: "background.paper",
                        position: "relative",
                        overflow: "auto",
                        maxHeight: 300,
                        // '& ul': { padding: 0 },
                      }}
                      dense
                    >
                      {brands.map((data, index) => {
                        return (
                          <ListItemButton key={index}>
                            <FormControlLabel
                              value={data.value}
                              control={<Radio size="small" />}
                              label={data.value}
                              sx={{ textTransform: "capitalize" }}
                            />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<FiChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Customer Ratings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={rating}
                    onChange={handleRatingChange}
                  >
                    <List
                      sx={{
                        width: "100%",
                        // maxWidth: 360,
                        bgcolor: "background.paper",
                        position: "relative",
                        // overflow: "auto",
                        maxHeight: 300,
                        // '& ul': { padding: 0 },
                      }}
                      dense="true"
                    >
                      <ListItemButton>
                        <FormControlLabel
                          value={4}
                          control={<Radio size="small" />}
                          label="4★ & above"
                          sx={{ textTransform: "capitalize" }}
                        />
                      </ListItemButton>

                      <ListItemButton>
                        <FormControlLabel
                          value={3}
                          control={<Radio size="small" />}
                          label="3★ & above"
                          sx={{ textTransform: "capitalize" }}
                        />
                      </ListItemButton>
                    </List>
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Divider />

            <Container
              sx={{
                margin: "10px 0",
                textAlign: "right",
                "& button": {
                  margin: `${breakPo() ? "5px" : "0"}`,
                },
              }}
            >
              {breakPo() && (
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => setOpenDrawer(false)}
                >
                  Cancel
                </Button>
              )}

              <Button variant="contained" size="small">
                Apply
              </Button>
            </Container>
          </Drawer>
        </Paper>
      </div>

      <div className="mainContainer-product-container">
        <div className="chip-container">
          {breakPo() && <Chip
            label="Filter"
            icon={<FiSettings />}
            variant="outlined"
            onClick={() => setOpenDrawer(true)}
          />}
        </div>
        <ProductsContainer />

        <div className="product-container-pagination">
          <Pagination
            count={10}
            page={page}
            onChange={handlePageChange}
            sx={{ margin: "0 auto" }}
          />
        </div>
      </div>

    </div>
      <Footer/>
      </React.Fragment>
  );
}
