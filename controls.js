'use strict'

let state = {
  urlPager: 0,
  urls: [],
  rankings: [],
}

function handleUrls(){
  state.urls = document.getElementById('urls').value.split("\n");
  document.getElementById('webview').src = state.urls[state.urlPager];

}

function pushToRankings(rank){
  switch (rank) {
    case 1:
      state.rankings.push({
        site: state.urls[state.urlPager],
        ranking: "high"
      })
      break;
    case 2:
      state.rankings.push({
        site: state.urls[state.urlPager],
        ranking: "medium"
      })
      break;
    case 3:
      state.rankings.push({
        site: state.urls[state.urlPager],
        ranking: "low"
      })
      break;
    case 4:
      state.rankings.push({
        site: state.urls[state.urlPager],
        ranking: "not relevant"
      })
      break;
    case 5:
      state.rankings.push({
        site: state.urls[state.urlPager],
        ranking: "site did not load"
      })
      break;
    default:

  }
}

function handleNext(){
  ++state.urlPager;
  document.getElementById('webview').src = state.urls[state.urlPager]
}

function hideUrlInput(){
    if(document.getElementById('hideshow').innerHTML !== "show"){
      document.getElementById('urls').style.display = "none";
      document.getElementById('hideshow').innerHTML = "show";
    }
    else if(document.getElementById('hideshow').innerHTML == "show"){
      document.getElementById('urls').style.display = "inherit";
      document.getElementById('hideshow').innerHTML = "hide";
    }
}

function handleRank(rank){
  if(state.urlPager < state.urls.length){
    pushToRankings(rank);
    handleNext();
  }
}

//add backOneSite(), download(), progress counter, current url display, way to view current session rankings, show/hide url input, keymappings, note input
