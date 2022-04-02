import _ from 'lodash'
import dayjs from 'dayjs'
import { createRoot } from 'react-dom/client'

import faker from '@faker-js/faker'

import Router from './router'

window._ = _
window.dayjs = dayjs

window.faker = faker

if (import.meta.hot) {
  import.meta.hot.accept()
}

const router = createRoot(document.getElementById('app'))

router.render(Router())

