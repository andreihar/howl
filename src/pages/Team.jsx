import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { players as playerObjects } from '../assets/players';
import { teams } from '../assets/teams';

import logo from '../assets/img/logos/logo.png';
import by from '../assets/img/flags/by.png';
import kz from '../assets/img/flags/kz.png';
import ru from '../assets/img/flags/ru.png';
import cis from '../assets/img/flags/cis.png';
import ua from '../assets/img/flags/ua.png';
import ca from '../assets/img/flags/ca.png';
import be from '../assets/img/flags/be.png';
import eu from '../assets/img/flags/eu.png';

function Team() {
	const [activeTab, setActiveTab] = useState(1);
	const { t } = useTranslation();
	const { teamId } = useParams();

	const flagImages = { by: by, kz: kz, ru: ru, cis: cis, ua: ua, ca: ca, be: be, eu: eu };

	const team = teams.find(p => p.teamTag.toLowerCase() === teamId.toLowerCase());
	const { name, country, hashtag, players, leaders, hltv, year, wins, games, matches, achievements, story } = team;

	const teamPlayers = players.map(gamerTag =>
		playerObjects.find(player => player.gamerTag.toLowerCase() === gamerTag.toLowerCase())
	);

	const teamLeaders = leaders.map(gamerTag =>
		playerObjects.find(player => player.gamerTag.toLowerCase() === gamerTag.toLowerCase())
	);

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};

	let storyTranslation = t(story);
	['<0>', '<1>', '<2>', '<3>', '<4>'].forEach((placeholder, index) => {
		const imageHtml = `<img class="flag" src="${[by, kz, ru, cis, ua][index]}" alt="${['by', 'kz', 'ru', 'cis', 'ua'][index]}" />`;
		const regex = new RegExp(placeholder.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
		storyTranslation = storyTranslation.replace(regex, imageHtml);
	});

	return (
		<>
			<Helmet>
				<title>{name} | HOWL Gaming</title>
				<meta name="description" content={`Meet the HOWL Gaming ${name} squad. Learn about our history, current players, and achievements in the gaming world.`} />
			</Helmet>
			<Navbar />
			<div className="main-container">
				<section className="section team-background csgo-background">
					<div className="row">
						{teamPlayers.map(player => (
							<Link to={`/player/${player.gamerTag}`} key={player.gamerTag}>
								<img src={player.image} alt={`${player.firstName} ${player.lastName}`} />
							</Link>
						))}
					</div>
				</section>
				<section className="section section--light section--nopad team-profile js-sameheight-holder">
					<nav className="selector">
						<ul className="sub-sect">
							<li><a id={1} className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>{t('team.about.label')}</a></li>
							<li><a id={2} className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>{t('team.achievements.label')}</a></li>
							<li><a id={3} className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>{t('team.history.label')}</a></li>
						</ul>
					</nav>
					<section className={`${activeTab === 1 ? 'active' : 'selector-sect'} section team-stats team-info`}>
						<div className="wrap">
							<div className="team-name" style={{ width: 510 }}>
								<img src={flagImages[country]} className="team-game-flag" alt={country} />
								<div className="team-header">
									<p className="team-tag" lang='en'>{name}</p>
									<br />
									<span className="team-hashtag">{hashtag}</span>
								</div>
							</div>
						</div>
					</section>
					<section className={`${activeTab === 1 ? 'active' : 'selector-sect'} section team-stats`}>
						<div className="wrap">
							<div className="facts-holder">
								<div className="fact-box">
									<span className="label">
										<Trans i18nKey="team.about.hltv" />
									</span>
									<span className="value">{hltv}</span>
								</div>
								<div className="fact-box">
									<span className="label">
										<Trans i18nKey="team.about.year" />
									</span>
									<span className="value">{year}</span>
								</div>
								<div className="fact-box">
									<span className="label">
										<Trans i18nKey="team.about.wins" />
									</span>
									<span className="value">{wins}</span>
								</div>
								<div className="fact-box">
									<span className="label">
										<Trans i18nKey="team.about.matches" />
									</span>
									<span className="value">{games}</span>
								</div>
							</div>
						</div>
					</section>
					<section className={`${activeTab === 1 ? 'active' : 'selector-sect'} section section--dark section--nopad score-events team-events js-sameheight-holder`}>
						<div id="recent-matches">
							<div className="con">
								<div className="col">
									<div className="heading">
										<h2>{t('team.about.nextMatches')}</h2>
									</div>
									{matches.map((match, index) => match.date && (
										<div key={index} id="last-result" className="recent--results">
											<div className="item">
												<div className="match-meta">
													<span className="event">
														{match.tourney}
													</span>
												</div>
												<div className="match-stage">
													<span>{match.date}</span>
												</div>
												<div className="match-scores">
													<div className="howl">
														<img src={logo} alt="HOWL Gaming" />
													</div>
													<div className="vs">vs</div>
													<div className="opponent">
														<img src={match.logo} alt="Opponent logo" />
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
								<div className="col">
									<div className="heading">
										<h2>{t('team.about.lastResults')}</h2>
									</div>
									<div className="recent--results last-results">
										<div className="score-table__legend">
											<span className="score-table__legend__team">{t('team.about.score')}</span>
											<span className="score-table__legend__score">{t('team.about.tourney')}</span>
										</div>
										{matches.map((match, index) => !match.date && (
											<div key={index} className="result">
												<div className="howl">
													<img src={logo} alt="HOWL Gaming" />
												</div>
												<div className={`score ${match.us > match.they ? 'win' : 'loss'}`}>{match.us}</div>
												<div className="vs">vs</div>
												<div className="score">{match.they}</div>
												<div className="opponent">
													<img src={match.logo} alt="Opponent" />
												</div>
												<div className="comp">
													<span className="comp--label">{match.tourney}</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="wrap">
						<div className={`${activeTab === 1 ? 'active' : 'selector-sect'} section-half js-sameheight`}>
							<h2 className="section__title h4">
								<Trans i18nKey="team.about.leaders" values={{ team: name }} components={[<strong lang='en' />]} />
							</h2>
							<div className="desc">
								<div className="headofteam">
									{teamLeaders.map(leader => (
										<div key={leader.gamerTag} className="box-head">
											<Link to={`/player/${leader.gamerTag}`}>
												<img src={leader.image} alt={`${t(leader.firstName)} ${t(leader.lastName)}`} />
												<div className="name">
													<p>{t(leader.firstName)} <strong>«{leader.gamerTag}»</strong> {t(leader.lastName)}</p>
													<p>{t(leader.role)}</p>
												</div>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className={`${activeTab === 2 ? 'active' : 'selector-sect'} section-half js-sameheight`}>
							<h2 className="section__title h4">
								<Trans i18nKey="team.achievements.achievementsTeam" values={{ team: name }} components={[<strong lang='en' />]} />
							</h2>
							<div className="desc">
								<span className="section__subtitle">{t('team.achievements.trophies')}</span>
								<div className="container-list-staff page-black">
									<ul className="list-staff">
										{achievements.map((achievement, index) => (
											<li key={index} style={{ backgroundImage: `url("${achievement.image}")` }} className="active animate-player">
												<div className="info-staff">
													<div className="name-staff">
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
														<img className="flag" style={{ marginRight: '4px' }} src={flagImages[achievement.country]} alt={achievement.country} loading="lazy" />{achievement.location}
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
						<div className={`${activeTab === 3 ? 'active' : 'selector-sect'} section-half js-sameheight`} dangerouslySetInnerHTML={{ __html: storyTranslation }} />
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default Team;
