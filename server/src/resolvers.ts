const resolvers = {
  Query: {
    tracksForHome: async (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: async (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Track: {
    author: async ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
