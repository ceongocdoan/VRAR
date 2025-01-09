import axios from "axios";

interface GraphQLResponse<T> {
  data: T;
  errors?: any[];
}

interface GraphQLQuery {
  query: string;
  variables?: Record<string, any>;
}

export async function fetchGraphQLData<T>(
  graphqlQuery: GraphQLQuery,
): Promise<GraphQLResponse<T>> {
  try {
    const res = await axios.post(
      `${process.env.GATSBY_API_URL}/graphql`,
      graphqlQuery,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`
        },
      }
    );

    return { data: res.data.data };
  } catch (error) {
    return { data: {} as T, errors: [error] };
  }
}
