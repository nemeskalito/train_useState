import { useState } from 'react'

const Profile = () => {
	const [user, setUser] = useState({
		name: 'Иван',
		age: 25,
		isActive: true,
	})
	const nameChangeClick = () => {
		setUser({ ...user, name: 'Игорь' })
	}
	const ageChangeClick = () => {
		setUser({ ...user, age: 26 })
	}
	const activeChangeClick = () => {
		setUser({ ...user, isActive: false })
	}
	return (
		<>
			<p>{user.name}</p>
			<p>{user.age}</p>
			<p>Активность: {user.isActive ? 'Да' : 'Нет'}</p>
			<button onClick={nameChangeClick}>Сменить имя</button>
			<button onClick={ageChangeClick}>Увеличить возраст</button>
			<br />
			<button onClick={activeChangeClick}>Переключить активность</button>
		</>
	)
}

export default Profile
