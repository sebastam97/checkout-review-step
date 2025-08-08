import { Typography } from '@mui/material';
import React from 'react';
import { StyledPageHeaderContainer } from './styles/PageHeader.styles';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <StyledPageHeaderContainer>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        {title}
      </Typography>
    </StyledPageHeaderContainer>
  );
};
