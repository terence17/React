import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export class count extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    increment() {
        this.setState({
            count : this.state.count + 1
        })
        
    }

    
    render() {
        return (
            <div>   
                <FontAwesomeIcon icon={faShoppingCart}  onClick={() => this.increment()} className="jaden" /> {this.state.count}  
            </div>
        )
    }
}

export default count
