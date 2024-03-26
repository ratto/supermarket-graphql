import * as product from './product/productSchema.ts';

const rootTypeDefs = `#graphql
  type Query {
    Marco: String!
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const rootResolvers = {
  Query: {
    Marco: () => 'Polo',
  },
};

const typeDefs = [rootTypeDefs, product.typeDefs];
const resolvers = [rootResolvers, product.resolvers];

export { typeDefs, resolvers };
