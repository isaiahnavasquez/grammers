export class Album {
  userId: number;
  id: number
  title: string;
}

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export class Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
