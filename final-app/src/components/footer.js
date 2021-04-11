import React from 'react'
import '../styles/footer.css'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div class="grid footer-container footer-grid-container--fill">
        
                <div className='footer-item-component'>
                    <p><a><strong>Extras</strong></a></p>
                    <p><a>Terms of use</a></p>
                    <p><a>Privacy Policy</a></p>
                    <p><a>Cookie Policy</a></p>
                </div>

                <div className='footer-item-component'>
                    <p><a><strong>Payments</strong></a></p>
                    <p><a>Paypal</a></p>
                    <p><a>Visa, Mastercard</a></p>
                </div>

                <div className='footer-item-component'>
                    <p><a><strong>Contact Us</strong></a></p>
                    <p><a>About us</a></p>
                    <p><a>(+233) 302030302</a></p>
                    <p><a><strong>Socials</strong></a></p>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                </div>
         
            </div>
        )
    }
}

export {Footer}