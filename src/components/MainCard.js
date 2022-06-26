import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const MainCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      bg="lightblue"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="main-card"
    >
      <Box p="6">
        <div class="logo">logo</div>
      </Box>
      <Box p="6" m="2" bg="white" borderRadius="lg">
        <h4 class="title">data name</h4>
        <p>Thermometer</p>
      </Box>
    </Box>
  );
};

export default MainCard;
