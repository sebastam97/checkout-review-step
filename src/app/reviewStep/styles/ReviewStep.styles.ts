import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 8px;
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;

export const StyledActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledMainContent = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const StyledGridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 768px) {
    justify-content: stretch;
    margin: 1rem 0;
  }
`;

export const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    order: 1;
    max-width: none;
    margin: 0;
  }
`;

export const StyledSummarySection = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 2rem;
  height: fit-content;

  @media (max-width: 768px) {
    position: static;
    order: 2;
    margin-top: 1rem;
  }
`;
