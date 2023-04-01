import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";

const App = () => {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const UpperCase = () => {
    let uc = value.toLocaleUpperCase();
    setValue(uc);
  };
  const LowerCase = () => {
    let lc = value.toLocaleLowerCase();
    setValue(lc);
  };
  const Copy = () => {
    let text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const Clear = () => {
    setValue(" ");
  };
  const HandleSpace = () => {
    let newText = value.split(/[ ]+/);
    setValue(newText.join(" "));
  }
  const Bold = () => {
    let newStr = document.getElementById("textarea");
    newStr.style.fontWeight = "bold";
  };
  const Italic = () => {
    let newStr = document.getElementById("textarea");
    newStr.style.fontStyle = "Italic";
  };
  const Normal = () => {
    let newStr = document.getElementById("textarea");
    newStr.style.fontStyle = "Normal";
  };
  return (
    <>
      <Box
        h="100vh"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-b, #e1cef4, #f4f4f4)"
      >
        <Container maxW='container.sm' >
          <h1 className="font">TEXTER</h1>
          <ButtonGroup
            variant="outline"
            spacing="1"
            mx="auto"
            display={"flex"}
            justifyContent={"center"}
          >
            <Button 
              _focusVisible={{ bg: "#0000" }}
              fontSize={"12"}
              boxShadow={"sm"}
              borderRadius={"0"}
              onClick={UpperCase}
            >
              Uppecase
            </Button>
            <Button
              fontSize={"12"}
              borderRadius={"0"}
              boxShadow={"sm"}
              onClick={LowerCase}
            >
              LowerCase
            </Button>
            <Button fontSize={"12"} borderRadius={"0"} boxShadow={"sm"} onClick={Copy}>
              Copy
            </Button>
            <Button fontSize={"12"} boxShadow={"sm"} borderRadius={"0"} onClick={HandleSpace}>
              Remove Space
            </Button>
            <Button fontSize={"12"} borderRadius={"0"} boxShadow={"sm"} onClick={Clear}>
              Clear
            </Button>
            <Button fontSize={"12"} borderRadius={"0"} boxShadow={"sm"} onClick={Bold}>
              B
            </Button>
            <Button fontSize={"12"} borderRadius={"0"} boxShadow={"sm"} onClick={Italic}>
              I
            </Button>

            <Button
              as="button"
              onClick={Italic}
              bg={"transparent"}
              borderColor={"#E2E8F0"}
              fontSize={"12"}
              borderRadius={"0"}
              boxShadow={"sm"}
              _active={{
                bg: "#00000",
                transform: "scale(0.98)",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Italic
            </Button>
            <Button
              as="button"
              onClick={Normal}
              fontSize={"12"}
              borderRadius={"0"}
              boxShadow={"sm"}
              _active={{
                bg: "#00000",
                transform: "scale(0.98)",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Normal
            </Button>
          </ButtonGroup>
          <form action="">
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Start Typing , or copy paste your document here ..."
              size="sm"
              rows="8"
              id="textarea"
              boxShadow="lg"
            />
          </form>
          <Heading as="h4" mt="10" mb="10" size="sm">
            Total Characters {value.length} Total Words{" "}
            {value.split(" ").length}
          </Heading>
          <Heading as="h3" mt="10" size="md">
            {" "}
            Preview Text
          </Heading>
          <Box height={"100%"} maxH="220px" overflowY="scroll">
            <Text mt="8px" fontSize={"12"}>
              {value}
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default App;
