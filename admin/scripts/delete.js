function removeRow(value){
    const data = JSON.parse(localStorage.getItem("products"));
    
    const newArr = []
    
    for(let i = 0; i < data.length; i++){
        if(data[i].id != value){
            newArr.push(data[i])
        }
    }
    
    localStorage.setItem("products", JSON.stringify(newArr));

    location.reload()
}

