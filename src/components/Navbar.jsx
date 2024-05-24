import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import i18n from "../scripts/i18n";

import uk from "../assets/img/flags/uk.png";
import by from "../assets/img/flags/by.png";
import kz from "../assets/img/flags/kz.png";

function Navbar() {
	const { t } = i18n;
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
	const languages = ['en', 'be', 'kk'];
	const otherLanguages = languages.filter(lng => lng !== currentLanguage);
	const languageFlags = { en: uk, be: by, kk: kz, };

	const headerRef = useRef(null);
	const bodyRef = useRef(null);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setCurrentLanguage(lng);
	};

	useEffect(() => {
		const handleLanguageChange = (lng) => {
			setCurrentLanguage(lng);
		};
		i18n.on('languageChanged', handleLanguageChange);
		return () => {
			i18n.off('languageChanged', handleLanguageChange);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const sticky = headerRef.current.offsetTop;
			if (window.pageYOffset > sticky) {
				headerRef.current.classList.add("sticky");
			} else {
				headerRef.current.classList.remove("sticky");
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className="top-social">
				<nav className="nav top-nav-social">
					<ul className="social-menu">
						<li className="social-menu-item">
							<a href="https://vk.com/howl7rounds">
								<i className="fab fa-vk"></i>
							</a>
						</li>
						<li className="social-menu-item">
							<a href="https://instagram.com/howl7rounds">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li className="social-menu-item">
							<a href="http://www.facebook.com/howl7rounds">
								<i className="fab fa-facebook-f"></i>
							</a>
						</li>
						<li className="social-menu-item">
							<a href="http://www.facebook.com/howl7rounds">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li className="social-menu-item">
							<a href="http://www.youtube.com/c/howl7rounds">
								<i className="fab fa-youtube"></i>
							</a>
						</li>
						<li className="social-menu-item">
							<a href="http://www.youtube.com/c/howl7rounds">
								<i className="fab fa-twitch"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<header id="header" ref={headerRef}>
				<div className="container">
					<div className="top">
						<Link to="/" className="top-logo" title="HOWL Gaming"></Link>
						<nav className="top-nav">
							<ul className="main-menu">
								<li><Link to={`/news`}>{t('navbar.news')}</Link></li>
								<li>
									<a href="#">{t('navbar.media')}</a>
									<ul>
										<li>
											<a href="#">{t('navbar.streams')}</a>
										</li>
										<li>
											<a href="#">{t('navbar.video')}</a>
										</li>
										<li>
											<a href="#">{t('navbar.gallery')}</a>
										</li>
									</ul>
								</li>
								<li>
									<Link to={`/teams`}>{t('navbar.teams')}</Link>
									<ul>
										<li>
											<Link to={`/team/csgo`}>CS:GO</Link>
										</li>
										<li>
											<Link to={`/team/osu`}>Osu!</Link>
										</li>
										<li>
											<Link to={`/team/csgoromcyk`}>Romčyk</Link>
										</li>
									</ul>
								</li>
								<li><a href="#">{t('navbar.about')}</a></li>
								<li><a href="#">{t('navbar.partners')}</a></li>
								<li><a href="#">{t('navbar.shop')}</a></li>
							</ul>
						</nav>
						<nav className="top-nav-lang">
							<ul className="main-menu">
								<li className="lang">
									<a><img className="flag" src={languageFlags[currentLanguage]} alt={currentLanguage} /> {currentLanguage}</a>
									<ul>
										{otherLanguages.map((lng) => (
											<li key={lng}>
												<a onClick={() => changeLanguage(lng)}><img className="flag" src={languageFlags[lng]} alt={lng} /> {lng}</a>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}

export default Navbar;
