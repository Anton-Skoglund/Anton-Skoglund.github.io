// src/routes/index.js

import Home from '@pages/Home.svelte';
import NotFound from '@pages/NotFound.svelte';
import Projects from '@pages/Projects.svelte';

import { projectRoutes } from './projects';

export default {
  '/': Home,
  '/projects': Projects,

  // Spread in all project-specific routes
  ...projectRoutes,

  '*': NotFound
};
