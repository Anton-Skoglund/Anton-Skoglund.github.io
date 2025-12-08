// src/routes/projectRoutes.js

import Smartpunkt from '@pages/Projects/Smartpunkt.svelte';
import Simple from '@pages/Projects/Simple.svelte';
import Clingy from '@pages/Projects/Clingy.svelte';
import ChaboStats from '@pages/Projects/ChaboStats.svelte';
import QuickLearn from '@pages/Projects/QuickLearn.svelte';

export const projectRoutes = {
  '/projects/smartpunkt': Smartpunkt,
  '/projects/simple': Simple,
  '/projects/clingy': Clingy,
  '/projects/chabostats': ChaboStats,
  '/projects/quicklearn': QuickLearn
};
