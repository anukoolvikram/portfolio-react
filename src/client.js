import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "abvtxwfp",
  dataset: 'production',
  apiVersion: '2024-01-22',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

 

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);