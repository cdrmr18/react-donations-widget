import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import starterData from "../data";

const MainCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(starterData);

  return (
    <Box
      bg="lightblue"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="main-card"
    >
      <Box p="3">
        <img src={data.logo} alt="pug" style={{ height: "300px" }} />
      </Box>
      <Box p="6" m="2" bg="white" borderRadius="lg">
        <h4 class="title">{data.title}</h4>
        <p>Thermometer</p>
      </Box>
    </Box>
  );
};

export default MainCard;
