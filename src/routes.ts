import Home from './pages/Home.svelte'
import CV from './pages/CV.svelte'
import NotFound from './pages/NotFound.svelte'
import NoContent from './pages/NoContent.svelte'
import Boids from './pages/Boids.svelte'



export default {
  '/': Home,
  '/cv': CV,
  '/boids': Boids,
  '*': NotFound  // fallback for unknown routes
}