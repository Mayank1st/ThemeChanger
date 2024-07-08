// App.jsx
import React, { useState } from 'react';
import { Box, Grid, Button } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import ThemeSelector from './components/ThemeSelector';
import ProfileCard from './components/ProfileCard';
import UpdateProfileForm from './components/UpdateProfileForm';
// import UpdateProfileForm from './components/updateProfileForm';

const App = () => {
  const [theme, setTheme] = useState('#FFFFFF');

  return (
    <Box p={8}>
      <Routes>
        <Route path="/" element={
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box>
              <ThemeSelector onSelectTheme={setTheme} />
            </Box>
            <Box>
              <ProfileCard theme={theme} />
            </Box>
          </Grid>
        } />
        <Route path="/update-profile" element={<UpdateProfileForm />} />
      </Routes>
    </Box>
  );
};

export default App;
