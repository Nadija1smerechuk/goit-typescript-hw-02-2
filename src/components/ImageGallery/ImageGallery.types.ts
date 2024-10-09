import { Image, IPicture } from "../components/App/App.types";

export interface ImageGalleryProps {
  images: IPicture[];
  onImageClick: (imageData: Image) => void;
}