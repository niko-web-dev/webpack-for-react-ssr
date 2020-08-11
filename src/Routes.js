import Home from './pages/Home'
import About from './pages/About'
import NoteFound from './pages/NoteFound'
import App from './App'

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      },
      {
        component: About,
        path: '/about',
      },
      {
        component: NoteFound,
      },
    ]
  }
]