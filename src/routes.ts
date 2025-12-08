import Home from './pages/Home.svelte'
import NotFound from './pages/NotFound.svelte'
import NoContent from './pages/NoContent.svelte'
import Projects from './pages/Projects.svelte'
import Smartpunkt from './pages/Projects/Smartpunkt.svelte'
import Simple from './pages/Projects/Simple.svelte'
import Clingy from './pages/Projects/Clingy.svelte'
import QuickLearn from './pages/Projects/QuickLearn.svelte'
import ChaboStats from './pages/Projects/ChaboStats.svelte'



export default {
  '/': Home,
  '/projects': Projects,
  '/smartpunkt': Smartpunkt,
  '/simple': Simple,
  '/clingy': Clingy,
  '/chabostats': ChaboStats,
  '/quicklearn': QuickLearn,
  '*': NotFound  // fallback for unknown routes
}