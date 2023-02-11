import * as basicLightbox from 'basiclightbox';
import css from '../Modal/Modal.module.css';

const instance = basicLightbox.create(`  
  < div class=${css.Overlay} >
    <div class=${css.Modal}>
    <img src="" alt="" />
  </div>    
`);

export const Modal = ({ result }) => {
  return instance;
}

// < div class="overlay" >
//   <div class="modal">
//     <img src="" alt="" />
//   </div>


instance.show();