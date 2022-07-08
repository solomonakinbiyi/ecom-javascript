const cartdata = JSON.parse(localStorage.getItem("cart"));
document.querySelector(".cart--count").innerText = cartdata.length;

const data = JSON.parse(localStorage.getItem("cart"));
let total = 0;

for (let i = 0; i < data.length; i++) {
  document.querySelector(".prditems").innerHTML += `<div class="prditm">
                    <img src="${data[i].imgurl}" alt="">
                    <div class="prdcont">
                        <p class="prdcont--name">${data[i].name}</p>
                        <p class="prdcont--desc">${data[i].desc}</p>
                        <p class="prdcont--price">$${data[i].price}</p>
                        <p class="prdcont--rating"></p>
                    </div>
                </div>`;
  total += parseInt(data[i].price);
}

document.querySelector("#prcttl").innerText = `US $${total}`;
