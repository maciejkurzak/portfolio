// /my-blog/frontend/src/sanity/portableText.js

import { portableTextToHtml } from "astro-sanity";
import { urlForImage } from "./urlForImage";

const customComponents = {
  types: {
    image: ({ value }) => `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `,
  },
};

export default function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
