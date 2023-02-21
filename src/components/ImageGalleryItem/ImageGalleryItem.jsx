import React  from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

// export const ImageGalleryItem = ({image}) => {
//   return (
//     <li className={css.ImageGalleryItem}>
//       <img className={css.ImageGalleryItem_image} src={image} alt="" />
//     </li>
//   )
// }  

export class ImageGalleryItem extends React.Component{
  state = {
    isModalOpen: false
  }

  onToggleModal = () => {
    this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
  }


  render() {
    const { image, largeImg } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img onClick={this.onToggleModal} className={css.ImageGalleryItem_image} src={image} alt="" />
        </li>
        {isModalOpen && <Modal largeImg={largeImg} closeModal={this.onToggleModal} />}
      </>
    
      

  )
  }
}