import styles from './CardColors.module.scss';

const CardColors = ({ product, className }) => {
  const colors = product.color;

  return (
    <div className={`${styles.colors} ${className}`}>
      {colors.map((color, index) => (
        <div key={index} className={styles.color} style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
};

export default CardColors;
