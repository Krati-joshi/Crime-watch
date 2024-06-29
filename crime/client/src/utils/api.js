// src/utils/api.js

async function fetchData(url, options = {}) {  // Added options parameter
  try {
    const response = await fetch(url, options);  // Pass options to fetch
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export { fetchData };  // Use named export
