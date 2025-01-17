import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      width: '80px',
      backgroundColor: '#4CAF50',
      borderRadius: '100%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
      }}>
        Redux
      </h1>
    </div>
  );
};

export default Logo;