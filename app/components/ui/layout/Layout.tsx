import { FC, PropsWithChildren } from 'react'

import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<section className={styles.wrapper}>{children}</section>
		</>
	)
}

export default Layout
