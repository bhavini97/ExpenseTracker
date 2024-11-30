function handleFormSubmit(event){
    event.preventDefault();
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.className ="list-group-item";

    //taking counter to store
    if(typeof handleFormSubmit.count=='undefined'){
        handleFormSubmit.count = 0;
    }

    //getting all input value
    let amt = event.target.amt.value;
    let desc = event.target.desc.value;
    let type = event.target.type.value;

    const str = `${amt} - ${desc} - ${type}`;
    li.append(str);

    const key = handleFormSubmit.count++;
    const obj ={
        //"id":handleFormSubmit.count++,
        "amount":amt,
        "decription":desc,
        "eType":type
    };

    //create serailized obj
    const myObj_serial = JSON.stringify(obj);
    localStorage.setItem(key.toString(),myObj_serial);

    //del and edit button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'btn btn-danger btn-sm ms-2';
    delBtn.addEventListener('click',()=>{
        localStorage.removeItem(key.toString());
        li.remove();
    })
    li.append(delBtn);
 
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-info btn-sm ms-2';
    editBtn.addEventListener('click',()=>{
        localStorage.removeItem(key.toString());
        li.remove();
        document.getElementById('amt').value = amt;
        document.getElementById('desc').value = desc;
        document.getElementById('type').value = type;
    })
    li.append(editBtn);
    ul.append(li);

}