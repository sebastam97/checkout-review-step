import { Box, Card, Container, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  padding: 3rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 2rem;
`;

export const HeroSection = styled(Box)`
  margin-bottom: 3rem;
`;

export const FeaturesSection = styled(Box)`
  margin: 3rem 0;
`;

export const FeatureGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const FeatureCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ActionSection = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const IconContainer = styled(Box)`
  margin-bottom: 1rem;

  .MuiSvgIcon-root {
    font-size: 48px;
    color: #3483fa;
  }
`;
