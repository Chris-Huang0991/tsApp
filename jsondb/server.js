const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
var cors = require('cors')

const app = express();

app.use(cors())
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(3001, () => {
  console.log('Listening');
});
