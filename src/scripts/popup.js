
const btnSearch = document.getElementById('btnSearch');
const btnScraping = document.getElementById('btnScraping');
const inputKeyword = document.getElementById('inputKeyword');

btnSearch.addEventListener('click',  (e) => {
    e.preventDefault();
    const search = document.getElementById('inputKeyword').value;
    const url = `https://www.linkedin.com/search/results/people/?keywords=`+`${search}`;
    search !== "" ? openURL(url) :  alert("Enter a Job");  
})

 function  openURL(url) {
    return window.open(url);
}

  btnScraping.addEventListener('click' ,async (e) => {
    e.preventDefault();

    chrome.tabs.query({active: true, currentWindow: true }, function(tabs){ 
        const options = {
            target: { tabId : tabs[0].id},
            files: ["scripts/scrapperCandidates.js"]
        }
        chrome.scripting.executeScript(options)
    });

});