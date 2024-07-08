import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Input, Textarea, Stack, FormControl, FormLabel } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../slices/profileSlice';

const UpdateProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile) || JSON.parse(localStorage.getItem('profile')) || {};

  const [formProfile, setFormProfile] = useState(profile);

  useEffect(() => {
    setFormProfile(profile);
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formProfile));
    localStorage.setItem('profile', JSON.stringify(formProfile));
    navigate('/');
  };

  return (
    <Box p={8}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formProfile.name || ''}
              onChange={handleChange}
              placeholder="Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formProfile.title || ''}
              onChange={handleChange}
              placeholder="Title"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              value={formProfile.location || ''}
              onChange={handleChange}
              placeholder="Location"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Biography</FormLabel>
            <Textarea
              name="biography"
              value={formProfile.biography || ''}
              onChange={handleChange}
              placeholder="Biography"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">Update Profile</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateProfileForm;
