import { Box, Container, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled(Paper)`
  padding: 3rem;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e9ecef;
  max-width: 600px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
`;

export const IconContainer = styled(Box)`
  margin-bottom: 2rem;
  padding: 1rem;
`;

export const DetailsContainer = styled(Box)`
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 16px;
  border: 1px solid #e9ecef;

  h5 {
    font-weight: 600;
    color: #495057;
    margin-bottom: 1rem;
  }
`;

export const DetailRow = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DetailLabel = styled(Box)`
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
    min-width: 120px;
    flex-shrink: 0;
  }
`;

export const DetailValue = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  .MuiChip-root {
    max-width: 250px;
    height: auto;
    padding: 8px 12px;

    &[data-color='primary'] {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 0.875rem;
    }

    .MuiChip-label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      max-width: 100%;
      line-height: 1.4;
    }

    @media (max-width: 767px) {
      max-width: 200px;
      justify-content: flex-start;
    }
  }
`;

export const DetailsGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 1rem;
`;

export const SuccessIcon = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #28a745 0%, #34ce57 100%);
  margin: 0 auto 1rem;
  box-shadow: 0 8px 24px rgba(40, 167, 69, 0.3);

  .MuiSvgIcon-root {
    font-size: 60px;
    color: white;
  }
`;

export const EmailNotification = styled(Box)`
  font-style: italic;
  padding: 1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border: 1px solid #bbdefb;
  margin-top: 1rem;
`;
