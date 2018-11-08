function createStore(reducer){
    //1.state 2.getState 3.subscribe 4.dispatch\
    let state;
    //获取动态的方法
    let getState = ()=>JSON.parse(JSON.stringify(state))
    //订阅的函数
    let listeners = [];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item) => item !== fn)
        }
    }
    function dispatch(action){
        state = reducer(state,action);
        //发布订阅好的方法
        listeners.forEach((item)=>{item()})
    }
    dispatch({});
    return{
        getState,
        subscribe,
        dispatch,
    }
}
export default createStore