import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { players } from '../assets/players';
import { teams } from '../assets/teams';

import by from '../assets/img/flags/by.png';
import kz from '../assets/img/flags/kz.png';
import ru from '../assets/img/flags/ru.png';
import cis from '../assets/img/flags/cis.png';
import ua from '../assets/img/flags/ua.png';
import ca from '../assets/img/flags/ca.png';
import be from '../assets/img/flags/be.png';
import eu from '../assets/img/flags/eu.png';

import monitor from '../assets/img/gear/monitor.svg';
import mouseImage from '../assets/img/gear/mouse.svg';
import keyboard from '../assets/img/gear/keyboard.svg';
import headphones from '../assets/img/gear/headphones.svg';
import mousepad from '../assets/img/gear/mousepad.svg';

function Player() {
	const [activeTab, setActiveTab] = useState(1);
	const { t } = useTranslation();
	const { playerId } = useParams();

	const flagImages = { by: by, kz: kz, ru: ru, ua: ua, ca: ca, be: be, eu: eu };

	const player = players.find(p => p.gamerTag.toLowerCase() === playerId.toLowerCase());
	const { gamerTag, image, firstName, lastName, country, age, role, joined, nameInst, gamerTagGen, socials, story, highlights, setup, mouse, crossHair } = player;

	const achievements = teams
		.filter(team => team.players.includes(gamerTag.toLowerCase()))
		.map(team => team.achievements)
		.flat();

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};

	return (
		<>
			<Navbar />
			<div className="main-container">
				<section className="section team-background csgo-background">
					<div className="player-table">
						<div className="block-left">
							<img src={image} alt={gamerTag} />
						</div>
						<div className="block-right">
							<div className="player-name">
								<h2>{t(firstName)}</h2>
								<strong lang='en'><h1>{gamerTag}</h1></strong>
								<h2>{t(lastName)}</h2>
							</div>
							<div className="wrap-player-info">
								<div className="player-info">
									<div>
										<span className="player-info-cat">{t('player.country')}: </span>
										<span className="player-info-text"><img className="flag" style={{ marginRight: '4px' }} src={flagImages[country]} alt={country} />{t(`countries.${country}`)}</span>
									</div>
									<div>
										<span className="player-info-cat">{t('player.age')}: </span>
										<span className="player-info-text">{age}</span>
									</div>
								</div>
								<div className="player-info">
									<div>
										<span className="player-info-cat">{t('player.role')}: </span>
										<span className="player-info-text">{t(role)}</span>
									</div>
									<div>
										<span className="player-info-cat">{t('player.joined')}: </span>
										<span className="player-info-text">{joined}</span>
									</div>
								</div>
							</div>
							<div className="player-social">
								<h1><Trans i18nKey="player.follow" values={{ name: t(nameInst) }} /></h1>
								<ul className="social-menu social-menu-player">
									{socials.vk && (
										<li className="social-menu-item">
											<a href={socials.vk} aria-label="Link to VK profile">
												<i className="fab fa-vk" />
											</a>
										</li>
									)}
									{socials.instagram && (
										<li className="social-menu-item">
											<a href={socials.instagram} aria-label="Link to Instagram profile">
												<i className="fab fa-instagram" />
											</a>
										</li>
									)}
									{socials.facebook && (
										<li className="social-menu-item">
											<a href={socials.facebook} aria-label="Link to Facebook profile">
												<i className="fab fa-facebook-f" />
											</a>
										</li>
									)}
									{socials.twitter && (
										<li className="social-menu-item">
											<a href={socials.twitter} aria-label="Link to Twitter profile">
												<i className="fab fa-twitter" />
											</a>
										</li>
									)}
									{socials.youtube && (
										<li className="social-menu-item">
											<a href={socials.youtube} aria-label="Link to YouTube channel">
												<i className="fab fa-youtube" />
											</a>
										</li>
									)}
									{socials.twitch && (
										<li className="social-menu-item">
											<a href={socials.twitch} aria-label="Link to Twitch channel">
												<i className="fab fa-twitch" />
											</a>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="section section--light section--nopad team-profile js-sameheight-holder">
					<nav className="selector">
						<ul className="sub-sect">
							<li><a id={1} className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>{t('player.about.label')}</a></li>
							<li><a id={2} className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>{t('player.setup.label')}</a></li>
							<li><a id={3} className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>{t('team.achievements.label')}</a></li>
						</ul>
					</nav>
					<div className="wrap">
						<div className={`${activeTab === 1 ? 'active' : 'selector-sect'} section-half js-sameheight`}>
							<h2 className="section__title h4">CS:GO <strong lang='en'>{gamerTag}</strong></h2>
							<div className="desc">
								<Trans i18nKey={story} components={[
									<img className="flag" src={by} alt="by" />,
									<img className="flag" src={kz} alt="kz" />,
									<img className="flag" src={ru} alt="ru" />,
									<img className="flag" src={cis} alt="cis" />,
									<img className="flag" src={ua} alt="ua" />
								]} />
							</div>
							<h2 className="section__title h4">
								<Trans i18nKey="player.about.highlights" values={{ name: t(gamerTagGen) }} />
							</h2>
							<div className="desc desc-highlights">
								<div className="video-small">
									{highlights.map((highlight, index) => (
										<iframe src={highlight} key={index} />
									))}
								</div>
							</div>
						</div>
						<div className={`${activeTab === 2 ? 'active' : 'selector-sect'} section-half js-sameheight gear`}>
							<h2 className="section__title h4">{t('player.setup.devices')}</h2>
							<div className="desc">
								<nav>
									<ul lang='en'>
										<li>
											<img src={monitor} alt="monitor" />
											<p>{setup.devices.screen}</p>
										</li>
										<li>
											<img src={mouseImage} alt="mouseImage" />
											<p>{setup.devices.mouse}</p>
										</li>
										<li>
											<img src={keyboard} alt="keyboard" />
											<p>{setup.devices.keyboard}</p>
										</li>
										<li>
											<img src={headphones} alt="headphones" />
											<p>{setup.devices.headphones}</p>
										</li>
										<li>
											<img src={mousepad} alt="mousepad" />
											<p>{setup.devices.mousepad}</p>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div className={`${activeTab === 2 ? 'active' : 'selector-sect'} section-half section-half--block js-sameheight`}>
							<h2 className="section__title h4">{t('player.setup.videoSettings')} - <strong lang='en'>{setup.devices.screen}</strong></h2>
							<div className="desc">
								<nav className="settings">
									<ul>
										<li>
											<span>{t('player.setup.resolution')}</span>
											<p>{setup.screen.resolution}</p>
										</li>
										<li>
											<span>{t('player.setup.aspectRatio')}</span>
											<p>{setup.screen.aspectRatio}</p>
										</li>
										<li>
											<span>{t('player.setup.displayMode')}</span>
											<p>{t(setup.screen.displayMode)}</p>
										</li>
										<li>
											<span>{t('player.setup.refreshRate')}</span>
											<p>{setup.screen.refreshRate} Hz</p>
										</li>
									</ul>
								</nav>
								<span className="section__subtitle">{t('player.setup.launchOptions')}</span>
								<p>{setup.launchOptions}</p>
								<a href={setup.config}>
									<button>{t('player.setup.downloadConfig')}</button>
								</a>
							</div>
						</div>
						<div className={`${activeTab === 2 ? 'active' : 'selector-sect'} section-half section-half--block js-sameheight`}>
							<h2 className="section__title h4">{t('player.setup.mouseSettings')} - <strong lang='en'>{setup.devices.headphones}</strong></h2>
							<div className="desc">
								<nav className="settings">
									<ul>
										<li>
											<span>DPI</span>
											<p>{mouse.dpi}</p>
										</li>
										<li>
											<span>{t('player.setup.sensitivity')}</span>
											<p>{mouse.sensitivity}</p>
										</li>
										<li>
											<span>eDPI</span>
											<p>{mouse.edpi}</p>
										</li>
										<li>
											<span>{t('player.setup.refreshRate')}</span>
											<p>{mouse.hz}</p>
										</li>
										<li>
											<span>{t('player.setup.zoomSensitivity')}</span>
											<p>{mouse.zoomSensitivity}</p>
										</li>
										<li>
											<span>{t('player.setup.mouseAcceleration')}</span>
											<p>{mouse.mouseAcceleration}</p>
										</li>
										<li>
											<span>{t('player.setup.windowsSensitivity')}</span>
											<p>{mouse.windowsSensitivity}</p>
										</li>
										<li>
											<span>{t('player.setup.rawInput')}</span>
											<p>{mouse.rawInput}</p>
										</li>
									</ul>
								</nav>
								<span className="section__subtitle">{t('player.setup.crossHair')}</span>
								<p>{crossHair}</p>
							</div>
						</div>
						<div className={`${activeTab === 3 ? 'active' : 'selector-sect'} section-half js-sameheight`}>
							<h2 className="section__title h4">
								<Trans i18nKey="team.achievements.achievementsTeam" values={{ team: t(gamerTagGen) }} components={[<strong lang='en' />]} />
							</h2>
							<div className="desc">
								<span className="section__subtitle">{t('team.achievements.trophies')}</span>
								<div className="container-list-staff page-black">
									<ul className="list-staff">
										{achievements.map((achievement, index) => (
											<li
												key={index}
												style={{ backgroundImage: `url("${achievement.image}")` }}
												className="active animate-player"
											>
												<div className="info-staff">
													<div className="name-staff" >
														<strong lang='en'>{achievement.name}</strong>
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.organiser')}:</strong> {achievement.organiser}
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.type')}:</strong> {achievement.type}
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.location')}:</strong>{" "}
														<img className="flag" style={{ marginRight: '4px' }} src={flagImages[achievement.country]} alt={achievement.country} />{achievement.location}
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.numOfTeams')}:</strong> {achievement.numberOfTeams}
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.system')}:</strong> {achievement.system}
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.pool')}:</strong> {achievement.pool}
													</div>
													<div className="location-staff">
														<strong>{t('team.achievements.date')}:</strong> {achievement.date}
													</div>
													<Link to="/news">
														<button>{t('team.achievements.results')}</button>
													</Link>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default Player;
