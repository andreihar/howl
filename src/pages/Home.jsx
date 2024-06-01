import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import background from '../assets/img/backgrounds/games-background.jpg';
import csgo from '../assets/img/logos/csgo-red.png';
import pubg from '../assets/img/logos/pubg-red.png';

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Navbar />
			<div className="home-page">
				<div className="main">
					<article style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}>
						<div className="header__wrapper">
							<div className="header__wrapper__inner">
								<div className="header__content col-8">
									<div className="header__content__header">
										Web <strong>Howl Gaming</strong> {t('home.open')}!
									</div>
									<div className="header__content__text">{t('home.text')}</div>
								</div>
							</div>
						</div>
					</article>
					<div className="content">
						<div className="content__inner">
							<div className="sections">
								<div className="sections__wrapper col-8">
									<div className="sections__content">
										<Link className="sections__item" to="/team/csgo">
											<div className="sections__item__content">
												<div className="sections__item__title"><img src={csgo} alt="CS:GO" /></div>
												<div className="sections__item__subtitle">Counter Strike: Global Offensive</div>
											</div>
										</Link>
										<Link className="sections__item" to="/team/osu">
											<div className="sections__item__content">
												<div className="sections__item__title"><img src={pubg} alt="osu!" /></div>
												<div className="sections__item__subtitle">osu!</div>
											</div>
										</Link>
										<Link className="sections__item" to="/team/csgoromcyk">
											<div className="sections__item__content">
												<div className="sections__item__title"><img src={csgo} alt="CS:GO" /></div>
												<div className="sections__item__subtitle">Romčyk - Counter Strike: Global Offensive</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Home;
