const { ApolloServer } = require('apollo-server-express');
const adminTypeDefs = require('./typeDefs/admin.typeDefs');
const binTypeDefs = require('./typeDefs/bin.typeDefs');
const complaintTypeDefs = require('./typeDefs/complaint.typeDefs');
const driverTypeDefs = require('./typeDefs/driver.typeDefs');
const locationTypeDefs = require('./typeDefs/location.typeDefs');

const adminResolvers = require('./resolvers/admin.resolvers');
const binResolvers = require('./resolvers/bin.resolvers');
const complaintResolvers = require('./resolvers/complaint.resolvers');
const driverResolvers = require('./resolvers/driver.resolvers');
const locationResolvers = require('./resolvers/location.resolvers');

const userTypeDefs = require('./typeDefs/user.typeDefs');
const userResolvers = require('./resolvers/user.resolvers');
const workTypeDefs = require('./typeDefs/work.typeDefs');
const workResolvers = require('./resolvers/work.resolvers');


// Helper function to merge resolvers
const mergeResolvers = (...resolversArray) => {
  return resolversArray.reduce((acc, cur) => {
    for (let type in cur) {
      acc[type] = { ...(acc[type] || {}), ...cur[type] };
    }
    return acc;
  }, {});
};

const createApolloServer = () => {
  return new ApolloServer({
    typeDefs: [
      adminTypeDefs,
      binTypeDefs,
      complaintTypeDefs,
      driverTypeDefs,
      locationTypeDefs,
      userTypeDefs,
      workTypeDefs
    ],
    resolvers: mergeResolvers(
      adminResolvers,
      binResolvers,
      complaintResolvers,
      driverResolvers,
      locationResolvers,
      userResolvers,
      workResolvers
    ),
  });
};

module.exports = createApolloServer;
