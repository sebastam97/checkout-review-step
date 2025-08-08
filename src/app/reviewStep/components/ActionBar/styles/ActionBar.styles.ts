import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledActionBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding: 2rem 0;
  gap: 1.5rem;
  border-top: 1px solid #f0f0f0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1.5rem;
  }
`;

export const StyledBackButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 14px 32px;
    border-radius: 12px;
    text-transform: none;
    min-width: 140px;
    box-shadow: 0 4px 16px rgba(220, 53, 69, 0.25);
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%);
      box-shadow: 0 6px 24px rgba(220, 53, 69, 0.35);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(220, 53, 69, 0.25);
    }

    &:disabled {
      background: #e9ecef;
      color: #6c757d;
      box-shadow: none;
      transform: none;
    }
  }
`;

export const StyledConfirmButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #28a745 0%, #34ce57 100%);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 14px 32px;
    border-radius: 12px;
    text-transform: none;
    min-width: 160px;
    box-shadow: 0 4px 16px rgba(40, 167, 69, 0.25);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover {
      background: linear-gradient(135deg, #218838 0%, #28a745 100%);
      box-shadow: 0 6px 24px rgba(40, 167, 69, 0.35);
      transform: translateY(-2px);

      &:before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(40, 167, 69, 0.25);
    }

    &:disabled {
      background: #e9ecef;
      color: #6c757d;
      box-shadow: none;
      transform: none;

      &:before {
        display: none;
      }
    }

    .MuiCircularProgress-root {
      color: white;
    }
  }
`;
