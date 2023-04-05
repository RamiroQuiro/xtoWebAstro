import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";
import react from "@astrojs/react";

export default defineConfig({
  // ...
  integrations: [image(), tailwind(),react()],
  // integrations: [image()],
});