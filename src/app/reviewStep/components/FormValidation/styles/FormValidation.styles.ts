import { Box, Divider, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

// Container principal del formulario
export const FormContainer = styled(Box)`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// Card contenedor para las secciones
export const FormCard = styled(Paper)`
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`;

// Secciones del formulario
export const FormSection = styled(Box)`
  margin-bottom: 0;
`;

// Header de sección con icono
export const SectionHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f5f5f5;
`;

// Wrapper para iconos
export const IconWrapper = styled(Box)`
  margin-right: 12px;
  color: #1976d2;
  display: flex;
  align-items: center;
`;

// Título de sección
export const SectionTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

// Container para los campos
export const FieldsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Divider personalizado
export const StyledDivider = styled(Divider)`
  margin: 24px 0;
  border-color: #e0e0e0;
`;
