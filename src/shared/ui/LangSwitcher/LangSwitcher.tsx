import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string
	short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{t(short ? 'Короткий язык' : 'Язык')}
		</Button>
	)
}
