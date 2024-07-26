import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trans, useTranslation } from 'react-i18next';

import by from '../assets/img/flags/by.png';
import kz from '../assets/img/flags/kz.png';
import ru from '../assets/img/flags/ru.png';
import cis from '../assets/img/flags/cis.png';
import ua from '../assets/img/flags/ua.png';
import bg from '../assets/img/flags/bg.png';
import eu from '../assets/img/flags/eu.png';

function News() {
	const { t } = useTranslation();

	return (
		<>
			<Navbar />
			<div className="main-container">
				<section className="section team-background csgo-background">
					<div className="article-title">
						<h1>5K - by Challengermode</h1>
						<p>
							{t('news.reports')} <strong>/</strong> <span lang='en'>Howl Gaming</span>
						</p>
					</div>
				</section>
				<section className="section section--light section--nopad team-profile js-sameheight-holder">
					<div className="wrap">
						<div className="active section-half js-sameheight">
							<h2 className="section__title h4">
								<strong>5K - by Challengermode</strong>: {t('news.report')}
							</h2>
							<div className="desc">
								<div className="reportage-top">
									<div className="image-reportage" style={{ backgroundImage: 'url("http://cmp-image-store1.azureedge.net/211492ca-3ca6-45c7-af3a-a2806537fe3f_640_360")' }} />
									<div className="description-one-news">
										<table className="player-statistics tour-info">
											<caption>{t('news.info')}</caption>
											<tbody>
												<tr><td><strong>{t('team.achievements.organiser')}:</strong> Challengermode</td></tr>
												<tr><td><strong>{t('team.achievements.type')}:</strong> Online</td></tr>
												<tr>
													<td>
														<strong>{t('team.achievements.location')}:</strong> <img className="flag" style={{ marginRight: '4px' }} src={eu} alt="eu" loading="lazy" />{t('countries.eu')}
													</td>
												</tr>
												<tr><td><strong>{t('team.achievements.numOfTeams')}:</strong> 32</td></tr>
												<tr><td><strong>{t('team.achievements.system')}:</strong> Single Elimination</td></tr>
												<tr><td><strong>{t('team.achievements.pool')}:</strong> €150</td></tr>
												<tr><td><strong>{t('team.achievements.date')}:</strong> 18.05.2019</td></tr>
											</tbody>
										</table>
									</div>
								</div>
								<Trans i18nKey="news.text1" components={[<img className="flag" src={by} alt="by" loading="lazy" />, <img className="flag" src={kz} alt="kz" loading="lazy" />, <img className="flag" src={ru} alt="ru" loading="lazy" />, <img className="flag" src={cis} alt="cis" loading="lazy" />, <img className="flag" src={ua} alt="ua" loading="lazy" />, <img className="flag" src={bg} alt="bg" loading="lazy" />,]} />
								<p className="roaster-list">
									<Trans i18nKey="news.text2" components={[<img className="flag" src={by} alt="by" loading="lazy" />, <img className="flag" src={kz} alt="kz" loading="lazy" />, <img className="flag" src={ru} alt="ru" loading="lazy" />, <img className="flag" src={cis} alt="cis" loading="lazy" />, <img className="flag" src={ua} alt="ua" loading="lazy" />, <img className="flag" src={bg} alt="bg" loading="lazy" />,]} />
								</p>
								<Trans i18nKey="news.text3" components={[<img className="flag" src={by} alt="by" loading="lazy" />, <img className="flag" src={kz} alt="kz" loading="lazy" />, <img className="flag" src={ru} alt="ru" loading="lazy" />, <img className="flag" src={cis} alt="cis" loading="lazy" />, <img className="flag" src={ua} alt="ua" loading="lazy" />, <img className="flag" src={bg} alt="bg" loading="lazy" />,]} />
								<div className="description-one-news" style={{ padding: '1rem 0' }}>
									<table className="player-statistics">
										<caption>Overpass</caption>
										<thead>
											<tr>
												<th><img className="flag" src={cis} alt="cis" loading="lazy" /> Howl Gaming <strong>4</strong></th>
												<th>{t('news.kd')}</th>
												<th>{t('news.kdRatio')}</th>
												<th>{t('news.kr')}</th>
												<th>{t('news.headshots')}</th>
												<th>{t('news.avrd')}</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><img className="flag" src={kz} alt="kz" loading="lazy" /> KLDS</td>
												<td>24-16</td>
												<td>1.6</td>
												<td>idk</td>
												<td>25%</td>
												<td>123</td>
											</tr>
											<tr>
												<td><img className="flag" src={by} alt="by" loading="lazy" /> Bulhkin</td>
												<td>9-18</td>
												<td>0.47</td>
												<td>idk</td>
												<td>37%</td>
												<td>46</td>
											</tr>
											<tr>
												<td><img className="flag" src={ru} alt="ru" loading="lazy" /> DeeZiK</td>
												<td>8-17</td>
												<td>0.41</td>
												<td>idk</td>
												<td>57%</td>
												<td>55</td>
											</tr>
											<tr>
												<td><img className="flag" src={ua} alt="ua" loading="lazy" /> bat</td>
												<td>7-19</td>
												<td>0.38</td>
												<td>idk</td>
												<td>42%</td>
												<td>40</td>
											</tr>
											<tr>
												<td><img className="flag" src={kz} alt="kz" loading="lazy" /> DK_1GE</td>
												<td>5-20</td>
												<td>0.26</td>
												<td>idk</td>
												<td>100%</td>
												<td>37</td>
											</tr>
										</tbody>
									</table>
									<br />
									<table className="player-statistics">
										<thead>
											<tr>
												<th><img className="flag" src={bg} alt="bg" loading="lazy" /> FATE <strong className="won">16</strong></th>
												<th>{t('news.kd')}</th>
												<th>{t('news.kdRatio')}</th>
												<th>{t('news.kr')}</th>
												<th>{t('news.headshots')}</th>
												<th>{t('news.avrd')}</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><img className="flag" src={bg} alt="bg" loading="lazy" /> Dupliacte</td>
												<td>22-11</td>
												<td>1.72</td>
												<td>idk</td>
												<td>47%</td>
												<td>91</td>
											</tr>
											<tr>
												<td><img className="flag" src={bg} alt="bg" loading="lazy" /> Patrick</td>
												<td>22-12</td>
												<td>2.00</td>
												<td>idk</td>
												<td>36%</td>
												<td>116</td>
											</tr>
											<tr>
												<td><img className="flag" src={bg} alt="bg" loading="lazy" /> doublemagic</td>
												<td>18-9</td>
												<td>2.00</td>
												<td>idk</td>
												<td>22%</td>
												<td>91</td>
											</tr>
											<tr>
												<td><img className="flag" src={bg} alt="bg" loading="lazy" /> Rainwaker</td>
												<td>12-11</td>
												<td>1.30</td>
												<td>idk</td>
												<td>46%</td>
												<td>58</td>
											</tr>
											<tr>
												<td><img className="flag" src={bg} alt="bg" loading="lazy" /> sTeFFe2KkK8</td>
												<td>14-12</td>
												<td>1.27</td>
												<td>idk</td>
												<td>64%</td>
												<td>80</td>
											</tr>
										</tbody>
									</table>
								</div>
								<Trans i18nKey="news.text4" components={[<img className="flag" src={by} alt="by" loading="lazy" />, <img className="flag" src={kz} alt="kz" loading="lazy" />, <img className="flag" src={ru} alt="ru" loading="lazy" />, <img className="flag" src={cis} alt="cis" loading="lazy" />, <img className="flag" src={ua} alt="ua" loading="lazy" />, <img className="flag" src={bg} alt="bg" loading="lazy" />,]} />
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default News;
