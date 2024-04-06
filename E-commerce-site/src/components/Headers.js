import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);
const iconStyle = {
    color: 'white', 
    fontSize: '23px',
    margin: '10px 0px 0 -100px',
    border: '1px solid #fff',
    width: '120px',
    padding: '8px',
    textAlign: 'center',
    borderRadius: '8px',
    fontFamily: 'serif',
  };

    return (
        <>
            <Navbar style={{ height: "60px", background: "black" }}>
                <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2">
                    <h3 className='text-light'>Ecommerce</h3>
                    
              </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge icon-bg' data-count={carts.length}>
                            <h1 style={iconStyle}>My Cart</h1>
                        </span>
                    </div>
                    </NavLink>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default Headers