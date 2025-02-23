import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

// Import images
import exploreImage1 from "/src/assets/images/exploreImage.png";
import exploreImage2 from "/src/assets/images/exploreImage2.png";
import exploreImage3 from "/src/assets/images/exploreImage3.png";
import exploreImage4 from "/src/assets/images/exploreImage4.png";

const VirginCard = ({
  image,
  title,
  description,
  ctaText,
  link,
  isNewsletter,
}) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setOpen(false);
    setSnackbarOpen(true);
    setEmail("");
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-white lg:max-w-[38rem] mx-auto">
      <img className="w-full h-50 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        {isNewsletter ? (
          <button
            onClick={handleClickOpen}
            className="inline-flex items-center text-red-600 hover:text-red-800">
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="inline-flex items-center text-red-600 hover:text-red-800">
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe to our Newsletter</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              <span className="text-red-500 hover:text-NavClr">Cancel</span>
            </Button>
            <Button type="submit">
              <span className="text-red-500 hover:text-NavClr">Subscribe</span>
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}>
          Successfully signed up for the newsletter!
        </Alert>
      </Snackbar>
    </div>
  );
};

const ExploreCards = () => {
  const cards = [
    {
      image: exploreImage4,
      title: "Essential newsletter",
      description:
        "Sign up to the Virgin.com newsletter for the latest from Virgin companies and Richard the Virgin Blog.",
      ctaText: "Sign up now",
      link: "",
      isNewsletter: true,
    },
    {
      image: exploreImage3,
      title: "Looking to start your own business?",
      description:
        "In 2013, Virgin StartUp was founded to support the next generation of founders who are looking to do the same.",
      ctaText: "Learn more",
      link: "/post/looking-to-start-your-own-business",
    },
    {
      image: exploreImage2,
      title: "Our foundation.",
      description:
        "Virgin Unite is the independent entrepreneurial foundation of the Virgin Group and the Branson family.",
      ctaText: "Explore Unite",
      link: "/post/our-foundation",
    },
    {
      image: exploreImage1,
      title: "Our timeline.",
      description:
        "Our story begins in 1967 when Richard launched Student magazine, aged 15.",
      ctaText: "Explore timeline",
      link: "/post/our-timeline",
    },
  ];

  return (
    <div className="container mx-auto lg:px-[5.4rem] py-8 px-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <VirginCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCards;
