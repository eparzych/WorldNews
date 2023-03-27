import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modal.scss";

Modal.setAppElement('#modal');

interface IProps {
  isOpen: boolean;
  onClose: any;
  children: any;
}

export const CustomModal = (props: IProps) => {
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
