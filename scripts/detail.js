const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let value = params.id;

const data = JSON.parse(localStorage.getItem("products"));

for (let index = 0; index < data.length; index++) {
  if (data[index].id == value) {
    document.querySelector(
      ".product--detail"
    ).innerHTML = `<div class="productcard">
                <img src="${data[index].imgurl}" alt="">
                <div class="productcard--cont">
                    <h1 class="productcard--name">${data[index].name}</h1>
                    <p class="productcard--desc">${data[index].desc}</p>
                    <p class="productcard--price">$${data[index].price}</p>
                    <p class="productcard--ratings">
                    </p>
                </div>
            </div>`;
    break;
  }
}

for (let index = 0; index < data.length; index++) {
  if (data[index].id == value) {
    for (let i = 1; i <= data[index].rating; i++) {
      document.querySelector(
        ".productcard--ratings"
      ).innerHTML += `<i class="bi bi-star-fill"></i>`;
    }
    break;
  }
}
