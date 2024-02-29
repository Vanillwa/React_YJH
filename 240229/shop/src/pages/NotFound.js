import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    alert('잘못된 경로입니다.')
    navigate('/')
  }, []); 

  return (
    <>
    </>
  );
}

export default NotFound;
