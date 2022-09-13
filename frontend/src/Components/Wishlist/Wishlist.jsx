import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { FiAirplay, FiCloudOff, FiDelete, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../Redux/Actions/WishListActions";
import "./Wishlist.css";
function Wishlist() {
  const { wishItems } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  console.log(wishItems);
  return (
    <div className="wishlist">
      <Paper elevation={3}>
        <Box sx={{ margin: "5px 0", padding: "10px" }}>
          <Typography variant="h2">My Wishlist</Typography>
        </Box>
        <Divider variant="middle" />
        <Container sx={{ padding: "10px" }}>
          {wishItems.map((item) => {
            return (
              <Container sx={{ marginTop: "10px" }} key={item.product}>
                <Card sx={{ display: "flex" }} variant="outlined">
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={item.img}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {item.price}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                      >
                        Stock-{item.stock}
                      </Typography>

                      <Box>
                        <Tooltip title="Delete">
                          <IconButton>
                            <FiTrash
                              onClick={() =>
                                dispatch(removeFromWishList(item.product))
                              }
                            />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Container>
            );
          })}
        </Container>
      </Paper>
    </div>
  );
}

export default Wishlist;
