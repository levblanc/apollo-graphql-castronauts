const resolvers = {
  Query: {
    tracksForHome: async (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: async (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (error) {
        // error returned from RESTDataSource class has specific fields for error info
        const { status, body } = error.extensions.response;

        return {
          code: status,
          success: false,
          message: body,
          track: null,
        };
      }
    },
  },

  Track: {
    author: async (parent, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: async ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

export default resolvers;
