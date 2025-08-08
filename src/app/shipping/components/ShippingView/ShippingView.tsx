import { LocalShipping, NavigateNext } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import {
  ActionSection,
  HeaderSection,
  IconWrapper,
  StyledButton,
  StyledContainer,
  StyledPaper
} from '../../styles/Shipping.styles';

export const ShippingView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProceedToValidation = () => {
    navigate('/validate-data?referrer=/shipping&token=abc123');
  };

  return (
    <StyledContainer maxWidth="md">
      <StyledPaper elevation={0}>
        <HeaderSection>
          <IconWrapper>
            <LocalShipping />
          </IconWrapper>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, color: '#333' }}
          >
            {t('shipping.title')}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            {t('shipping.subtitle')}
          </Typography>
        </HeaderSection>

        <ActionSection>
          <StyledButton>
            <Button
              variant="contained"
              size="large"
              onClick={handleProceedToValidation}
              endIcon={<NavigateNext />}
            >
              {t('shipping.continueButton')}
            </Button>
          </StyledButton>
        </ActionSection>
      </StyledPaper>
    </StyledContainer>
  );
};
