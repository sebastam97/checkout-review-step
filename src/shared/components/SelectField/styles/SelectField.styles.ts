import { FormControl } from '@mui/material';
import styled from 'styled-components';

export const StyledFormControl = styled(FormControl)`
  margin-bottom: 16px;

  & .MuiOutlinedInput-root {
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: #ffffff;

    &:hover {
      box-shadow: 0 2px 8px rgba(25, 118, 210, 0.1);
    }

    &.Mui-focused {
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.15);
    }
  }

  & .MuiInputLabel-root {
    font-weight: 500;

    &.Mui-focused {
      color: #1976d2;
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #e0e0e0;
    transition: border-color 0.3s ease;
  }

  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #1976d2;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #1976d2;
    border-width: 2px;
  }
`;
