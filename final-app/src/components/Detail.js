import React, { Component } from 'react'
import {items} from '../items'
import '../styles/detail.css'
import { TopNavBar } from '../components/navbar';
import { Footer } from '../components/footer';

export class Detail extends Component {
    state = {
        items : items
    }
    
    render() {
        const {items} = this.state
        console.log(items)
        return (
            <div>
                <TopNavBar />
                <br></br>
                {
                    items.map(idetail => (
                        <div className="main">
                            <div className="rowx">
                                <div className="imgbg">
                                    <img src={idetail.image} width="450px" height="300px" />
                                </div> 
   
                                <div className="info">
                                    <strong><p>{idetail.description}</p></strong>
                                    <h1>{idetail.title}</h1>
                                    <br></br>
                                    <h3>{idetail.metatitle}</h3>
                                    <p id="star">{idetail.rating} Star</p>
                                </div>

                                <div className="specs">
                                  <h1>Recommended Specifications</h1>  
                                    <p><strong>OS:</strong> {idetail.OS}</p>
                                    <p><strong>DirectX:</strong> {idetail.DirectX}</p>
                                    <p><strong>Minimum Supported Video Cards:</strong> {idetail['Minimum Supported Video Cards']}</p>
                                    <p><strong>RAM:</strong> {idetail.RAM}</p>
                                    <p><strong>CPU:</strong> {idetail.CPU}</p>
                                    <p><strong>Hard Drive Space Required:</strong> {idetail['Space-Required']}</p>
                                </div>    
                            </div>
                        </div>

                    ))
                }

                <br></br>

                <Footer />
            </div>
        )
    }
}

export default Detail
