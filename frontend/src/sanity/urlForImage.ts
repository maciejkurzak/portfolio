import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export const urlForImage = (source: string) => {
  return imageBuilder.image(source);
}