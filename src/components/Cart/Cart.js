import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';


const Cart = () => {
    const { products } = useContext(CartContext);
    return products && products.length > 0 ? (
        <div style={{padding: '20px', display: 'flex', justifyContent: 'center'}}>
            <table width="70%">
                <thead>
                    <tr>
                        <td style={{borderBottom: 'solid 1px #fff'}}>Title</td>
                        <td style={{borderBottom: 'solid 1px #fff'}}>Image</td>
                        <td style={{borderBottom: 'solid 1px #fff'}}>Price</td>
                    </tr>
                </thead>
                <tbody>
                { products ? products.map((el) => (
                    <tr key={Math.random() * el.id}>
                        <td style={{borderBottom: 'solid 1px #fff'}}>{el.title}</td>
                        <td style={{borderBottom: 'solid 1px #fff'}}><img src={el.image} width="200" alt={el.title} /></td>
                        <td style={{borderBottom: 'solid 1px #fff'}}>{el.price}</td>
                    </tr>
                )) : null }
                </tbody>
            </table>
        </div>
    ) : (
        <div>The cart is empty !</div>
    ) 
}


export default Cart;