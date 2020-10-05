//on website load
window.onload = OnWebsiteLoad;

function OnWebsiteLoad() {
  DoGithubApi();
}

function DoGithubApi() {
  const container = document.getElementById("github");
  const url =
    "https://api.github.com/search/repositories?q=user:Wallies21&sort=updated";

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      json.items.map((item) => {
        container.innerHTML += 
        `<a href=${item.html_url}>${item.name}</a>`
        ;
      });
    });
}