//API's

window.onload = OnWebsiteLoad;

function OnWebsiteLoad() {
  DoGithubApi();
  DoYouTubebApi();
  DoSteamApi();
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
        `<a href=${"https://www.youtube.com/watch?v="  + item.id.videoId} > ${item.snippet.title}</a>`
        ;
      });
    });
}

function DoSteamApi() {
  const container = document.getElementById("steam");
  const url = 
    "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=271590&count=3&maxlength=300&format=json";

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      json.appnews.newsitems.map((item) => {
        container.innerHTML += 
        `<a href="${item.url}" class="steam_con" target="_blank"><div class="steam_cont">${item.title}</div></a>`
        ;
      });
    });
}

//Loader


//var preloader = document.getElementById('loader');
//function loadFunction(){
  //preloader.style.display = 'none';
//}

$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });


//Scroll To Top Button


var goToTop = document.getElementById("goToTopButton");

window.onscroll = function() {scrollToHome()};

function scrollToHome() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTop.style.display = "block";
  } else {
    goToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

