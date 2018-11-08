import React, { Component } from 'react';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return <div className='container'>
            <div className='row'>
                {/*col*/}
                <div className='col-md-6 col-md-offset-3'>
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <Header />
                        </div>
                        <div className="panel-body">
                            <Body />
                        </div>
                        <div className="panel-footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}