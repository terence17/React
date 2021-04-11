import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Te digo cuándo, hora, dónde y pasa Que le pagué a la gente de Waze Pa que borren location de mi casa'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler() {
        this.setState({
            message: 'Vendo noviecito cuernudo a la brasa Y si mi plan fracasa, mañana vuelve y pasa'
        })
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye you WANKERS!!!!'
    //     })
    // }    


    render() {
        return (
            <div>
               <div>{this.state.message}</div>
               {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
               {/* <button onClick={() => this.clickHandler()}>Call</button> */}
               <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
