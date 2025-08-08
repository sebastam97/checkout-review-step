import { CheckCircle, LocalShipping } from '@mui/icons-material';
import { Button, Chip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router';
import {
  DetailLabel,
  DetailRow,
  DetailValue,
  DetailsContainer,
  DetailsGrid,
  EmailNotification,
  IconContainer,
  StyledContainer,
  StyledPaper,
  SuccessIcon
} from '../../styles/ConfirmOrder.styles';

export const ConfirmOrderView = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');
  const referrer = searchParams.get('referrer');

  const handleGoToShipping = () => {
    navigate('/shipping');
  };

  return (
    <StyledContainer maxWidth="md">
      <StyledPaper elevation={0}>
        <IconContainer>
          <SuccessIcon>
            <CheckCircle />
          </SuccessIcon>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            color="success.main"
          >
            {t('confirmOrder.title')}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {t('confirmOrder.subtitle')}
          </Typography>
        </IconContainer>

        <DetailsContainer>
          <Typography variant="h5" gutterBottom>
            {t('confirmOrder.details')}
          </Typography>

          <DetailsGrid>
            <DetailRow>
              <DetailLabel>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  color="text.primary"
                >
                  {t('confirmOrder.token')}
                </Typography>
              </DetailLabel>
              <DetailValue>
                <Chip
                  label={token || t('confirmOrder.noAvailable')}
                  color="primary"
                  variant="outlined"
                />
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  color="text.primary"
                >
                  {t('confirmOrder.referrer')}
                </Typography>
              </DetailLabel>
              <DetailValue>
                <Chip
                  label={referrer || t('confirmOrder.noAvailable')}
                  color="secondary"
                  variant="outlined"
                />
              </DetailValue>
            </DetailRow>
          </DetailsGrid>
        </DetailsContainer>

        <EmailNotification>
          <Typography variant="body1" color="text.secondary">
            {t('confirmOrder.emailConfirmation')}
          </Typography>
        </EmailNotification>

        <Button
          variant="contained"
          size="large"
          onClick={handleGoToShipping}
          startIcon={<LocalShipping />}
          sx={{
            mt: 3,
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            color: 'white',
            fontWeight: 600,
            fontSize: '1rem',
            padding: '14px 32px',
            borderRadius: '12px',
            textTransform: 'none',
            boxShadow: '0 4px 16px rgba(0, 123, 255, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #0056b3 0%, #004085 100%)',
              boxShadow: '0 6px 24px rgba(0, 123, 255, 0.4)',
              transform: 'translateY(-2px)'
            },
            '&:active': {
              transform: 'translateY(0)',
              boxShadow: '0 2px 8px rgba(0, 123, 255, 0.3)'
            }
          }}
        >
          Ir a Envío
        </Button>
      </StyledPaper>
    </StyledContainer>
  );
};
