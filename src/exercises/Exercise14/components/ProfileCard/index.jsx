import styles from './style.module.css';

function ProfileCard({ name, age }) {
  return (
    <div className={styles.container}>
      <p>Nome: {name}</p>
      <p>
        Idade:{' '}
        {age ? (
          age
        ) : (
          <>
            não disponível
            <span role="img" aria-label="idosa">
              👵
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default ProfileCard;
