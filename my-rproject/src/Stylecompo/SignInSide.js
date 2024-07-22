import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate()
  const handliclick = () => {
    navigate("/Signup")
  }
  console.log("check============>>>>>>>>")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,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)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
          

              <Button onClick={handliclick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}