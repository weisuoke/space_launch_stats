const express = require("express");
const cors = require("cors");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
