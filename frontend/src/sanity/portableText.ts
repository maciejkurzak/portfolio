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
            class="responsive__img portable-text-img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
    `,
  },
  marks: {
    link: ({children, value, ...rest}) => {
      const href = value.href || ''
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="portable-text-link">${children}</a>`
    },
  },
};

export default function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
