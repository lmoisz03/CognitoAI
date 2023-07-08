import { useState } from 'preact/hooks'
import ThemeToggle from '../ThemeToggle'

const renderIcon = ({ name, className }: { name: string; className: string }) => {
	if (name === 'twitter') {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke='currentColor'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
				className={className}
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z'></path>
			</svg>
		)
	}
	if (name === 'cup') {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke='currentColor'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
				className={className}
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M5 11h14v-3h-14z'></path>
				<path d='M17.5 11l-1.5 10h-8l-1.5 -10'></path>
				<path d='M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1'></path>
				<path d='M15 5v-2'></path>
			</svg>
		)
	}
	if (name === 'web') {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke='currentColor'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
				className={className}
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
				<path d='M3.6 9h16.8'></path>
				<path d='M3.6 15h16.8'></path>
				<path d='M11.5 3a17 17 0 0 0 0 18'></path>
				<path d='M12.5 3a17 17 0 0 1 0 18'></path>
			</svg>
		)
	}
}
const DefaultNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const socialLinks = [
		{
			name: 'twitter',
			link: 'https://twitter.com/CognitoAI',
			icon: 'twitter'
		},
		{
			name: 'Buy me a coffe',
			link: 'https://www.buymeacoffee.com/lmoisz',
			icon: 'cup'
		},
		{
			name: 'Website',
			link: 'https://lmoisz.lat',
			icon: 'web'
		}
	]

	return (
		<nav class='bg-white sticky top-0 z-50 border-gray-200 dark:bg-gray-900'>
			<div class='flex max-w-4xl p-2.5 flex-wrap justify-between items-center mx-auto'>
				<a class='flex items-center' href='/'>
					<span class='self-center text-2xl font-sans font-semibold whitespace-nowrap dark:text-white'>
						CognitoAI
					</span>
				</a>
				<div class='flex items-center lg:order-2 gap-2'>
					{socialLinks.map((link, index) => (
						<a
							key={index}
							title={link.name}
							href={link.link}
							class='rounded-lg hover:bg-gray-100 p-2 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-100 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
							aria-label='theme'
						>
							{renderIcon({
								name: link.icon,
								className: 'h-6 w-6 dark:text-gray-300 text-gray-700'
							})}
						</a>
					))}
					<ThemeToggle />
					<button
						data-collapse-toggle='mobile-menu-2'
						type='button'
						class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						aria-controls='mobile-menu-2'
						aria-expanded='false'
						onClick={() => setIsOpen(!isOpen)}
					>
						<span class='sr-only'>Open main menu</span>
						<svg
							class='w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clip-rule='evenodd'
							></path>
						</svg>
						<svg
							class='hidden w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clip-rule='evenodd'
							></path>
						</svg>
					</button>
				</div>
				<div
					class={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
						isOpen ? '' : 'hidden'
					}`}
					id='mobile-menu-2'
				>
					<ul class='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
						<li>
							<a
								class='block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent hover:text-blue-400 dark:hover:text-blue-600 lg:text-primary-700 lg:p-0 dark:text-gray-300'
								aria-current='page'
								href='/'
							>
								Home
							</a>
						</li>
						<li>
							<a
								class='block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent hover:text-blue-400 dark:hover:text-blue-600 lg:text-primary-700 lg:p-0 dark:text-gray-300'
								aria-current='page'
								href='/about'
							>
								About
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default DefaultNavbar
