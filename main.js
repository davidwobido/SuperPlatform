window.addEventListener("load", () => {
  const articleImg = document.querySelector(".article-img");
  const articlePreline = document.querySelector(".article-preline");
  const articleHeadline = document.querySelector(".article-headline");
  const articleCopy = document.querySelector(".article-copy");

  async function fetchNews(query) {
    const key = "6ad3a2eb08154828bc956aaa5ca29170";

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${key}`
    );
    const body = await response.json();
    const news = body.articles;
    console.log(news);
    console.log(news[1].urlToImage);

    articleImg.src = news[1].urlToImage;
    articlePreline.textContent = query;
    articleHeadline.textContent = news[1].title;
    articleCopy.textContent = news[1].description;
    return news;
  }

  fetchNews("Berlin");
});
