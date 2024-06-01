import i18n from "../scripts/i18n";

import logo from '../assets/img/logos/logo.png';
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
					<a className="sponsors__item" href="https://www.gov.kz/memleket/entities/mod?lang=en" target="_blank" rel="noopener noreferrer">
						<img src={sponsor1} alt="Ministry of Defense of the Republic of Kazakhstan" />
					</a>
					<a className="sponsors__item" href="https://batyrmall.kz/" target="_blank" rel="noopener noreferrer">
						<img src={sponsor2} alt="Batyr Mall" />
					</a>
					<a className="sponsors__item" href="https://www.shymkent.info/about-shymkent" target="_blank" rel="noopener noreferrer">
						<img src={sponsor3} alt="Shymkent" />
					</a>
					<a className="sponsors__item" href="https://www.defense.gouv.fr/air" target="_blank" rel="noopener noreferrer">
						<img src={sponsor4} alt="Armée de l'Air et de l'Espace" />
					</a>
				</div>
			</section>
			<footer>
				<div className="box-footer">
					<div className="container">
						<div className="content-footer">
							<img src={logo} />
							<div className="social-footer">
								<ul className="social-menu">
									<li className="social-menu-item">
										<a href="https://vk.com/howl7rounds" aria-label="Link to VK profile">
											<i className="fab fa-vk"></i>
										</a>
									</li>
									<li className="social-menu-item">
										<a href="https://instagram.com/howl7rounds" aria-label="Link to Instagram profile">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.facebook.com/howl7rounds" aria-label="Link to Facebook profile">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.twitter.com/howl7rounds" aria-label="Link to Twitter profile">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.youtube.com/c/howl7rounds" aria-label="Link to YouTube channel">
											<i className="fab fa-youtube"></i>
										</a>
									</li>
									<li className="social-menu-item">
										<a href="http://www.twitch.tv/howl7rounds" aria-label="Link to Twitch channel">
											<i className="fab fa-twitch"></i>
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
								Business e-mail: <a href="mailto:example@mail.com">example@mail.com</a><br />
								Media e-mail: <a href="mailto:example@mail.com">example@mail.com</a><br />
								Tournaments e-mail: <a href="mailto:example@mail.com">example@mail.com</a><br />
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
