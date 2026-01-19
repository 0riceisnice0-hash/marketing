export function buildRedirectTo(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  
  const basePath = import.meta.env.PUBLIC_BASE_PATH || '';
  const normalizedBasePath = basePath 
    ? (basePath.startsWith('/') ? basePath : '/' + basePath).replace(/\/$/, '')
    : '';
  
  const redirectUrl = window.location.origin + normalizedBasePath + '/auth/callback';
  
  console.log('[Redirect Helper] Built OAuth redirectTo:', redirectUrl);
  
  return redirectUrl;
}
