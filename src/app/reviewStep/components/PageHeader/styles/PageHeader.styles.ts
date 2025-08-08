import styled from 'styled-components';

export const StyledPageHeaderContainer = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  h1 {
    white-space: pre-line;
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    max-width: none;
    padding: 0;

    h1 {
      font-size: 2rem;
    }
  }
`;
