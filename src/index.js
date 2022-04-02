import { createRoot } from 'react-dom/client'

import Router from './router'

const router = createRoot(document.getElementById('app'))

router.render(Router())
