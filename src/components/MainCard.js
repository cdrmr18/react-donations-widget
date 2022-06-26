import React, { useEffect, useState } from "react";
import { Box, useChakra } from "@chakra-ui/react";
import starterData from "../data";
import ProgressBar from "./ProgressBar";
import "./MainCard.scss";

const MainCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(starterData);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  // useEffect(() => {
  //   //api call with fetch
  //   fetch("http://localhost:3000/v1/api/organizations")
  //     .then((res) => res.json)
  //     .then((result) => {
  //       setIsLoaded(true);
  //       setData(result.data);
  //     })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
  // }, []);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="main-card"
    >
      <Box
        className="logo-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,-0.6),rgba(0,0,0,0.4)),  url(${data.logo})`,
        }}
      ></Box>
      <Box p="6" m="2" bg="white" borderRadius="lg">
        <h2 className="title">{data.title}</h2>
        <ProgressBar goal={data.goal} raised={data.raised} />
      </Box>
    </Box>
  );
};

export default MainCard;
