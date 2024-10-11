import React from "react";
import Ebusiness from "../assets/images/E-business.png";
import TopNotchBusinesses from "../components/TopBusinessesCard";
import TopBusinessCatCard from "../components/Cards/topBusinessCatCard";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StatItem = ({ number, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl font-bold mb-2">{number.toLocaleString()}</span>
    <span className="text-sm text-gray-600 text-center">{label}</span>
  </div>
);

const EDirectNumbers = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl  font-bold text-center mb-8">
        E-Direct in Numbers
      </h2>
      <div className="flex justify-between">
        <StatItem number={53074} label="Registered Businesses" />
        <StatItem
          number={1905}
          label={<span className="text-red-600">Blacklisted companies</span>}
        />
        <StatItem number={9122} label="Verified Businesses" />
      </div>
    </div>
  );
};

const HeroSection = () => (
  <div
    className="relative bg-cover bg-center min-h-screen"
    style={{ backgroundImage: 'url("/src/assets/images/businessImage.png")' }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
      <div className="md:mr-[24rem]">
        <h1 className="text-7xl font-bold mb-2">DIRECTORY</h1>
        <h2 className="text-5xl mb-2">FOR EVERYTHING</h2>
        <h2 className="text-6xl text-green-400 font-bold mb-6">NIGERIAN</h2>
      </div>
      <div className="w-full max-w-3xl">
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Search for a place, business, category or people"
            className="w-full px-4 py-2 rounded-t-lg  sm:rounded-t-none bg-white text-gray-900 placeholder:text-gray-500 mb-2 sm:mb-0"
          />
          <div className="flex">
            <select className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-900 border-t sm:border-t-0 sm:border-l">
              <option>Businesses</option>
              <option>Places</option>
              <option>Categories</option>
              <option>People</option>
            </select>
            <button className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ActionCard = ({ title, description, buttonText, imageSrc, Url }) => (
  <div
    style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="rounded-lg shadow-md overflow-hidden h-48"
  >
    <div className="p-4">
      <h3 className="text-xl text-white font-bold mb-2 underline">{title}</h3>
      <p className=" text-white mb-4 max-w-[20rem]">{description}</p>
      <Link target="blank" to={Url}>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Ebusinesses = () => (
  <div>
    <HeroSection />
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ActionCard
          title="Make a Request"
          description="Describe your request here. We're here to assist you with any inquiries or services you need."
          buttonText="Request"
          imageSrc="/src/assets/images/businessCard1.png"
          Url="https://edirect.essential.ng/request-form"
        />
        <ActionCard
          title="Report a Business Scam"
          description="Help keep our community safe. If you've encountered a suspicious business or potential scam, let us know here."
          buttonText="Report"
          imageSrc="/src/assets/images/businessCard1.png"
          Url="https://edirect.essential.ng/report-scam"
        />
      </div>
    </div>
    {/* E-business */}
    <section className="  py-[4rem]">
      <div className="w-full h-[23rem] mid:h-[35rem] bg-gradient-to-r from-[#341f1f] to-[#803d3d] shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold p-4 border-b text-white">
            E- Business
          </h1>
          <div className="flex flex-col md:flex-row items-center p-6">
            <div className="w-full md:w-1/2 pr-0 md:pr-6">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Register Now to get your Business Listed On Essential Direct
              </h2>
              <p className="text-white font-light mb-4">
                Lorem ipsum dolor sit amet consectetur. Vestibulum massa turpis
                varius et eros at.
              </p>
              <Link target="blank" to={"https://edirect.essential.ng/"}>
                <button className="bg-NavClr text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
                  Register Now
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src={Ebusiness}
                alt="E-Business"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* E-business */}
    {/* Tractions */}
    <EDirectNumbers />
    {/* Tractions */}
    {/* TopBusinessCard */}
    <div className="px-12">
      <TopNotchBusinesses />
    </div>
    <div className="px-12 pt-20">
      <TopBusinessCatCard />
    </div>
    {/* LastSection */}
    <div className="mt-24 mb-40">
      a
      <EssentialNigeriaBenefits />
    </div>
    {/* LastSection */}
  </div>
);
export default Ebusinesses;

export const EssentialNigeriaBenefits = () => {
  const HeaderBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#4e2a2a",
    color: "white",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    marginBottom: theme.spacing(5),
  }));

  const FeatureBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }));

  const FeatureButton = styled(Button)(({ theme, color }) => ({
    backgroundColor: color,
    color: "white",
    "&:hover": {
      backgroundColor: color,
      opacity: 0.9,
    },
    marginBottom: theme.spacing(2),
  }));
  return (
    <Box>
      <HeaderBox>
        <Typography variant="h5" component="h1" align="center">
          Why you should list your business on Essential Nigeria
        </Typography>
      </HeaderBox>

      <Typography margin="50px" variant="body2" paragraph align="center">
        Over 50 million people use Edirect to discover great businesses and
        services and also find or locate missed or lost contacts and loved ones.
        Join the fastest growing marketplace of over 2 million businesses who
        have taken advantage of this online platform to reach more customers and
        service consumers helping them enhance the reach of their business.
        EDIRECT CONNECTING THE WORLD OF SERVICE AND PERSONS.
      </Typography>

      <Grid container spacing={3}>
        {[
          {
            title: "Maximize Your Own Online Business",
            desc: " Improve social media presence, get reviews and grow your business reputation online",
            color: "#ff0000",
          },
          {
            title: "Create Your Own Website In Minutes",
            desc: " Improve social media presence, get reviews and grow your business reputation online",
            color: "#4e4e4e",
          },
          {
            title: "Stay in Touch With Ease",
            desc: " Improve social media presence, get reviews and grow your business reputation online",
            color: "#4e4e4e",
          },
        ].map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <FeatureBox
              elevation={3}
              style={{ height: "200px" }} // Adjust the height as needed
            >
              <FeatureButton
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "15px", fontWeight: "700" }} // Add padding using the sx prop
                style={{ backgroundColor: feature.color }}
              >
                {feature.title}
              </FeatureButton>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "500" }}
                variant="body2"
              >
                {feature.desc}
              </Typography>
            </FeatureBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
