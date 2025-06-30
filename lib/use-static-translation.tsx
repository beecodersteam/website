import { ReactNode } from 'react';

// Hook para usar traduções estáticas
export function useStaticTranslation(translations: Record<string, any>, locale: string) {
  function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && typeof current === 'object' ? current[key] : undefined;
    }, obj);
  }

  function processComponents(text: string, components?: ReactNode[]): ReactNode {
    if (!components || components.length === 0) {
      return text;
    }

    const parts = text.split(/(<\d+>.*?<\/\d+>)/);
    
    return parts.map((part, index) => {
      const match = part.match(/<(\d+)>(.*?)<\/\1>/);
      if (match) {
        const componentIndex = parseInt(match[1]);
        const content = match[2];
        const Component = components[componentIndex];
        
        if (Component && typeof Component === 'object' && 'type' in Component) {
          return (
            <Component.type key={`comp-${index}`} {...Component.props}>
              {content}
            </Component.type>
          );
        }
        return content;
      }
      return part;
    });
  }

  function t(key: string, options?: { components?: ReactNode[] }): ReactNode {
    let namespace = 'sections'; // Default namespace
    let translationKey = key;
    
    // Se a chave contém ':', separa namespace da chave
    if (key.includes(':')) {
      [namespace, translationKey] = key.split(':', 2);
    } else if (key.startsWith('navigation.') || key.startsWith('cta.') || key.startsWith('footer.')) {
      // Chaves de navegação, CTAs e footer estão no namespace 'common'
      namespace = 'common';
    }

    const namespaceData = translations[namespace];
    if (!namespaceData) {
      console.warn(`Namespace '${namespace}' not found for key '${key}'`);
      return key;
    }

    const value = getNestedValue(namespaceData, translationKey);
    
    if (value === undefined || value === null) {
      console.warn(`Translation key '${translationKey}' not found in namespace '${namespace}'`);
      return key;
    }

    if (typeof value !== 'string') {
      return key;
    }

    // Processa componentes se fornecidos
    if (options?.components) {
      return processComponents(value, options.components);
    }

    return value;
  }

  return { t, locale };
}
