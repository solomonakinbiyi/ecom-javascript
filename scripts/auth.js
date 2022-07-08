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
                <button><i class="bi bi-bag-check"></i>&nbsp;&nbsp; Add to cart</button>
            </div>`;
}