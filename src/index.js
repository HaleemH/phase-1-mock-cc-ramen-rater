// write your code here
getRamen();
const details = document.querySelector("#ramen-detail");
const ratings = document.querySelector("#rating-display");
const comment = document.querySelector("#comment-display");

function getRamen() {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((json) => {
        displayItems(json);
      });
    });
}

function displayItems(menu) {
  //add images
  const ramenMenu = document.querySelector("#ramen-menu");
  const menuImg = document.createElement("img");
  menuImg.src = menu.image;
  ramenMenu.append(menuImg);
  //event listener
  menuImg.addEventListener("click", (e) => {
    const img = document.querySelector(".detail-image");
    img.src = menu.image;
    details.append(img);
    const h2 = document.querySelector(".name");
    h2.innerText = menu.name;
    const h3 = document.querySelector(".restaurant");
    h3.innerText = menu.restaurant;
    details.append(h2);
    details.append(h3);
    ratings.innerText = menu.rating;
    comment.innerText = menu.comment;
    span.append(ratings);
    p.append(comment);
  });
}

document.querySelector("#new-ramen").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/ramens", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target.rating.value,
    }),
  })
    .then((response) => response.json())
    .then((ramen) => {
      displayItems(ramen);
    });
});
