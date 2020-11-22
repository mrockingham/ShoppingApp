const server = require('./backend/api/server.js');

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`\n=== Server Running In ${process.env.NODE_ENV} listening on port ${PORT} ===\n`);
});
