import Image from 'next/image'
import { FC } from 'react'

import CartActions from '@/layout/header/HeaderButtons/cart/cart-item/cart-actions/CartActions'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from '../Cart.module.scss'

import { ICartItem } from '@/types/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>
					{(item.product.price)} Рублей
				</div>
				<div className={styles.variation}></div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
