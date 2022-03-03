import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: "2d9mifkl",
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: false,
  token: "skuhYZTHVhP6yp0MDYUyh8rTgv3scMPRVcvG0asRqTAB9AkDq0tNsGOnXxsaCcuYzSMMuqcKRk4m0yz8DHdNYVDt8pjp7QmeJCGid9QtBwvvXZkXGE3xrE2TfvJXPPLhFkJx1GJDmydlbNdqSs8oI9ZQogs1NmcC9NHJvOtxsQi7sTLC3Uf6",
});
