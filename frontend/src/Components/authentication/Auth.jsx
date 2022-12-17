import React, { Fragment, useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FiEye, FiEyeOff, FiPlus, FiUser } from "react-icons/fi";
import {
  Chip,
  FormControl,
  FormLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { clearErrors, signin, signUp } from "../../Redux/Actions/UserActions";
import { useSelector } from "react-redux";
import { ProjectContext } from "../../App";
import Toast from "../Utils/Toast";
import Loading from "../Utils/Loading";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cakeemon.vercel.app">
        Cakeemon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [img, setImg] = useState("");

  const { dispatch, navigator, setOpenAlert, location } =
    useContext(ProjectContext);
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  console.log(location.state?.previousPath);

  const handleSignUp = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.set("img", img);
    data.set("first_name", first_name);
    data.set("last_name", last_name);
    data.set("gender", gender);
    data.set("email", email);
    data.set("mobile_number", mobile_number);
    data.set("password", password);

    if (password === confirmPassword) {
      dispatch(signUp(data));
      // navigate(-1);
    } else {
      setOpenAlert({
        open: true,
        message: "Password Does not Matched.",
        success: false,
      });
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    dispatch(signin(formData));
    navigate(-1);
  };

  useEffect(() => {
    // if (isAuthenticated === true) {
    //   navigate(-1);
    // }
    if (error) {
      setOpenAlert({ open: true, message: error.message, success: false });
      dispatch(clearErrors());
    }
  }, [dispatch, error, isAuthenticated]);

  const handleImg = (e) => {
    e.preventDefault();

    const img = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState == 2) {
        setPreviewImg(fileReader.result);
        setImg(img);
      }
    };
    fileReader.readAsDataURL(img);
  };

  return (
    <Fragment>
      <Navbar />
      {loading && <Loading />}
      <Toast />
      <Container component="main" maxWidth="xs" sx={{ mt: 6, mb: 6 }}>
        <Paper elevation={4} sx={{ padding: "20px" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <FiUser />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isSignUp ? "Sign up" : "Sign In"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={isSignUp ? handleSignUp : handleSignIn}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {isSignUp && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      sx={{ width: 70, height: 70 }}
                      src={previewImg}
                      alt="preview"
                    />
                    <input type="file" accept="image/*" onChange={handleImg} />
                  </Grid>
                )}

                {isSignUp && (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      size="medium"
                      value={first_name}
                      onChange={(e) => setFirst_name(e.target.value)}
                    />
                  </Grid>
                )}
                {isSignUp && (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      size="medium"
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                    />
                  </Grid>
                )}

                {isSignUp && (
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      component="fieldset"
                      name="genders"
                      variant="standard"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          value="male"
                          control={<Radio size="small" />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio size="small" />}
                          label="Female"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    size="medium"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                {isSignUp && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mobile_number"
                      label="Mobile Number"
                      name="mobile_number"
                      autoComplete="phone"
                      type="number"
                      size="medium"
                      value={mobile_number}
                      onChange={(e) => setMobile_number(e.target.value)}
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    size="medium"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>

                {isSignUp && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirm_password"
                      label="Confirm Password"
                      type={showPassword ? "text" : "password"}
                      id="confirm_password"
                      autoComplete="new-password"
                      size="medium"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>
                )}
                <Container sx={{ textAlign: "right" }}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </Container>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setIsSignUp(!isSignUp)}
                  >
                    {isSignUp === false
                      ? "Don't have an account ? Sign Up"
                      : "Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Paper>
      </Container>
      <Footer />
    </Fragment>
  );
}
