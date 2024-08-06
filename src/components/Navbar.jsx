import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import i18n from "../scripts/i18n";

import logo from '../assets/img/logos/logo.png';
import uk from "../assets/img/flags/uk.png";
import by from "../assets/img/flags/by.png";
import kz from "../assets/img/flags/kz.png";

function Navbar() {
	const { t } = i18n;
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
	const languages = ['en', 'be', 'kk'];
	const otherLanguages = languages.filter(lng => lng !== currentLanguage && !(currentLanguage === 'be-Lat' && lng === 'be') && !(currentLanguage === 'kk-Cyr' && lng === 'kk'));
	const languageFlags = { en: uk, be: by, 'be-Lat': by, kk: kz, 'kk-Cyr': kz };

	const headerRef = useRef(null);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setCurrentLanguage(lng);
	};

	const changeMode = (mode) => {
		const newLanguage = {
			'kk': { 'cyrillic': 'kk-Cyr' },
			'kk-Cyr': { 'latin': 'kk' },
			'be': { 'latin': 'be-Lat' },
			'be-Lat': { 'cyrillic': 'be' }
		}[i18n.language]?.[mode];
		if (newLanguage) {
			i18n.changeLanguage(newLanguage);
		}
	};

	useEffect(() => {
		const handleLanguageChange = (lng) => {
			if (lng === 'be-Lat') {
				setCurrentLanguage('be');
			} else if (lng === 'kk-Cyr') {
				setCurrentLanguage('kk');
			} else {
				setCurrentLanguage(lng);
			}
		};
		i18n.on('languageChanged', handleLanguageChange);
		return () => {
			i18n.off('languageChanged', handleLanguageChange);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const sticky = headerRef.current.offsetTop;
			if (window.scrollY > sticky) {
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
				</nav>
			</div>
			<header id="header" ref={headerRef}>
				<div className="container">
					<div className="top">
						<Link to="/" className="top-logo" title="HOWL Gaming">
							<img src={logo} alt="HOWL Gaming Logo" width="100%" height="100%" style={{ objectFit: 'cover' }} className="logo-img" />
						</Link>
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
									<button style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
										<img className="flag" src={languageFlags[currentLanguage]} style={{ marginRight: '4px' }} alt={`Flag representing language ${currentLanguage}`} loading="lazy" />
										{currentLanguage === 'be-Lat' ? 'be' : currentLanguage === 'kk-Cyr' ? 'kk' : currentLanguage}
									</button>
									<ul>
										{otherLanguages.map((lng) => (
											<li key={lng}>
												<button onClick={() => changeLanguage(lng)} style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
													<img className="flag" src={languageFlags[lng]} style={{ marginRight: '4px' }} alt={`Flag representing language ${lng}`} loading="lazy" />
													{lng}
												</button>
											</li>
										))}
									</ul>
								</li>
								{(i18n.language.startsWith('be') || i18n.language.startsWith('kk')) && (
									<li style={{ display: 'flex' }}>
										<a onClick={() => changeMode('cyrillic')} style={{ cursor: 'pointer' }}>{t('navbar.cyrillic')}</a>
										<span style={{ color: 'white' }}>|</span>
										<a onClick={() => changeMode('latin')} style={{ cursor: 'pointer' }}>{t('navbar.latin')}</a>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}

export default Navbar;
