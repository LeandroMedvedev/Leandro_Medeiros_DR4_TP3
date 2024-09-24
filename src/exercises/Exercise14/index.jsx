import ProfileCard from './components/ProfileCard';
import style from './style.module.css';

function Exercise14() {
  return (
    <div className={style.container}>
      <h1>Perfil do Usuário</h1>
      {/* <ProfileCard name="Kate Austen" age={33} /> */}
      <ProfileCard name="Kate Austen" />
    </div>
  );
}

export default Exercise14;
