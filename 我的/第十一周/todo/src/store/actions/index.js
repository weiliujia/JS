import * as Types from '../action-types'
export default {
    add(todo) {
        return { type: Types.ADD, todo }
    },
    delete(id){
        return {type:Types.DELETE,id}
    },
    change(id){
        return { type: Types.CHANGE, id }
    },
    changeType(val){
        return{type:Types.CHANGE_TYPE,val}
    }
}