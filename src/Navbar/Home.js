import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';



const Home = (props) => {

  const handlebtn=()=>{
    props.setLoginUser({})
  }
  // console.log(setLoginUser.firstName)
  return (


    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{

          marginTop: 15,
          marginBottom: 45,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: "10px",
          height: "150px",
          boxShadow: "0px 0px 10px grey"
        }}
      >

        <Typography component="h1" variant="h5">
          Welcome {props.user.firstName} {props.user.lastName}
        </Typography>
        <Button
        onClick={handlebtn}
        
          fullWidth
          variant="contained"
          sx={{ mt: 6, mb: 2 }}
        >
          Logout
        </Button>

      </Box>


    </Container>

  );
}
export default Home
