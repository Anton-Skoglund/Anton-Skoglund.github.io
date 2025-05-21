import Home from './pages/Home.svelte'
import About from './pages/About.svelte'
import NotFound from './pages/NotFound.svelte'


export default {
  '/': Home,
  '/about': About,
  '*': NotFound  // fallback for unknown routes
}