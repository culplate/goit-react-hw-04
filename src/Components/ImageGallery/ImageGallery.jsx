import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ data }) => {
  return (
    <div className={css.gallery}>
      {data.map((item) => {
        return <ImageCard key={item.id} imgData={item} />;
      })}
    </div>
  );
};
