import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o2vrn90a5q01xidxo242zh/master",
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwNzA5NjEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG8ydnJuOTBhNXEwMXhpZHhvMjQyemgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmRjZTdiZDEtMzBhZi00Yjk4LWE3MzItMTMxNzQyNWIzMWEyIiwianRpIjoiY2w0c2R3M3NmMXplODAxejE1Z2JoZzV1dyJ9.jo-wrrQvCAtIcBO1lSQjcyJL1I1nRXeIdtq5we9UoL8AagFOSttVK9GL-G67nryrbNoFr4abyrXRgLFEokFc7nEdx1dF960cdQiAQZoh6Yp1VA7BpMygZT-OYIgdCs-A4RR0t7yaIjYyI77sLXR7_bZGrr8nm32GhtuWFd2qzOQooKo29WNxfixPh_g_ihS1pV_77wvyII2didN6bvTwLJjbTg7fqHsnLWwsiIGXVmBSkjTjP3uOE1djKF9WBhgtJENFdnBeTN9YKi_nM2s8NdZxy2vkrG9rznLmmCBWzG1VdLD-Lb9EMEQCsj-k6J_459IBoc4af-32EtpQw54PpoPEpcyYbauvPa2DHYU7sgxpxLTJTII5BUikpEwgKAh8l0AhX5ru5oxvBls-J2mXfJBeihYrwLdHO-vpNhPXRJ3Ph82SVEqLNP0AIatby0sLynTV67L_5D22L9XdLtkqmbiKur9cjy95SvR0871Lc3MUEa-AIoLwA4G4v07dyJTTl0pUeoARAWozToJwlbkbBKZyWkheiSHGPYMpzBYpARw8chu26P9HyjY4ErAhY-u88p-eoCpT7cofCQn6oVzC-BXJD9J5cS4QTdcPgZOtVJXOV-RfZcst3RilgdUWifye9wwxqUu4hYcQDBPLhBZYW2EIY8UN0wggKvv_2QrOcHQ`,
  },
  cache: new InMemoryCache(),
});

// import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: import.meta.env.VITE_API_URL,
//   headers: {
//     'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
//   },
//   cache: new InMemoryCache(),
// });
