//on website load
window.onload = OnWebsiteLoad;

function OnWebsiteLoad() {
  DoGithubApi();
  DoYouTubebApi();
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
function DoYouTubebApi() {
  const container = document.getElementById("youtube");
  const url = 
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=Portfolio%203%20-%20Concept%20video&key=AIzaSyDJIqCfe4pK-rHD2oxohL27mBpzBqObYag";

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      json.items.map((item) => {
        container.innerHTML += 
        `<a href=${"https://www.youtube.com/watch?v="  + item.id.videoId} target="_blank" > ${item.snippet.title}</a>`
        ;
      });
    });
}