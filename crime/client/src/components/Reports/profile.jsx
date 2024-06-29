import React from 'react';
import styled from 'styled-components';

// Sample user data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  dob: 'January 1, 1980',
  address: '123 Main St, New York, NY, USA',
  phone: '+1 (555) 123-4567',
  occupation: 'Software Engineer',
  bio: 'Passionate about technology and cyber security. I love to educate others about the importance of online safety and digital ethics.',
  hobbies: 'Reading, Traveling, Coding, and Hiking'
};

// Styled components for styling the profile page
const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #fff;
`;

const ProfileHeader = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #f9a825;
`;

const ProfileDetails = styled.div`
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const ProfileBio = styled.div`
  margin-bottom: 20px;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <ProfileHeader>User Profile</ProfileHeader>
      
      <ProfileDetails>
        <DetailItem>
          <strong>Name:</strong> {user.name}
        </DetailItem>
        <DetailItem>
          <strong>Email:</strong> {user.email}
        </DetailItem>
        <DetailItem>
          <strong>Date of Birth:</strong> {user.dob}
        </DetailItem>
        <DetailItem>
          <strong>Address:</strong> {user.address}
        </DetailItem>
        <DetailItem>
          <strong>Phone:</strong> {user.phone}
        </DetailItem>
        <DetailItem>
          <strong>Occupation:</strong> {user.occupation}
        </DetailItem>
      </ProfileDetails>

      <ProfileBio>
        <strong>Bio:</strong>
        <p>{user.bio}</p>
      </ProfileBio>

      <ProfileDetails>
        <DetailItem>
          <strong>Hobbies:</strong> {user.hobbies}
        </DetailItem>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default ProfilePage;
