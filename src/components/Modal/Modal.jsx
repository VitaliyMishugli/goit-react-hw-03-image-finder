import React from 'react';
import css from '../Modal/Modal.module.css';

export class Modal extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.closeModal();
  }

  render() {
    const { largeImg, closeModal } = this.props;
    return (
      <>
        < div className={`${css.Overlay}`} onClick={closeModal}>
          <div className={`${css.Modal}`}>
            <img src={largeImg} alt="" />
          </div>
        </div>
      </>
    );
  }
}