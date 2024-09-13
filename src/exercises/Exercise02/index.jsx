import Pepsi from '../../assets/images/soft-drinks/pepsi.jpg';
import PepsiOne from '../../assets/images/soft-drinks/pepsi-01.jpg';
import PepsiTwo from '../../assets/images/soft-drinks/pepsi-02.jpg';
import PepsiThree from '../../assets/images/soft-drinks/pepsi-03.jpg';

function Exercise02() {
  return (
    <div
      style={{
        width: '70%',
        height: '95vh',
        margin: '15px auto 0px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 3fr',
        gap: '35px',
      }}
    >
      <section
        style={{
          gridColumn: '1 / 3',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          style={{ width: '160px', height: '160px' }}
          src={PepsiOne}
          alt="Pepsi and burger"
        />
        <img
          style={{ width: '160px', height: '160px' }}
          src={PepsiTwo}
          alt="Pepsi and burger"
        />
        <img
          style={{ width: '160px', height: '160px' }}
          src={PepsiThree}
          alt="Pepsi and burger"
        />
      </section>
      <main
        style={{
          gridColumn: '1 / 2',
          display: 'grid',
          alignSelf: 'start',
          justifyItems: 'start',
        }}
      >
        <h1>Pepsi</h1>
        <p style={{ overflowY: 'auto' }}>
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
      <aside
        style={{
          gridColumn: '2 / 3',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'flex-start',
        }}
      >
        <img
          style={{ width: '95%', height: '65vh' }}
          src={Pepsi}
          alt="Can of Pepsi"
        />
      </aside>
    </div>
  );
}

export default Exercise02;
