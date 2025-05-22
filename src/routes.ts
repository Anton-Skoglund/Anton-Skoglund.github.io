import Home from './pages/Home.svelte'
import About from './pages/About.svelte'
import NotFound from './pages/NotFound.svelte'
import NoContent from './pages/NoContent.svelte'


export default {
  '/': Home,
  '/about': About,
  '*': NotFound  // fallback for unknown routes
}