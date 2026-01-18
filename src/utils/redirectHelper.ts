export function buildRedirectTo(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  
  const basePath = import.meta.env.VITE_BASE_PATH || '';
  return window.location.origin + basePath + '/auth/callback';
}
