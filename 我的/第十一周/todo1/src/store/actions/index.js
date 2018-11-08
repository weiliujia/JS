import * as Types from '../action-type';
export default {
    add(todo){
        return {type:Types.ADD,todo}
    },
    delete(id){
        return{type:Types.DELETE,id}
    },
    change(id){
        return { type: Types.CHANGE, id }
    },
    changeType(val){
        return { type: Types.CHANGETYPE, val }
    }
}