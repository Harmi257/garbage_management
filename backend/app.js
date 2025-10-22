const express = require('express');
const cors = require('cors');
const createApolloServer = require('./src/graphql');
const connectDB = require('./src/infrastructure/config/db.config');

// Import routes
const adminRoutes = require('./src/interface/routes/admin.routes');
const binRoutes = require('./src/interface/routes/bin.routes');
const complaintRoutes = require('./src/interface/routes/complaint.routes');
const driverRoutes = require('./src/interface/routes/driver.routes');
const locationRoutes = require('./src/interface/routes/location.routes');
const userRoutes = require('./src/interface/routes/user.routes');
const workRoutes = require('./src/interface/routes/work.routes');

const startServer = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  connectDB();

  const server = createApolloServer();
  await server.start(); // 👈 IMPORTANT

  server.applyMiddleware({ app, path: '/graphql' });

  // REST API Routes
  app.use('/api', userRoutes);
  app.use('/api', binRoutes);
  app.use('/api', complaintRoutes);
  app.use('/api', driverRoutes);
  app.use('/api', locationRoutes);
  app.use('/api', adminRoutes);
  app.use('/api', workRoutes);

  app.get('/', (req, res) => {
    res.send('Welcome to the Garbage Management System API!');
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🚀 GraphQL endpoint ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
