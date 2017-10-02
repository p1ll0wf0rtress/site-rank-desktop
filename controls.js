'use strict'

let state = {
  urlPager: 0,
  urls: ['http://google.com'],
  rankings: [],
  loading: true,
}

function handleUrls(){
  state.urls = document.getElementById('urls').value.split("\n");
  if(state.urls[state.urlPager].toLowerCase().includes('http://')){
    document.getElementById('webview').src = state.urls[state.urlPager];
  } else if(state.urls[state.urlPager].toLowerCase().includes('http://') == false) {
    document.getElementById('webview').src = "http://" +  state.urls[state.urlPager];
  }
  document.getElementById('currentAddress').innerHTML = state.urls[state.urlPager];
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

function handleProgress(){
  let progress = 1 + state.urlPager;
  document.getElementById('progress').innerHTML = progress + "/" + state.urls.length;
}

function handleNext(){
  ++state.urlPager;
  if(state.urls[state.urlPager].toLowerCase().includes('http://')){
    document.getElementById('webview').src = state.urls[state.urlPager];
  } else if(state.urls[state.urlPager].toLowerCase().includes('http://') == false) {
    document.getElementById('webview').src = "http://" +  state.urls[state.urlPager];
  }
  document.getElementById('currentAddress').innerHTML = state.urls[state.urlPager];
}

function hideUrlInput(){
  var input = document.getElementById('urlInput')
  if(input.style.display == 'none'){
    input.style.display = 'block';
  } else if(input.style.display !== 'none'){
    input.style.display = 'none';
  }
}

function handleRank(rank){
  if(state.urlPager < state.urls.length){
    pushToRankings(rank);
    handleNext();
    handleProgress();
  }
}

function handleDownload(){
  if(state.rankings.length > 1){
    var data = [];
    var csvContent = "data:text/csv;charset=utf-8,";
    state.rankings.forEach((item) => {
      console.log(item)
      var line = [item.site, item.ranking];
      data.push(line)
    })

    data.forEach((infoArray, index) =>{
      let dataString = infoArray.join(",");
      csvContent += index < data.length ? dataString+ "\n" : dataString;
    })

    // var encodedUri = encodeURI(csvContent);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = encodeURI(csvContent);
    // hiddenElement.target = '_blank';
    hiddenElement.download = 'rankings.csv';
    hiddenElement.click();
  }
  else{
    alert("Rank some sites first!")
  }
}
//add backOneSite(),progress counter, way to view current session rankings, keymappings, loading indicator
