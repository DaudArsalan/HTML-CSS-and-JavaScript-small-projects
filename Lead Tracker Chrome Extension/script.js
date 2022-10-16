let myLead = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  myLead = [];
  render(myLead);
});

const tabBtn = document.getElementById("tab-btn");
tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url);
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
  });
});

function render(leads) {
  let listItems = "";
  leads.forEach((element) => {
    listItems += `<li><a href="${element}" target=_blank>${element}</a></li>`;
  });
  ulEl.innerHTML = listItems;
}

const lsLead = JSON.parse(localStorage.getItem("myLead"));
if (lsLead) {
  myLead = lsLead;
  render(myLead);
}

const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", () => {
  myLead.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLead", JSON.stringify(myLead));

  render(myLead);
});
