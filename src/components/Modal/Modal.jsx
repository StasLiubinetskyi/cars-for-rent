import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { CloseButton, CloseSvg, ModalCard, Overlay } from './Modal.styled';
import iconClose from '../../data/svg/close.svg';

const modalRoot = document.querySelector('#modal-root');

if (!modalRoot) {
    throw new Error("Modal root element not found in the DOM. Make sure to create an element with id 'modal-root'.");
}

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <>
            <Overlay onClick={handleBackdropClick}>
                <ModalCard>
                    <CloseButton type="button" onClick={onClose}>
                        <CloseSvg width="24" height="24">
                            <use href={iconClose + '#close'}></use>
                        </CloseSvg>
                    </CloseButton>
                    {children}
                </ModalCard>
            </Overlay>
        </>,
        modalRoot
    );
};

export default Modal;
