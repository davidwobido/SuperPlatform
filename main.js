import "./globals.css";

window.addEventListener("load", () => {
  async function fetchNews(query) {
    const key = "6ad3a2eb08154828bc956aaa5ca29170";

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${key}`
    );
    const body = await response.json();
    const news = body.articles;
    console.log(news);
    return news;
  }

  fetchNews("Ronaldo");
});
