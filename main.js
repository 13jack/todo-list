let inputx = document.querySelector(".todo input");
let addbtn = document.querySelector(".todo button");
let test = document.querySelector(".test");
let pendingtask = document.querySelector(".pendingTask")
let clear = document.querySelector(".footer button");
let heading = document.querySelector(".heading h1");
let listArray = [];


let nullinput = (userInput) => {
    var userInputl = userInput.replace(/\s/g, "").length <= 0;
    if (userInputl) {
        show();
        alert("no whitespaces allowed ")

    } else {
        heading.textContent = " Todo List"
        let gettingData = localStorage.getItem("new todo");
        if (gettingData === null) {
            listArray = [];
        } else {
            listArray = JSON.parse(gettingData);
        }
        listArray.push(userInput);
        localStorage.setItem("new todo", JSON.stringify(listArray));
        inputx.value = " ";
        show();

    }
}


addbtn.onclick = () => {

    let userInput = inputx.value;
    nullinput(userInput);


}

function show() {
    let userInput = inputx.value;
    let gettingData = localStorage.getItem("new todo")
    if (gettingData === null) {
        listArray = [];

    } else {
        listArray = JSON.parse(gettingData);

    }
    let newi = " ";

    listArray.forEach((element, index) => {


        newi += `<li> ${index}).  ${element}<span class="icon" onclick=DeleteTask(${index})><i class=" fas fa-trash" ></i></span> </li>`


    });
    test.innerHTML = newi;
    pendingtask.textContent = listArray.length;

}

function DeleteTask(index) {
    let gettingData = localStorage.getItem("new todo");
    listArray = JSON.parse(gettingData);
    listArray.splice(index, 1);
    localStorage.setItem("new todo", JSON.stringify(listArray));
    show();
}


clear.onclick = () => {
    localStorage.clear()
    listArray = [];
    test.innerHTML = null
    pendingtask.textContent = 0;


}