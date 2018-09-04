/**
 * this is an action creator
 * @param {*} todo 
 */
export const addTodo = function (todo) {
    /**
     * Create the action object
     * this is the action
     */
    const action = {
        type: 'ADD_TODO',
        todo,
    }
    return action
}