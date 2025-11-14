// utils/fetchWithTimeout.js
export const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return await response.json();
  } catch (error) {
    throw new Error('Fetch request failed: ' + error.message);
  } finally {
    clearTimeout(timeoutId);
  }
};
