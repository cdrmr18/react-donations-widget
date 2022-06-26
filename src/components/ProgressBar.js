import React, { useState } from "react";
import { Progress, Badge } from "@chakra-ui/react";
import "./ProgressBar.scss";

const ProgressBar = ({ goal, raised }) => {
  const [currentRaised, setCurrentRaised] = useState(raised);
  const [goalPercentage, setGoalPercentage] = useState(
    (currentRaised / goal) * 100
  );

  const updateProgress = (currentRaised, goal) => {
    const percentage = (currentRaised / goal) * 100;
    setCurrentRaised(percentage);
  };

  return (
    <div>
      <Badge borderRadius="full" px="5" py="3" colorScheme="teal" mb="5">
        Raised ${raised} out of ${goal} goal!
      </Badge>

      <div className="progress-labels">
        <div>0%</div>
        <div>100%</div>
      </div>
      <Progress
        value={goalPercentage}
        size="md"
        colorScheme="pink"
        mb="4"
        borderRadius="lg"
      />
    </div>
  );
};

export default ProgressBar;
