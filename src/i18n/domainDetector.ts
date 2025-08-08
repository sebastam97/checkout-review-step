// Mapeo de dominios a idiomas
const domainLanguageMap: Record<string, string> = {
  // Dominios en español
  'mercadolibre.com.ar': 'es',
  'mercadolibre.com.mx': 'es',
  'mercadolibre.com.co': 'es',
  'mercadolibre.com.pe': 'es',
  'mercadolibre.com.ve': 'es',
  'mercadolibre.cl': 'es',
  'mercadolibre.com.ec': 'es',
  'mercadolibre.com.uy': 'es',
  'mercadolibre.com.py': 'es',
  'mercadolibre.com.bo': 'es',
  'mercadolibre.com.do': 'es',
  'mercadolibre.com.pa': 'es',
  'mercadolibre.com.cr': 'es',
  'mercadolibre.com.gt': 'es',
  'mercadolibre.com.hn': 'es',
  'mercadolibre.com.ni': 'es',
  'mercadolibre.com.sv': 'es',

  // Dominios en portugués
  'mercadolivre.com.br': 'pt',

  // Dominios en inglés
  'mercadolibre.com': 'en',
  localhost: 'es', // Para desarrollo local
  '127.0.0.1': 'es' // Para desarrollo local
};

export const detectLanguageByDomain = (): string => {
  try {
    const hostname = window.location.hostname;
    const language = domainLanguageMap[hostname];

    if (language) {
      console.log(`Idioma detectado por dominio ${hostname}: ${language}`);
      return language;
    }

    // Si no se encuentra el dominio exacto, buscar por subdominio
    for (const domain in domainLanguageMap) {
      if (hostname.includes(domain)) {
        console.log(
          `Idioma detectado por subdominio ${hostname} (${domain}): ${domainLanguageMap[domain]}`
        );
        return domainLanguageMap[domain];
      }
    }

    // Fallback a español si no se encuentra el dominio
    console.log(
      `Dominio no reconocido: ${hostname}, usando español por defecto`
    );
    return 'es';
  } catch (error) {
    console.error('Error detectando idioma por dominio:', error);
    return 'es';
  }
};

export const getSupportedLanguages = (): string[] => {
  return ['es', 'en', 'pt'];
};

export const getLanguageFromDomain = (domain: string): string => {
  return domainLanguageMap[domain] || 'es';
};
