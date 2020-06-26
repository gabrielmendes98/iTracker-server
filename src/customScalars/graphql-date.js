const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
  },
  parseLiteral(ast) {
    const date = ast.kind === Kind.STRING ? new Date(ast.value) : undefined;
    return Number.isNaN(date.getTime()) ? undefined : date;
  },
});

module.exports = { GraphQLDate };
