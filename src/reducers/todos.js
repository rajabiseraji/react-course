/**
 * Here's the reducer's code
 * a function that takes action and does something to the store
 */
const defaultState = {
    todos: Object.assign([])
}

export const todos = function(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action.todo)
            let newState =  state;
            newState.todos.push(action.todo);
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

