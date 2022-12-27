import { RESTDataSource } from '@apollo/datasource-rest';

type Author = {
  id: string;
  name: string;
  photo: string;
};

type Track = {
  id: string;
  title: string;
  author: Author;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

class TrackAPI extends RESTDataSource {
  override baseURL?: string =
    'https://odyssey-lift-off-rest-api.herokuapp.com/';

  async getTracksForHome(): Promise<Track[]> {
    return this.get('tracks');
  }

  async getAuthor(authorId): Promise<Author> {
    return this.get(`author/${authorId}`);
  }

  async getTrack(trackId): Promise<Track> {
    return this.get(`track/${trackId}`);
  }
}

export default TrackAPI;
