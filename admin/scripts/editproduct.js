const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let value = params.id;

const data = JSON.parse(localStorage.getItem("products"));

for (let index = 0; index < data.length; index++) {
  if (data[index].id == value) {
    document.querySelector("#prdnnnm").value = data[index].name;
    document.querySelector("#prdimgg").value = data[index].imgurl;
    document.querySelector("#prdprc").value = data[index].price;
    document.querySelector("#prdrtt").value = data[index].rating;
    document.querySelector("#prdddd").value = data[index].desc;
    break;
  }
}

document.querySelector("#edtprdform").addEventListener("submit", function (e) {
    e.preventDefault();
    const objForm = new FormData(e.target);
  
    const name = objForm.get("name");
    const imgurl = objForm.get("imgurl");
    const price = objForm.get("price");
    const rating = objForm.get("rating");
    const desc = objForm.get("desc");
  
    // alert(`Holla these are the data ==> ${name} ${imgurl} ${price} ${rating} ${desc}`)
  
    if (!name || !imgurl || !price || !rating)
      return alert("Please fill in all the details");
  
    const data = JSON.parse(localStorage.getItem("products"));
  
    for(let i = 0; i < data.length; i++){
        if(data[i].id == value){
            data[i].name = name
            data[i].imgurl = imgurl
            data[i].price = price
            data[i].rating = rating
            data[i].desc = desc
            break;
        }
    }
  
    localStorage.setItem("products", JSON.stringify(data));
  
  });