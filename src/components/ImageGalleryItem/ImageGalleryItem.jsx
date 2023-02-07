import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image}) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItem_image} src={image} alt="" />
    </li>
  )
}  