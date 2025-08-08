import {
  NavigateNext,
  Security,
  ShoppingCart,
  Speed,
  Support
} from '@mui/icons-material';
import { Button, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import {
  ActionSection,
  FeatureCard,
  FeatureGrid,
  FeaturesSection,
  HeroSection,
  IconContainer,
  StyledContainer,
  StyledPaper
} from '../../styles/Home.styles';

export const HomeView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStartPurchase = () => {
    // Navega a validate-data con los mismos parámetros que shipping
    navigate('/validate-data?referrer=/shipping&token=abc123');
  };

  const features = [
    {
      icon: <Speed />,
      title: t('home.features.fast'),
      description: t('home.features.fastDesc')
    },
    {
      icon: <Security />,
      title: t('home.features.secure'),
      description: t('home.features.secureDesc')
    },
    {
      icon: <Support />,
      title: t('home.features.support'),
      description: t('home.features.supportDesc')
    }
  ];

  return (
    <StyledContainer maxWidth="lg">
      <div style={{ width: '100%' }}>
        {/* Hero Section */}
        <StyledPaper elevation={6}>
          <HeroSection>
            <ShoppingCart
              sx={{
                fontSize: 80,
                color: 'white',
                mb: 2
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              {t('home.title')}
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
              {t('home.subtitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.1rem', opacity: 0.8 }}
            >
              {t('home.description')}
            </Typography>
          </HeroSection>
        </StyledPaper>

        {/* Features Section */}
        <FeaturesSection>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="center"
            color="primary"
          >
            ¿Por qué elegirnos?
          </Typography>

          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index} elevation={3}>
                <IconContainer>{feature.icon}</IconContainer>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </FeaturesSection>

        {/* Demo Note */}
        <Paper elevation={2} sx={{ p: 2, mb: 3, backgroundColor: '#f5f5f5' }}>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            💡 {t('home.demoNote')}
          </Typography>
        </Paper>

        {/* Action Section */}
        <ActionSection>
          <Button
            variant="contained"
            size="large"
            onClick={handleStartPurchase}
            endIcon={<NavigateNext />}
            sx={{
              fontSize: '1.2rem',
              padding: '12px 32px',
              borderRadius: '25px',
              background: 'linear-gradient(45deg, #3483fa 30%, #00a650 90%)',
              boxShadow: '0 4px 20px rgba(52, 131, 250, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #2968c8 30%, #008a43 90%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(52, 131, 250, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {t('home.startButton')}
          </Button>
        </ActionSection>
      </div>
    </StyledContainer>
  );
};
