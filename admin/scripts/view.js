const data = JSON.parse(localStorage.getItem("products"));

for (let i = 0; i < data.length; i++) {
  document.querySelector("#tbldatarow").innerHTML += `<tr class="tabledata">
    <td>${data[i].id}</td>
    <td class="tdimg"><img src="${data[i].imgurl}" alt=""></td>
    <td>${data[i].name}</td>
    <td>${data[i].desc}</td>
    <td>${data[i].price}</td>
    <td><a href="editproduct.html?id=${data[i].id}" class="edtbtn">Edit</a></td>
    <td><a style="cursor: pointer" class="delbtn" onclick="removeRow(${data[i].id})">Delete</a></td>
</tr>`;
}
