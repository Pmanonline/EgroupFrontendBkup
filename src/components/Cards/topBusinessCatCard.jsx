// import React from "react";

// function TopBusinessCatCard() {
//   return <div>TopBusinessCatCard</div>;
// }

// export default TopBusinessCatCard;
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import BrushIcon from "@mui/icons-material/Brush";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import HouseIcon from "@mui/icons-material/House";
import ComputerIcon from "@mui/icons-material/Computer";
import GavelIcon from "@mui/icons-material/Gavel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MovieIcon from "@mui/icons-material/Movie";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CasinoIcon from "@mui/icons-material/Casino";
import PetsIcon from "@mui/icons-material/Pets";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SpaIcon from "@mui/icons-material/Spa";
import HotelIcon from "@mui/icons-material/Hotel";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PlaceIcon from "@mui/icons-material/Place";
import TvIcon from "@mui/icons-material/Tv";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const categories = [
  { icon: <AccountBalanceIcon />, title: "Accounting & Finance" },
  { icon: <TheaterComedyIcon />, title: "Arts & Entertainment" },
  { icon: <BrushIcon />, title: "Beauty & Fashion" },
  { icon: <CampaignIcon />, title: "Communication" },
  { icon: <HomeWorkIcon />, title: "Construction & Housing" },
  { icon: <DirectionsCarIcon />, title: "Auto Services" },
  { icon: <LocalHospitalIcon />, title: "Health" },
  { icon: <ApartmentIcon />, title: "Government" },
  { icon: <SchoolIcon />, title: "Education" },
  { icon: <HouseIcon />, title: "Home & Garden" },
  { icon: <ComputerIcon />, title: "IT & Computers" },
  { icon: <GavelIcon />, title: "Legal Services" },
  { icon: <RestaurantIcon />, title: "Restaurants" },
  { icon: <BusinessIcon />, title: "Business Service" },
  { icon: <EngineeringIcon />, title: "Engineering" },
  { icon: <MovieIcon />, title: "Media" },
  { icon: <ConstructionIcon />, title: "Manufacturing" },
  { icon: <SchoolOutlinedIcon />, title: "Education & Training" },
  { icon: <CasinoIcon />, title: "Games" },
  { icon: <PetsIcon />, title: "Pet Supply" },
  { icon: <SportsBaseballIcon />, title: "Sports" },
  { icon: <SlideshowIcon />, title: "Online Influencer" },
  { icon: <SpaIcon />, title: "Personal Care" },
  { icon: <HotelIcon />, title: "Travel & Hospitality" },
  { icon: <CheckroomIcon />, title: "Apparel & Clothing" },
  { icon: <LocalMallIcon />, title: "Retail & Restaurant" },
  { icon: <PlaceIcon />, title: "Community" },
  { icon: <TvIcon />, title: "Private Rental" },
  { icon: <ShoppingCartIcon />, title: "Shopping" },
  { icon: <LocalShippingIcon />, title: "Transportation" },
  { icon: <CleaningServicesIcon />, title: "Non-Profit Organization" },
];

const TopBusinessCatCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        marginBottom="10px"
      >
        <Typography variant="h4" gutterBottom>
          <h2 className="text-3xl font-bold mb-4">Top Business Category</h2>
        </Typography>
      </Grid>

      {categories.map((category, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            {React.cloneElement(category.icon, {
              color: "error",
              fontSize: "large",
            })}
            <Typography variant="body2" sx={{ mt: 1 }}>
              {category.title}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopBusinessCatCard;
