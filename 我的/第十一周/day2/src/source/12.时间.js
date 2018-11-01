import React, { Component } from 'react'
import ReactDOM from 'react-dom'
function Dev (){
    let a = new Date().toLocaleString()
    ReactDOM.render( < div > {a} </ div>, window.root)
}
Dev()
setInterval(Dev,1000)


