import { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

interface BugButtonProps {
	className?: string
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
	const [error, setError] = useState(false)

	const onThrow = () => setError(true)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])
	// eslint-disable-next-line
	return <Button onClick={onThrow}>throw error</Button>
}
