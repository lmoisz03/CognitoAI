import { useEffect, useState } from 'preact/hooks'

export default function ThemeToggle() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

	const handleClick = () => {
		console.log('NO')
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<button
			class='rounded-lg hover:bg-gray-100 p-2 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-100 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
			aria-label='theme'
			onClick={handleClick}
			type={'button'}
		>
			{/* eslint-disable-next-line multiline-ternary */}
			{theme === 'light' ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='icon icon-tabler icon-tabler-moon-2'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					stroke-width='2'
					stroke='currentColor'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
					<path d='M16.418 4.157a8 8 0 0 0 0 15.686'></path>
					<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					class='h-6 w-6 dark:text-gray-300 text-gray-700 pointer-events-none'
				>
					<path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0'></path>
					<path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'></path>
				</svg>
			)}
			<span class='sr-only'>Theme switch</span>
		</button>
	)
}
