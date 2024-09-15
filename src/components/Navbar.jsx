import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from "../assets/final logo updated svg.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      className="!bg-[#bfbebb80] shadow-md backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(191, 190, 187, 0.5)",
        transition: "background-color 0.5s ease",
      }}
    >
      <Toolbar className="flex justify-between !px-4 md:!px-8 lg:!px-12">
        <div className="w-28">
          <img src={logo} alt="logo" />
        </div>

        {/* Drawer Button for Small Screens */}
        <div className="md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label={isDrawerOpen ? "close" : "menu"}
            onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
          >
            <MenuIcon className="text-black" />
          </IconButton>
        </div>

        {/* Menu Items for Large Screens */}
        <div className="hidden md:flex space-x-6 uppercase">
          <a href="#" className="text-black font-medium">
            Home
          </a>
          <a href="#about" className="text-black font-medium">
            About
          </a>
          <a href="#contact" className="text-black font-medium">
            Contact
          </a>
        </div>
      </Toolbar>

      {/* Drawer Component */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        transitionDuration={400}
        PaperProps={{ className: "w-full !bg-[#bfbebb] duration-1000" }} // Makes drawer span full width
      >
        <Box className="flex flex-col items-center justify-evenly p-4 relative h-full">
          <div className="absolute top-3 right-8 cursor-pointer">
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon className="text-black font-medium " />
            </IconButton>
          </div>
          <Button
            onClick={handleDrawerClose}
            className="!text-black !text-xl h-20 w-full"
            href="#"
          >
            Home
          </Button>
          <Button
            onClick={handleDrawerClose}
            className="!text-black !text-xl h-20 w-full"
            href="#about"
          >
            About
          </Button>
          <Button
            onClick={handleDrawerClose}
            className="!text-black !text-xl h-20 w-full"
            href="#contact"
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
