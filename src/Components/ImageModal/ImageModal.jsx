import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
export const ImageModal = ({ isOpened, close, imgData }) => {
  console.log(imgData);
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
      <img
        className={css.mainImg}
        src={imgData.urls.regular || imgData.urls.small} // при відсутності regular буде завжди рендеритись small, так як по цьому зображенню і відбувається перехід
        alt={imgData.alt_description || "Default image description"}
      />
    </Modal>
  );
};
