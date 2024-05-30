import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { players as playerObjects } from '../assets/players';
import { teams } from '../assets/teams';

import csgo from '../assets/img/logos/csgo-logo-small.png';
import osu from '../assets/img/logos/osu-logo-small.png';
import by from '../assets/img/flags/by.png';
import kz from '../assets/img/flags/kz.png';
import ru from '../assets/img/flags/ru.png';
import cis from '../assets/img/flags/cis.png';
import ua from '../assets/img/flags/ua.png';
import ca from '../assets/img/flags/ca.png';
import be from '../assets/img/flags/be.png';
import eu from '../assets/img/flags/eu.png';

function Teams() {
	const { t } = useTranslation();

	const flagImages = { by: by, kz: kz, ru: ru, ua: ua };

	const teamNames = ['csgo', 'osu', 'csgoromcyk'];
	const teamBackgrounds = ['https://i.pinimg.com/736x/ff/c3/8d/ffc38d9bce22d7a9eaa07b890e3af1a2.jpg', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849d576-d324-4d48-b244-a5fad6c2c43f/dfkzy7c-714f8d2f-2209-4231-bc64-cb4d0ff6a864.jpg/v1/fill/w_1191,h_670,q_75,strp/anime_night_wallpaper_by_shayan777_dfkzy7c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcwIiwicGF0aCI6IlwvZlwvZjg0OWQ1NzYtZDMyNC00ZDQ4LWIyNDQtYTVmYWQ2YzJjNDNmXC9kZmt6eTdjLTcxNGY4ZDJmLTIyMDktNDIzMS1iYzY0LWNiNGQwZmY2YTg2NC5qcGciLCJ3aWR0aCI6Ijw9MTE5MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.outkwzO320qamt9b3VYP040NMpZYaJuA9upORDw9NxI', 'https://dmarket.com/blog/best-csgo-wallpapers/csgo-image_hud3c572ca46463b7314b38aa612b1af3b_51172_1920x1080_resize_q100_lanczos.jpg'];
	const teamLogos = [csgo, osu, csgo];

	return (
		<>
			<Navbar />
			<div className="main-container">
				<section className="section team-background games-background">
					<div className="article-title">
						<h1>{t('teamsPage.label')}</h1>
						<p lang='en'>Howl Gaming</p>
					</div>
				</section>
				{teamNames.map((teamName, index) => {
					const team = teams.find(p => p.teamTag.toLowerCase() === teamName);
					const teamMembers = [
						...team.players.map(gamerTag =>
							playerObjects.find(player => player.gamerTag.toLowerCase() === gamerTag.toLowerCase())
						),
						...team.leaders.map(gamerTag =>
							playerObjects.find(player => player.gamerTag.toLowerCase() === gamerTag.toLowerCase())
						)
					];
					return (
						<div className="discipline">
							<div className="dimmed-background" style={{ backgroundImage: `url(${teamBackgrounds[index]})` }}></div>
							<div className="text">
								<div>
									<img src={teamLogos[index]} className="logo" />
									<h1>{team.name}</h1>
								</div>
								<p style={{ paddingTop: '2rem' }}>{t(`teamsPage.${teamNames[index]}`)}</p>
								<p className="roaster-list">
									<br />
									{teamMembers.map((player) => (
										<>
											<Link to={`../player/${player.gamerTag}`}>
												<img className="flag" src={flagImages[player.country]} alt={player.country} />{" "}
												{t(player.firstName)} <strong>«{player.gamerTag}»</strong> {t(player.lastName)}
											</Link>
											<br />
										</>
									))}
									<br />
								</p>
								<Link to={`../team/${teamName}`}>
									<button className="button">{t('teamsPage.more')}</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div >
			{/* <Footer /> */}
		</>
	);
}

export default Teams;
