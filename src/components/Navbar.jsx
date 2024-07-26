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
	const otherLanguages = languages.filter(lng => lng !== currentLanguage && !(currentLanguage === 'be-Latn' && lng === 'be'));
	const languageFlags = { en: uk, be: by, 'be-Latn': by, kk: kz };

	const headerRef = useRef(null);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setCurrentLanguage(lng);
	};

	const changeMode = (mode) => {
		if (mode === 'Кір') {
			i18n.changeLanguage('be');
		} else if (mode === 'Lac') {
			i18n.changeLanguage('be-Latn');
		}
	};

	useEffect(() => {
		const handleLanguageChange = (lng) => {
			if (lng === 'be-Latn') {
				setCurrentLanguage('be');
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
						{/* <Link to="/" className="top-logo" title="HOWL Gaming"></Link> */}
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
										<img className="flag" src={languageFlags[currentLanguage]} style={{ marginRight: '4px' }} alt={currentLanguage} />
										{currentLanguage === 'be-Latn' ? 'be' : currentLanguage}
									</button>
									<ul>
										{otherLanguages.map((lng) => (
											<li key={lng}>
												<button onClick={() => changeLanguage(lng)} style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
													<img className="flag" src={languageFlags[lng]} style={{ marginRight: '4px' }} alt={lng} />
													{lng}
												</button>
											</li>
										))}
									</ul>
								</li>
								{i18n.language.startsWith('be') && (
									<li style={{ display: 'flex' }}>
										<a onClick={() => changeMode('Кір')}>Кір</a>
										<span style={{ color: 'white' }}>|</span>
										<a onClick={() => changeMode('Lac')}>Lac</a>
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
