import { Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [StyleDecorator],
}

export default preview
