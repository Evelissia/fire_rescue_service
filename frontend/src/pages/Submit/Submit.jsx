import Button from '../../components/Button.jsx';
import styles from './Submit.module.scss';

const Submit = () => {
  return (
    <>
      <div className="wrapper">
        <div className="content_body">
          <form action="" className="form">
            <h1 className="form_title">Контакты</h1>

            <div className="form__group">
              <div className={styles.officeInfo}>
                <h2>Наш офис</h2>
                <h3>Омск</h3>
                <p>Улица Хорошая 1, корп.4, 5 этаж, офис 1</p>
              </div>
            </div>

            <div className="form__group">
              <div label="+7 800 555 35 35"> +7 800 555 35 35</div>
              <div className={styles.email}>example@example.com</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Submit;
