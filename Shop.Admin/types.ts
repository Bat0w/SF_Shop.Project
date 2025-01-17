declare module 'express-session' {
  export interface SessionData {
    username?: string;
  }
}

declare module 'express' {
  interface Response{
    locals: any
  }
}

export interface IProductEditData {
  title: string;
  description: string;
  price: string;
  mainImage: string;
  newImages?: string;
  commentsToRemove: string | string[];
  imagesToRemove: string | string[];
  similarToAdd: string | string[];
  similarToRemove: string | string[];
}
