import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const BookPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            navigate("/");  
        }  
    },[])
    return (
        <div>
            암어 북
        </div>
    );
};

export default BookPage;