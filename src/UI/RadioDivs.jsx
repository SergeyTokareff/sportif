import { useState } from 'react';

import styles from './RadioDivs.module.scss';

const RadioDivs = ({ product, opt, className }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = product[opt];

  const changeOptionHandler = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={`${styles.radioDivs}`}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`${styles.radioDiv} ${
            selectedOption === option ? styles.active : ''
          } ${className}`}
          onClick={() => changeOptionHandler(option)}
          style={{backgroundColor: opt === 'color' ? option :''} }
        >
          {opt === 'size' && option}
        </div>
      ))}
    </div>
  );
};

export default RadioDivs;
