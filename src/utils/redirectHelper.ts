export function buildRedirectTo(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  
  // Use PUBLIC_ prefix for Astro
  const basePath = import.meta.env.PUBLIC_BASE_PATH || '';
  const normalizedBasePath = basePath 
    ? (basePath.startsWith('/') ? basePath : '/' + basePath).replace(/\/$/, '')
    : '';
  
  const redirectUrl = window.location.origin + normalizedBasePath + '/auth/callback';
  
  // Log for verification (remove after confirming fix)
  console.log('[Redirect Helper] Built redirectTo:', redirectUrl);
  
  return redirectUrl;
}
