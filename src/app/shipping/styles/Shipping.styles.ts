import { Box, Container, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  padding: 2rem 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem 8px;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e9ecef;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem auto;
    max-width: 90%;
  }
`;

export const HeaderSection = styled(Box)`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 123, 255, 0.3);

  .MuiSvgIcon-root {
    font-size: 60px;
    color: white;
  }
`;

export const ContentSection = styled(Box)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 16px;
  border: 1px solid #e9ecef;
`;

export const OptionsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const OptionCard = styled(Box)`
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.15);
    transform: translateY(-2px);
  }

  .option-icon {
    font-size: 2.5rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  .option-title {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .option-description {
    color: #666;
    font-size: 0.875rem;
  }
`;

export const ActionSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  width: 100%;
`;

export const StyledButton = styled(Box)`
  .MuiButton-root {
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 16px 40px;
    border-radius: 12px;
    text-transform: none;
    min-width: 200px;
    box-shadow: 0 4px 16px rgba(0, 123, 255, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
      box-shadow: 0 6px 24px rgba(0, 123, 255, 0.4);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
    }
  }
`;
