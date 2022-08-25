const todos = [
    {
        text: 'Fare i compiti',
        done: false
    },
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Buttare i pattumi',
        done: true,
    },
    {
        text: 'Fare la doccia',
        done: false,
    },    
]

const app = new Vue ({
    el: '#app',
    data: {
        todos: todos,
        newTodo: '',
    },
    methods: {
        toggleDoneOf(todo) {
            console.log(todo)
            todo.done = !todo.done
            //oppure
        //     if (todo.done) {
        //         todo.done = false
        //     } else {
        //         todo.done = true
        //     }
        // }
            //oppure ancora
        // todo.done = todo.done === true ? false : true
        },
        addToDo() {
            console.log('aggiungi Task')
            console.log(this, 'questo è this')
            // prima di fare qualsiasi cosa facciamo il controllo sulla stringa scritta
            this.newTodo = this.newTodo.trim()

            // il controlle if sotto potremmo scriverlo così. (Stringa vuota viene interpretata 
            // come false quindi questo if sotto darà true e ritornerà indietro)
            if (!this.newTodo) return

            this.todos.push({
                text: this.newTodo,
                done: false,
            })
            this.newTodo = '';
            // if (this.newTodo != '') {
            //     this.todos.push({
            //         text: this.newTodo,
            //         done: false,
            //     })
            //     this.newTodo = '';
            // }
        },
    },
})

// const task = [
//     done ? 'done' : '',
//     'todo',
//     'altra-classe',
// ]
