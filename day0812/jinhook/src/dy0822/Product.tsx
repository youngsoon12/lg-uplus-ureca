import React from 'react';
import test from './test';
import { useState } from 'react';

const Product = () => {
    console.log(test());
    const [a, setA] = useState(test());
    return (
        <div>
            프로덕
{a}
        </div>
    );
};

export default Product;