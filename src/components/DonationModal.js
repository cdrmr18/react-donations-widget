import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const DonationModal = ({ onClick, value, title }) => {
  return (
    <Modal isOpen={true} onClose={onClick}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Donation sent!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Thanks for donating ${value} to {title}!
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClick}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DonationModal;
