import styles from './style.module.css';

const { container } = styles;

function Card() {
  return (
    <div className={container}>
      <h2 className="subtitle">Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ea ullam
        ut voluptatem fuga omnis. Eius, eos ad quidem dicta facere quaerat
        asperiores dolore atque fuga maiores error porro accusamus? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Nihil sed temporibus,
        praesentium aspernatur non quisquam ad at vitae officia ipsum, impedit,
        totam ullam doloribus vero hic reiciendis. Autem, corporis aliquid!
      </p>
    </div>
  );
}

export default Card;
