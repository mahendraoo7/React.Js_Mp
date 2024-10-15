import React, { useMemo } from 'react';


function Calculation({ num }) {

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  return( 
  
  <div>Factorial: {factorial}</div>

);
}

export default Calculation