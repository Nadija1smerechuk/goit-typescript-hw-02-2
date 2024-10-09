import { Image } from "../App/App.types";

export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageData: Image | null;
}