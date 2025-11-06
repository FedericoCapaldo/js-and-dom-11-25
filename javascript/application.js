const abbaNames = ["Bjorn", "Benny", "Anni-frid", "Agnetha"];

const abbaNamesUnorderedList = document.createElement("ul");

abbaNames.forEach((abbaMember) => {
  const abbaMemberListItem = document.createElement("li");
  abbaMemberListItem.innerHTML = abbaMember;
  abbaNamesUnorderedList.appendChild(abbaMemberListItem);
})

const containerElement = document.querySelector(".container");
containerElement.appendChild(abbaNamesUnorderedList);


const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.innerHTML += " 🎵"
})

const ul = document.querySelector('ul');
ul.style.listStyleType = "upper-roman";
