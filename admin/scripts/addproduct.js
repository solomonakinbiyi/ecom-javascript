document.querySelector("#addprdform").addEventListener("submit", function (e) {
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

  console.log("catch me");

  const prdDetails = {
    id: Math.floor(Math.random() * 413400 + 113400),
    name,
    imgurl,
    price,
    rating,
    desc,
  };

  if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", "[]");
  }

  const data = JSON.parse(localStorage.getItem("products"));

  data.push(prdDetails);

  localStorage.setItem("products", JSON.stringify(data));

  document.querySelector("#prdnnnm").value = ''
  document.querySelector("#prdimgg").value = ''
  document.querySelector("#prdprc").value = ''
  document.querySelector("#prdrtt").value = ''
  document.querySelector("#prdddd").value = ''

});
