import { useState } from 'react'
import './App.css'

const Basket = () => {
	const [cart, setCart] = useState([
		{ id: 1, title: 'Футболка', count: 1 },
		{ id: 2, title: 'Кепка', count: 2 },
	])

	const changeCount = () => {
		setCart(cart.map(item => item.count + 1))
	}

	return (
		<div className='block'>
			<h3>Корзина товаров</h3>
			{cart.map(item => (
				<div key={item.id} className='cart__info'>
					<p>
						{item.title} (Кол-во: {item.count})
					</p>
					<div className='basket__btn'>
						<button onClick={changeCount}>+1</button>
						<button>Удалить</button>
					</div>
				</div>
			))}
			<button>Очистить корзину</button>
		</div>
	)
}

export default Basket
