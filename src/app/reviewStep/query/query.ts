import { useQuery } from '@tanstack/react-query';

export const useCountriesQuery = () =>
  useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return [
        { value: 'AR', label: 'Argentina' },
        { value: 'BR', label: 'Brasil' },
        { value: 'CL', label: 'Chile' },
        { value: 'CO', label: 'Colombia' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'ES', label: 'España' },
        { value: 'MX', label: 'México' },
        { value: 'PE', label: 'Perú' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'VE', label: 'Venezuela' },
        { value: 'US', label: 'Estados Unidos' },
        { value: 'CA', label: 'Canadá' }
      ];
    }
  });
