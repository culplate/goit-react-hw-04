import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
export const ImageModal = ({ isOpened, close, imgData }) => {
  return (
    <Modal
      isOpen={isOpened}
      onRequestClose={close}
      style={{
        overlay: { zIndex: 11 },
      }}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={() => close()}>
        close
      </button>
      <img className={css.mainImg} src={imgData.urls.regular} />
    </Modal>
  );
};
