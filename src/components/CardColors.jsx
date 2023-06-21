import styles from './CardColors.module.scss';

const CardColors = ({ product }) => {
  
  const colors = product.color;
  console.log(colors)

  return (
    <div className={styles.colors}>
      {colors.map((color, index) => (
      <div className={styles.color} style={{backgroundColor: color}}></div>
    ))}
    </div> 
  );
};

export default CardColors;
