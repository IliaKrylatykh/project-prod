import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Button, ThemeButton } from './Button'

const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Text',
	},
}

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR,
	},
}

export const Outlined: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE,
	},
}
