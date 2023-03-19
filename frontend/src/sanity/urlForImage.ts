import { useSanityClient, createImageBuilder } from "astro-sanity";

export const imageBuilder = createImageBuilder(useSanityClient());

export const urlForImage = (source: string) => imageBuilder.image(source);
