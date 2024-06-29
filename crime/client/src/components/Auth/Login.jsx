import React from 'react';
import styled from 'styled-components';
import backgroundImage from './login.jpg'; // Import your background image

const LoginContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  filter: blur(8px); /* Adjust blur intensity as needed */
`;

const LoginFormContainer = styled.div`
  position: relative;
  max-width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Adjust opacity for clarity */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <LoginContainer>
      <BlurBackground />
      <LoginFormContainer>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <LoginForm onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" placeholder="Enter your username" />

          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" placeholder="Enter your password" />

          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>

        <LinkText>Don't have an account? <a href="/signup">Sign Up</a></LinkText>
        <LinkText>Forgot password? <a href="/reset-password">Reset Password</a></LinkText>

        <hr />

        <div style={{ textAlign: 'center' }}>
          <p>Or continue with social media:</p>
          <a href="/auth/google">
            <SubmitButton style={{ backgroundColor: '#db4437', marginRight: '10px' }}>Login with Google</SubmitButton>
          </a>
          <a href="/auth/facebook">
            <SubmitButton style={{ backgroundColor: '#3b5998' }}>Login with Facebook</SubmitButton>
          </a>
        </div>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
