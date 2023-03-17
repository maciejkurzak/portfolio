import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'n591yq65',
    dataset: 'production',
    apiVersion: '2023-03-15',
    useCdn: true,
  }), react()],
  site: 'https://maciejkurzak.xyz',
  // output: 'server',
  adapter: netlify(),
});
