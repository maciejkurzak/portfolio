import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity(
    {
      projectId: "n591yq65",
      dataset: "production",
      apiVersion: "2023-03-15",
      useCdn: true,
    }
  )],
});