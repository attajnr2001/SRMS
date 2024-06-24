import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "3rem", marginBottom: 2 }}>
            Welcome to Our SHS Results Web App
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.5rem",
              marginBottom: 4,
              lineHeight: 1.6,
            }}
          >
            Track and manage academic results with ease.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome;
