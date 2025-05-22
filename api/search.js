export default async function handler(req, res) {
  const { query } = req;

  const gnewsUrl = new URL('https://gnews.io/api/v4/search');
  for (const key in query) {
    gnewsUrl.searchParams.set(key, query[key]);
  }

  gnewsUrl.searchParams.set('token', process.env.GNEWS_API_KEY);

  const response = await fetch(gnewsUrl.toString());
  const data = await response.json();

  res.status(200).json(data);
}
