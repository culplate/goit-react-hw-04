import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ data }) => {
  return (
    <ul className={css.gallery}>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard imgData={item} />
          </li>
        );
      })}
    </ul>
  );
};
