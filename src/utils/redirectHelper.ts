export function buildRedirectTo(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  
  const basePath = import.meta.env.PUBLIC_BASE_PATH || '';
  // Normalize basePath: remove trailing slash, ensure leading slash if non-empty
  const normalizedBasePath = basePath 
    ? (basePath.startsWith('/') ? basePath : '/' + basePath).replace(/\/$/, '')
    : '';
  
  return window.location.origin + normalizedBasePath + '/auth/callback';
}
