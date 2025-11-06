const abba = ["Bjorn", "Benny", "Anni-frid", "Agnetha"];

const list = document.createElement("ul");

abba.forEach((member) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = member;
  list.appendChild(listItem);
})


const container = document.querySelector(".container");
container.appendChild(list);
