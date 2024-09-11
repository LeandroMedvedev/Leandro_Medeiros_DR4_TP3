import Pepsi from '../../assets/images/soft-drinks/pepsi.jpg';
import PepsiOne from '../../assets/images/soft-drinks/pepsi-01.jpg';
import PepsiTwo from '../../assets/images/soft-drinks/pepsi-02.jpg';
import PepsiThree from '../../assets/images/soft-drinks/pepsi-03.jpg';

import styles from './style.module.css';

const { container, containerContent, containerImages, containerMainImage } =
  styles;

function Exercise03() {
  return (
    <div className={container}>
      <section className={containerImages}>
        <img src={PepsiOne} alt='Pepsi and burger' />
        <img src={PepsiTwo} alt='Pepsi and burger' />
        <img src={PepsiThree} alt='Pepsi and burger' />
      </section>
      <main className={containerContent}>
        <h1>Pepsi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quam
          rerum, sint optio dolorem eveniet sit minus eos at quos iusto animi,
          vel voluptate id reprehenderit asperiores pariatur ipsum odio! Iusto
          voluptates suscipit, animi nemo numquam voluptatibus fuga architecto
          aliquid quos, tempore ipsum. Quibusdam ut aliquid et, distinctio vero
          delectus aliquam repellat at, explicabo debitis repellendus illum
          doloribus id? Repe minus repellat voluptas corrupti. Magnam, vitae
          suscipit! Incidunt nulla praesentium vero cupiditate excepturi
          perferendis maxime, obcaecati quod iusto neque dicta aperiam animi
          dolores? Lorem ipsum dolor sit amet consectetur. Sit porro enim
          voluptatibus dicta, voluptas adipisci? Ratione delectus numquam
          tempore!
        </p>
      </main>
      <aside className={containerMainImage}>
        <img src={Pepsi} alt='Can of Pepsi' />
      </aside>
    </div>
  );
}

export default Exercise03;
