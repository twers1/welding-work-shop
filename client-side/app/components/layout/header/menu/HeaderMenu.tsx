import Colum from '@/ui/grid/Colum'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const HeaderMenu: FC = () => {
	return (
		<Colum size={5} isCenter={true}>
		<div className={styles.menu}>
			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
		</Colum>
	)
}

export default HeaderMenu
