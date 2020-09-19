import React from 'react'
import { useStateValue } from '../../State/StateProvider'
import Subtotal from '../Subtotal/Subtotal'
import './Cart.style.css'

const Cart = () => {

    const [{Courses},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad' src='data:image/jpeg;base64,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' alt='banner'/>

                <div>
                    <h2 className="checkout_title">Your Course Bucket</h2>
                </div>
                
            </div>

            <div className="checkout_right">
                <Subtotal value={Courses}/>
            </div>
        </div>
    )
}

export default Cart