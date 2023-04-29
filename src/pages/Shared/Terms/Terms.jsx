import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem in harum at modi ut reiciendis est sunt. Doloremque adipisci sequi, eos temporibus dolor quos quo quas dolore ullam reiciendis? </p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;