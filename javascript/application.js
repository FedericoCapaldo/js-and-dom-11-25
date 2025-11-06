const abba = ["Bjorn", "Benny", "Anni-frid", "Agnetha"];

const list = document.createElement("ul");

abba.forEach((member) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = member;
  list.appendChild(listItem);
})

document.body.insertAdjacentElement('beforeend', list);
