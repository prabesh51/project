
//Ashim Adhakari = 104104333

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}
      >
        <Box
          sx={{
            my: 5,
            "& svg": {
              fontSize: "41px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "Turquoise",
              transform: "translateX(1px)",
              transition: "all 40ms",
            },
          }}
        >
          {/* Social media icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          className="copyright-text" // CSS class for copyright text
          fontFamily={"'Courier New', Courier, monospace"}
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; {/* Copyright text */}
        </Typography>
        <Typography
          variant="h5"
          className="GroupName" // CSS class for group name
          fontFamily={"'Courier New', Courier, monospace"}
          sx={{
            "@media (max-width:60px)": {
              fontSize: "1rem",
            },
          }}
        >
          "Group 2-12" CyberSecurity {/* Group name */}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
