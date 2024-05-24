import React, { useState, useEffect } from 'react';
import i18n from "../scripts/i18n";

import sponsor1 from '../assets/img/sponsors/sponsor1.png';
import sponsor2 from '../assets/img/sponsors/sponsor2.png';
import sponsor3 from '../assets/img/sponsors/sponsor3.png';
import sponsor4 from '../assets/img/sponsors/sponsor4.png';

function Footer() {
	const { t } = i18n;

	return (
		<>
			<section className="section section--dark sponsors">
				<div className="wrap">
					<a className="sponsors__item" href="https://www.gov.kz/memleket/entities/mod?lang=en">
						<img src={sponsor1} alt="Ministry of Defense of the Republic of Kazakhstan" />
					</a>
					<a className="sponsors__item" href="https://batyrmall.kz/">
						<img src={sponsor2} alt="Batyr Mall" />
					</a>
					<a className="sponsors__item" href="https://www.shymkent.info/about-shymkent">
						<img src={sponsor3} alt="Shymkent" />
					</a>
					<a className="sponsors__item" href="https://www.defense.gouv.fr/air">
						<img src={sponsor4} alt="Armée de l'Air et de l'Espace" />
					</a>
				</div>
			</section>
			<footer>
				<div className="box-footer">
					<div className="container">
						<div className="content-footer">
							<img src="../src/assets/img/logos/logo.png" />
							<div className="social-footer">
								<ul className="social-menu">
									<li className="social-menu-item">
										<a href="https://vk.com/howl7rounds">
											<i className="fab fa-vk" />
										</a>
									</li>
									<li className="social-menu-item">
										<a href="https://instagram.com/howl7rounds">
											<i className="fab fa-instagram" />
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.facebook.com/howl7rounds">
											<i className="fab fa-facebook-f" />
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.facebook.com/howl7rounds">
											<i className="fab fa-twitter" />
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.youtube.com/c/howl7rounds">
											<i className="fab fa-youtube" />
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.youtube.com/c/howl7rounds">
											<i className="fab fa-twitch" />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="content-footer">
							<h3>{t('footer.about')}</h3>
							<p>{t('footer.description')}</p>
						</div>
						<div className="content-footer">
							<h3>{t('footer.contacts')}</h3>
							<p>
								Business e-mail: <a>example@mail.com</a><br />
								Media e-mail: <a>example@mail.com</a><br />
								Tournaments e-mail: <a>example@mail.com</a><br />
							</p>
						</div>
					</div>
				</div>
				<div className="copyright">
					<p>© HOWL Gaming, 2019 | {t('footer.copyright')}</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
