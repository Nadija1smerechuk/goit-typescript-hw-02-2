export type Image = Pick<
  IPicture,
  "alt_description" | "description" | "likes"
> &
  Pick<ISize, "regular"> &
  Pick<IUsername, "instagram_username" | "name">;

  interface ISize {
  regular: string;
  small: string;
}
  
interface IUsername {
  instagram_username: string;
  name: string;
}
  
export interface IPicture {
  id: string;
  urls: ISize;
  alt_description: string;
  description: string;
  likes: number;
  user: IUsername;
}
  