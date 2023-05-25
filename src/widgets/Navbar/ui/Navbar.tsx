import { t } from 'i18next'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev!)
	}, [])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				dddddsdsdddddddddddddddddddd dddddddddddddddddddd sssssssss ddds
				ssssssssssssssssssss dddddsdsdddddddddddddddddddd dddddddddddddddddddd
				sssssssss ddds ssssssssssssssssssss dddddsdsdddddddddddddddddddd
				dddddddddddddddddddd sssssssss ddds ssssssssssssssssssss
			</Modal>
		</div>
	)
}
