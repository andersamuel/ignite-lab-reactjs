import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o2vrn90a5q01xidxo242zh/master?operationName=MyQuery&query=query%20MyQuery%20%7B%0A%20%20lessons%20%7B%0A%20%20%20%20id%0A%20%20%20%20slug%0A%20%20%20%20title%0A%20%20%20%20teacher%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20bio%0A%20%20%20%20%20%20avatarURL%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",
  cache: new InMemoryCache(),
});
