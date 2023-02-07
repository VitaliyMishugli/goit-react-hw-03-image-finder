import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loading_wraper}>
      <Circles
        height="80"
        width="80"
        color="rgba(10, 7, 163, 0.781)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>

  )
}
