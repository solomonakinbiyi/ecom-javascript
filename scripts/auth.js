const cartdata = JSON.parse(localStorage.getItem("cart"));
document.querySelector(".cart--count").innerText = cartdata.length;

const data = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < data.length; i++) {
  document.querySelector(".products").innerHTML += `<div class="card">
                <img src="${data[i].imgurl}" alt="">
                <div class="card--header">
                    <span class="card--name"><a href="detail.html?id=${data[i].id}">${data[i].name}</a></span>
                    <span class="card--price">$${data[i].price}</span>
                </div>
                <div class="card--desc">
                    ${data[i].desc} 
                </div>
                <button onclick="addToCart(${data[i].id})"><i class="bi bi-bag-check"></i>&nbsp;&nbsp; Add to cart</button>
            </div>`;
}

function addToCart(value) {
  let id;
  let name;
  let imgurl;
  let price;
  let rating;
  let desc;
  for (let index = 0; index < data.length; index++) {
    if (data[index].id == value) {
      id = data[index].id;
      name = data[index].name;
      imgurl = data[index].imgurl;
      price = data[index].price;
      rating = data[index].rating;
      desc = data[index].desc;
      break;
    }
  }
  const prdDetails = {
    id,
    name,
    imgurl,
    price,
    rating,
    desc,
  };

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", "[]");
  }

  const cartdata = JSON.parse(localStorage.getItem("cart"));

  cartdata.push(prdDetails);

  document.querySelector(".cart--count").innerText = cartdata.length;

  localStorage.setItem("cart", JSON.stringify(cartdata));
}
