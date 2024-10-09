import { Image, IPicture } from "../App/App.types";

export interface ImageGalleryProps {
  images: IPicture[];
  onImageClick: (imageData: Image) => void;
}