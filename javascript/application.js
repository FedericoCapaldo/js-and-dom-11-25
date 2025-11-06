// const abbaNames = ["Bjorn", "Benny", "Anni-frid", "Agnetha"];

// const abbaNamesUnorderedList = document.createElement("ul");

// abbaNames.forEach((abbaMember) => {
//   const abbaMemberListItem = document.createElement("li");
//   abbaMemberListItem.innerHTML = abbaMember;
//   abbaNamesUnorderedList.appendChild(abbaMemberListItem);
// })

// const containerElement = document.querySelector(".container");
// containerElement.appendChild(abbaNamesUnorderedList);


// const abbaMembersListElements = document.querySelectorAll("li");
// abbaMembersListElements.forEach((abbaMember) => {
//   abbaMember.innerHTML += " 🎵"
// })

// const abbaMembersUnorderedList = document.querySelector('ul');
// abbaMembersUnorderedList.style.listStyleType = "upper-roman";


// const abbaMemberListItems = document.querySelectorAll(".abba");
// abbaMemberListItems.forEach((member) => {
//     member.innerHTML += ` (${member.dataset.instrument})`
// });

// const doggoImage = document.querySelector('#doggo');

// doggoImage.addEventListener("click", (event) => {
//   event.target.classList.toggle("img-circle");
// })

const avatarImages = document.querySelectorAll(".avatar");

avatarImages.forEach((avatar) => {
  avatar.addEventListener("click", (event) => {
    event.target.classList.toggle("img-circle");
  })
})
