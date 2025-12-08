import Home from './pages/Home.svelte'
import CV from './pages/CV.svelte'
import NotFound from './pages/NotFound.svelte'
import NoContent from './pages/NoContent.svelte'
import Projects from './pages/Projects.svelte'



export default {
  '/': Home,
  '/cv': CV,
  '/projects': Projects,
  '*': NotFound  // fallback for unknown routes
}