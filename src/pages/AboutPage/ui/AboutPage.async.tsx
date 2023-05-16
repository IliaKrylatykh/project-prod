import { lazy } from 'react'

export const AboutPageAsync = lazy(
	() => new Promise((resolve) => {
		// @ts-ignore
		// Для имитации загрузки ...
		setTimeout(() => resolve(import('./AboutPage')), 1500)
	}),
)
