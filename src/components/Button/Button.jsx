import css from '../Button/Button.module.css';


export const Button = ({ pageIncrement }) => {
  return (
    // <button type='button' className={css.Button} onClick={() => pageIncrement()}>Load more</button>
    <button type="button" className={css.Button} onClick={pageIncrement}>Load more</button>
  )
}