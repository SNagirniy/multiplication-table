import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import sprite from '../../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={s.modal_backdrop}>
      <div className={s.modal_content_border}>
        <div className={s.modal_content}>
          {' '}
          <button onClick={onClose} className={s.modal_btn}>
            <svg className={s.hide_modal_btn_icon}>
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
