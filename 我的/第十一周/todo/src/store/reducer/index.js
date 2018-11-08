import * as Types from '../action-types';
import { combineReducers } from 'redux'
let initState = {
    type: 'all',
    todos: [{ id: 1, isSelected: true, title: '今天冬至兰' },
    { id: 2, isSelected: false, title: '哇冬至兰' }]
}
function todo(state = initState, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, todos: [...state.todos, { id: state.todos.length + 1, isSelected: false, title: action.todo }] };
        case Types.DELETE:
            return { ...state, todos: state.todos.filter(item => item.id !== action.id) };
        case Types.CHANGE:
            let newTodo = state.todos.map(item => {
                if (item.id === action.id) {
                    item.isSelected = !item.isSelected
                }
                return item;
            })
            return { ...state, newTodo }
        case Types.CHANGE_TYPE:
        return {...state,type:action.val}
    }
    return state
}
let reducer = combineReducers({
    todo
})
export default reducer;