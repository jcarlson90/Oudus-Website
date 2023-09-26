import { useState } from 'react';
import styles from './HomeScreen.module.scss';

export default function Home(props) {
	return(
		<section className={styles.home}>
		<div className={styles.homecontent}>
		<a class="navbar-brand" href="#"><img src="img/OUDUS BLACK.png" alt="logo" width="80" /></a>
			<h1>OUDUS</h1>
			<h3>Bay Area Dubstep</h3>
			<p></p>
		</div>
		
		<div className={styles.homesci}>
			<a href="https://soundcloud.com/oudus"><i className={styles.link3}></i></a>
			<a href="https://open.spotify.com/artist/1hmGVUsoahLccyXy8aG24Z?si=8rWmXVy_SgaxCHnva38Emg"><i className={styles.link4} ></i></a>
			<a href="https://www.instagram.com/oudusjake/"><i className={styles.link5}></i></a>
		</div>
	  </section>
	)}
