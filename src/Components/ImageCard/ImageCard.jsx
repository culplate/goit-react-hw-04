import css from "./ImageCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImageCard = ({ imgData }) => {
  return (
    <div className={css.wrapper}>
      <LazyLoadImage
        className={css.galleryImg}
        alt={imgData.alt_description}
        src={imgData.urls.small}
      />
    </div>
  );
};
