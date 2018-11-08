import React, { Component} from 'react';

export default class SliderArrow extends Component {
    constructor() {
        super();
    }
    render() {
        return <div className='arrow' > 
            < span onClick={() => { this.props.turn(-1) }}>  &lt; </span>
            < span className = 'right' onClick={()=>{this.props.turn(1)}}> &gt; </span>
        </div>
    }
}
