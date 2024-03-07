export interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

export interface IPostResponse {
  posts: IPost[];
  page: number;
  totalPages: number;
}
