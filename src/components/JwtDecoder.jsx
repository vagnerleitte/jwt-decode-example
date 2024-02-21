import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

const JWTDecoder = ({ token }) => {
  const [decodedToken, setDecodedToken] = useState(null);
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt.decode(token);
        setDecodedToken(decoded);
        console.log(decoded)
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    }
  }, [token]);

  if (!decodedToken) {
    return <div>No JWT provided</div>;
  }

  return (
    <div>
      <ul>
        {Object.keys(decodedToken).map((key, index) => (
          <li key={index}>
            <strong>{key}:</strong> {decodedToken[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JWTDecoder;
