import Modal from "react-modal";

Modal.setAppElement("#root");
export const ImageModal = ({ isOpened, close, imgData }) => {
  console.log(imgData);
  console.log(isOpened);
  return (
    <Modal isOpen={isOpened} onRequestClose={close}>
      <button onClick={() => close()}>close</button>
      <img src={imgData.urls.regular} />
    </Modal>
  );
};
