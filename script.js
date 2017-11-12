function expand_list() {
  chrome.tabs.executeScript({
    file: 'expand.js'
  }); 
}
document.getElementById('clickme').addEventListener('click', expand_list);

function invite_all() {
  chrome.tabs.executeScript({
    file: 'invite.js'
  }); 
}
document.getElementById('invite').addEventListener('click', invite_all);