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

type Module = {
  id: string;
  title: string;
  length: number;
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

  async getTrackModules(trackId): Promise<Module[]> {
    return this.get(`track/${trackId}/modules`);
  }

  async incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}

export default TrackAPI;
