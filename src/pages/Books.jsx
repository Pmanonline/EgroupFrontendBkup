import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components (unchanged)
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "none", // Remove shadow
  border: "none", // Remove border if present
  "& .MuiCardMedia-root": {},
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  textTransform: "none",
  color: "#d2471c",
  fontWeight: "bold",
});

// JSON Data (unchanged)
const jsonData = {
  tabs: ["All authors", "Segun", "Mercy", "Sam", "Essential"],
  books: [
    {
      id: 1,
      title: "Like A Virgin",
      author: "By Richard Branson, March 2012",
      description:
        "Richard Branson offers advice and experiences about succeeding in business and building a strong personal brand.",
      coverUrl: "/src/assets/images/book12.png",
      url: "/books/3",
      category: "Essential",
    },
    {
      id: 2,
      title: "Screw Business As Usual",
      author: "By Richard Branson, November 2011",
      description:
        "Richard believes that in order to thrive, businesses must operate with positive purpose and generate good impact.",
      coverUrl: "/src/assets/images/books11.png",
      url: "/books/3",
      category: "Segun",
    },
    {
      id: 3,
      title: "Like A Virgin",
      author: "By Richard Branson, March 2012",
      description:
        "Richard Branson offers advice and experiences about succeeding in business and building a strong personal brand.",
      coverUrl: "/src/assets/images/book12.png",
      url: "/books/3",
      category: "Essential",
    },
    {
      id: 4,
      title: "Screw Business As Usual",
      author: "By Richard Branson, November 2011",
      description:
        "Richard believes that in order to thrive, businesses must operate with positive purpose and generate good impact.",
      coverUrl: "/src/assets/images/books11.png",
      url: "/books/3",
      category: "Mercy",
    },
    {
      id: 5,
      title: "Reach For The Skies",
      author: "By Richard Branson, March 2011",
      description:
        "A look into the history of flight through the eyes of someone who has long been fascinated by aviation.",
      coverUrl: "/src/assets/images/books10.png",
      url: "/books/3",
      category: "Mercy",
    },
    {
      id: 6,
      title: "Losing My Virginity",
      author: "By Richard Branson, August 2005",
      description:
        "Branson’s autobiography, a page-turning memoir that spans the highs and lows of building a business empire.",
      coverUrl: "/src/assets/images/books4.png",
      url: "/books/3",
      category: "Sam",
    },
    {
      id: 7,
      title: "Business Stripped Bare",
      author: "By Richard Branson, 2008",
      description:
        "A dynamic, insightful, and original guide to success in business as told by one of the world’s best-known entrepreneurs.",
      coverUrl: "/src/assets/images/books5.png",
      url: "/books/3",
      category: "Sam",
    },
    {
      id: 8,
      title: "Arctic Diary",
      author: "By Richard Branson, October 2007",
      description:
        "Documenting his travel to the Arctic wilderness with his son and a team of adventurers.",
      coverUrl: "/src/assets/images/books2.png",
      url: "/books/3",
      category: "Sam",
    },
    {
      id: 9,
      title: "Screw it, Let's Do It",
      author: "By Richard Branson, 2006",
      description:
        "A captivating book of the author’s life lessons, focusing on positive thinking and action.",
      coverUrl: "/src/assets/images/books1.png",
      url: "/books/3",
      category: "Essential",
    },
    {
      id: 10,
      title: "Like A Virgin",
      author: "By Richard Branson, March 2012",
      description:
        "Richard Branson offers advice and experiences about succeeding in business and building a strong personal brand.",
      coverUrl: "/src/assets/images/book12.png",
      url: "/books/3",
      category: "Segun",
    },
    {
      id: 11,
      title: "Screw Business As Usual",
      author: "By Richard Branson, November 2011",
      description:
        "Richard believes that in order to thrive, businesses must operate with positive purpose and generate good impact.",
      coverUrl: "/src/assets/images/books11.png",
      url: "/books/3",
      category: "Mercy",
    },
    {
      id: 12,
      title: "Reach For The Skies",
      author: "By Richard Branson, March 2011",
      description:
        "A look into the history of flight through the eyes of someone who has long been fascinated by aviation.",
      coverUrl: "/src/assets/images/books10.png",
      url: "/books/3",
      category: "Essential",
    },
  ],
};

const Books = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredBooks =
    tabValue === 0
      ? jsonData.books
      : jsonData.books.filter(
          (book) =>
            book.category.trim().toLowerCase() ===
            jsonData.tabs[tabValue].trim().toLowerCase()
        );

  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "59px",
              marginBottom: 9,
              marginTop: 9,
            }}
          >
            Books<span className="rounded-full text-red-500">.</span>
          </Typography>
        </Box>

        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#d40000",
              },
              "& .MuiTab-root": {
                color: "#000000",
                fontWeight: "bold",
                "&.Mui-selected": {
                  color: "#d40000",
                },
              },
            }}
          >
            {jsonData.tabs.map((tab, index) => (
              <Tab key={index} label={tab} />
            ))}
          </Tabs>
        </AppBar>
        <Grid container spacing={5} sx={{ padding: 3 }}>
          {filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={book.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  image={book.coverUrl}
                  alt={book.title}
                />
                <StyledCardContent>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {book.title}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {book.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {book.description}
                  </Typography>
                </StyledCardContent>
                <Link to={book.url} style={{ textDecoration: "none" }}>
                  <StyledButton
                    sx={{
                      fontWeight: "bold",
                      marginLeft: 1.2,
                      marginBottom: 1.2,
                    }}
                    size="small"
                  >
                    Find out more and buy
                  </StyledButton>
                </Link>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="mt-[5rem]">
        <WhosWho />
      </div>
    </>
  );
};

export default Books;

const WhosWho = () => {
  const StyledCard2 = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "none",
    "& .MuiCardMedia-root": {
      width: 150,
      height: 150,
      borderRadius: "50%",
      margin: theme.spacing(2),
    },
  }));

  const StyledButton2 = styled(Button)({
    textTransform: "none",
    color: "#d2471c",
    fontWeight: "bold",
  });

  const peopleData = [
    {
      id: 1,
      name: "Segun Oshin",
      image: "/src/assets/images/moreImage1.png",
      description:
        "Richard Branson is founder of the Virgin Group, one of the world's most recognizable brands. He's always looking for entrepreneurial ways to drive positive change in the world.",
      storyLink: "/richard-story",
    },
    {
      id: 2,
      name: "Mercy",
      image: "/src/assets/images/moreImage2.png",
      description:
        "Holly is Richard and Joan Branson's daughter and Virgin's Chief Purpose and Vision Officer. Holly is also a co-founder of Big Change, and Virgin Unite. A best-selling author and mother of three.",
      storyLink: "/holly-story",
    },
    {
      id: 3,
      name: "Sam Branson",
      image: "/src/assets/images/moreImage3.png",
      description:
        "Sam is Richard and Joan Branson's son, Founder of Sundog Pictures, co-founder of Big Change,  His passion for adventure and the environment has seen him take on many challenges.",
      storyLink: "/sam-story",
    },
    {
      id: 4,
      name: "Eve Branson",
      image: "/src/assets/images/moreImage4.png",
      description:
        "Eve was Richard's mum and a born adventurer. In 2008, at 84 years old, Eve became the oldest person in history to have a spaceship named after her.",
      storyLink: "/eve-story",
    },
  ];
  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}
      >
        Who's Who.
      </Typography>
      <Grid container spacing={4}>
        {peopleData.map((person) => (
          <Grid item xs={12} sm={6} md={3} key={person.id}>
            <StyledCard>
              <CardMedia
                component="img"
                image={person.image}
                alt={person.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "280px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {person.description}
                </Typography>
                <StyledButton size="small" href={person.storyLink}>
                  {`${person.name.split(" ")[0]}'s Story >`}
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
