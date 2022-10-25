import Image from 'next/image'
import { FC } from 'react'

import logo from '@/assets/images/logo/logo.png'

const SpinnerComponent: FC = () => {
	return (
		<div className='fallback-spinner app-loader'>
			<Image src={logo} alt='logo' className='fallback-logo' />
			<div className='loading'>
				<div className='effect-1 effects' />
				<div className='effect-2 effects' />
				<div className='effect-3 effects' />
			</div>
		</div>
	)
}

export default SpinnerComponent
