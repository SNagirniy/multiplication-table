import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import eight from '../images/8.png';
import nine from '../images/9.png';
import zero from '../images/0.png';

import { useEffect, useState } from 'react';

const cartoonDigits = {
  1: {
    digit: one,
    alt: 'digit one',
  },
  2: {
    digit: two,
    alt: 'digit two',
  },
  3: {
    digit: three,
    alt: 'digit three',
  },
  4: {
    digit: four,
    alt: 'digit four',
  },
  5: {
    digit: five,
    alt: 'digit five',
  },
  6: {
    digit: six,
    alt: 'digit six',
  },
  7: {
    digit: seven,
    alt: 'digit seven',
  },
  8: {
    digit: eight,
    alt: 'digit eight',
  },
  9: {
    digit: nine,
    alt: 'digit nine',
  },
  0: {
    digit: zero,
    alt: 'digit zero',
  },
};

const useCartoonDigits = num => {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    const numString = num.toString();
    const numArr = [...numString].map(i => {
      return cartoonDigits[i];
    });

    setDigits(numArr);
  }, [num]);

  return digits;
};

export default useCartoonDigits;
