// components/ThemeSelector.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";

const colors = {
  solids: ["#FFFFFF", "#FFEBEE", "#E3F2FD", "#E8F5E9", "#222222", "#d9d9d9"],
  linearGradients: [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #43cea2, #185a9d)",
  ],
  radialGradients: [
    "radial-gradient(circle, #ff7e5f, #feb47b)",
    "radial-gradient(circle, #43cea2, #185a9d)",
  ],
};

const ThemeSelector = ({ onSelectTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(colors.solids[0]);

  const handleSelect = (theme) => {
    setSelectedTheme(theme);
    onSelectTheme(theme);
  };

  return (
    <Box>
      <Text as="b" fontSize="xl" mb={5} className="Theme-heading">
        Themes
      </Text>
      <div className="skin-div">
        <div>
          <Heading size="md">Apply a skin to your profile</Heading>
        </div>
        <div>
          <Button colorScheme="teal" variant="outline">
            +custom
          </Button>
          <Button colorScheme="teal" variant="solid">
            Save
          </Button>
        </div>
      </div>
      <Stack spacing={4}>
        <Text>Solids</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          {colors.solids.map((color) => (
            <GridItem key={color}>
              <Box
                bg={color}
                height="40px"
                cursor="pointer"
                border={
                  selectedTheme === color ? "2px solid black" : "1px solid gray"
                }
                onClick={() => handleSelect(color)}
              />
            </GridItem>
          ))}
        </Grid>

        <Text>Linear Gradients</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          {colors.linearGradients.map((gradient) => (
            <GridItem key={gradient}>
              <Box
                bg={gradient}
                height="40px"
                cursor="pointer"
                border={
                  selectedTheme === gradient
                    ? "2px solid black"
                    : "1px solid gray"
                }
                onClick={() => handleSelect(gradient)}
              />
            </GridItem>
          ))}
        </Grid>

        <Text>Radial Gradients</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          {colors.radialGradients.map((gradient) => (
            <GridItem key={gradient}>
              <Box
                bg={gradient}
                height="40px"
                cursor="pointer"
                border={
                  selectedTheme === gradient
                    ? "2px solid black"
                    : "1px solid gray"
                }
                onClick={() => handleSelect(gradient)}
              />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default ThemeSelector;
