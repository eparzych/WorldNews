import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modal.scss";

Modal.setAppElement('#modal');

export const CustomModal = (props: any) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
    >
      <button onClick={onClose} className="btn--close"><AiOutlineCloseCircle/></button>
      <div className="modal__content">      
        {props.children}
      </div>
    </Modal>
  );
}
