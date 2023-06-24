let form = document.querySelector("[data-form]");
let lists = document.querySelector("[data-lists]");
let input = document.querySelector("[data-input]");

let arr= [];


form.addEventListener("submit", (e) => {
        e.preventDefault();
   

    let id = Math.floor(Math.random() * 10);
    const todo = new Todo(id,input.value);
    arr=[...arr,todo];
    Show.displayData();
    Show.clearInput();
    Show.deleteTodo();

    if (input.length() = "" ){
            alert("Your Todo is empty");
        }
});

class Todo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}

class Show{
    static displayData(){
        
        let displayData =arr.map((item) => {
            return`
                <div id="todo">
                    <p style="width: 50%;">${item.todo}</p>
                    <div class="pora">
                        <span><i class="fa fa-edit"></i></span>
                        <span id="del" data-id><i class="fa fa-trash"></i></span>
                    </div>
                </div>
            `
        });
        lists.innerHTML = (displayData).join(" ");
    }
    static clearInput(){
        input.value= '';
    }
    static deleteTodo(){
        lists.addEventListener("click", (e) => {
            if(e.target.classList.contains("fa-trash")) {

    ////............method 1 to target a parentElement 
                e.target.parentElement.parentElement.parentElement.remove()
            }

            let btnId = e.target.dataset.id;
            Show.removeTodo(btnId);
        });
    // method 2 to target a parentElement
        // const todo = document.getElementById("del");
        // todo.parentElement.parentElement.parentElement.remove();

    }

    static removeTodo(id){
        arr = arr.filter((item) => item.id)
    }
}

