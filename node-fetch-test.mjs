// node-fetch-test.mjs
const API_KEY = "acb4725b549509261b19a55450e47fae"; // replace with your TMDB API key
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

async function test() {
  try {
    const res = await fetch(url); // built-in fetch in Node 18+
    const data = await res.json();
    console.log(data.results?.slice(0, 5));
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

test();

