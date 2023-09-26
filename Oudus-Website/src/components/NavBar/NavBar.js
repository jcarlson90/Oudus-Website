import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';

export default function NavBar({ AboutUs, Shop, Jobs }) {
	return (
		<main>
			<section className={styles.Links}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<ul>
					<li>
						<a href="/Home">Home</a>
					</li>
					<li>
						<a href="/Contact">Contact</a>
					</li>
					<li>
						<a href="/Music">Music</a>
					</li>
					<li>
						<a href="/Merch">Merch</a>
					</li>
					<li>
						<a href="/Upcoming">Upcoming</a>
					</li>
				</ul>
			</section>
		</main>
	);
}
