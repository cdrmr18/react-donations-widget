import React, { useState } from "react";
import Modal from "./Modal";
import {
  Progress,
  Badge,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  HStack,
  Button,
} from "@chakra-ui/react";
import "./ProgressBar.scss";

const ProgressBar = ({ goal, raised }) => {
  const [currentRaised, setCurrentRaised] = useState(raised);
  const [value, setValue] = useState("10");
  const [displayModal, setDisplayModal] = useState(false);

  const updateProgress = (currentRaised, goal) => {
    return (currentRaised / goal) * 100;
  };

  const handleChange = (e) => {
    setValue(e);
  };

  const handleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleDonation = () => {
    setCurrentRaised(currentRaised + parseInt(value));
    handleModal();
  };

  return (
    <div>
      <Badge borderRadius="full" px="5" py="3" colorScheme="teal" mb="5">
        Raised ${currentRaised} out of ${goal} goal!
      </Badge>

      <div className="progress-labels">
        <div>0%</div>
        <div>100%</div>
      </div>
      <Progress
        value={updateProgress(currentRaised, goal)}
        size="md"
        colorScheme="pink"
        mb="10"
        borderRadius="lg"
      />

      <FormControl as="fieldset">
        <FormLabel as="legend">How much would you like to donate?</FormLabel>
        <RadioGroup onChange={handleChange} value={value}>
          <HStack spacing="24px">
            <Radio value="10">$10</Radio>
            <Radio value="20">$20</Radio>
            <Radio value="50">$50</Radio>
            <Radio value="100">$100</Radio>
          </HStack>
        </RadioGroup>
        <Button
          colorScheme="teal"
          width="100%"
          mt="6"
          onClick={() => handleDonation()}
        >
          Donate
        </Button>
      </FormControl>
      {displayModal && <Modal handleModal={handleModal} />}
    </div>
  );
};

export default ProgressBar;
