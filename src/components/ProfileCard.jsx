import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

const ProfileCard = ({ theme }) => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem('profile'));

  // if (!profile) {
  //   return <div>Loading...</div>; 
  // }

  return (
    <Box p={5} shadow="md" borderWidth="1px" bg={theme}>
      <div className='profile-inner-div'>
          <div className='banner-image-div'>
            <div className='profile-image-div'>
                <Image borderRadius="full" boxSize="150px" src={profilePic} alt="Profile" mb={4}/>
            </div>
          </div>
          <div className="card-details">
            <Text fontSize="2xl" fontWeight="bold">{profile.name}</Text>
            <Text fontSize="lg">{profile.title}</Text>
            <Text fontSize="md">{profile.location}</Text>
            <div className="biography-div">
                <Text mt={0}>{profile.biography}</Text>
            </div>
            <p className='biography-para'>Biography</p>
            <Button mt={4} colorScheme="teal" onClick={() => navigate('/update-profile')}>Update</Button>
          </div>
      </div>
    </Box>
  );
};

export default ProfileCard;
