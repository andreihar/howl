import bat from '../assets/img/players/bat.png';
import bomb1la from '../assets/img/players/bomb1la.png';
import bulhkin from '../assets/img/players/bulhkin.png';
import deezik from '../assets/img/players/deezik.png';
import godeach from '../assets/img/players/godeach.png';
import klaud from '../assets/img/players/klaud.png';
import axle from '../assets/img/players/axle.png';
import rabcau from '../assets/img/players/rabcau.png';
import seramisv from '../assets/img/players/seramisv.png';

import bulhkinCfg from '../assets/uploads/configs/bulhkincfg.zip';
import axleCfg from '../assets/uploads/configs/axlecfg.zip';

export const players = [
	{
		gamerTag: "bat",
		image: bat,
		firstName: 'players.bat.first',
		lastName: 'players.bat.last',
		country: "ua",
		age: "17",
		role: 'players.roles.rifler',
		joined: "4.2.2018",
		nameInst: 'players.bat.inst',
		gamerTagGen: 'players.bat.gen',
		socials: {
			vk: "https://vk.com/batmessiah",
			youtube: "http://www.youtube.com/channel/UC0cN6-FbBGWmbTTyXG29C7g"
		},
		story: 'players.bulhkin.story',
		highlights: ['https://www.youtube.com/embed/ei285af2rWc'],
		setup: {
			devices: {
				screen: "Acer KG251QFbmidpx 144Hz", mouse: "A4Tech Bloody V3M", keyboard: "A4Tech Bloody B254 Black",
				headphones: "A4Tech Bloody G500", mousepad: ""
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "144",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1"
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";'
	},
	{
		gamerTag: "Bomb1la",
		image: bomb1la,
		firstName: 'players.bomb1la.first',
		lastName: 'players.bomb1la.last',
		country: "by",
		age: "26",
		role: 'players.roles.coach',
		joined: "1.5.2017",
		nameInst: 'players.bomb1la.inst',
		gamerTagGen: 'players.bomb1la.gen',
		socials: {
			vk: "https://vk.com/bulhkin",
			instagram: "https://instagram.com/bulhkin",
			facebook: "https://facebook.com/bulhkin",
			twitter: "https://twitter.com/bulhkin",
			youtube: "https://youtube.com/bulhkin",
			twitch: "https://twitch.com/bulhkin"
		},
		story: 'players.bomb1la.story',
		highlights: ['https://www.youtube.com/embed/0_5syBcbUXo', 'https://www.youtube.com/embed/bElhCi644Hs?', 'https://www.youtube.com/embed/NmdDIexLpUo?'],
		setup: {
			devices: {
				screen: "BenQ XL2546", mouse: "Logitech G203", keyboard: "HyperX Alloy FPS",
				headphones: "HyperX Cloud II", mousepad: "SteelSeries QcK Medium"
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "60",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1"
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";'
	},
	{
		gamerTag: "Bulhkin",
		image: bulhkin,
		firstName: 'players.bulhkin.first',
		lastName: 'players.bulhkin.last',
		country: "by",
		age: "22",
		role: 'players.roles.support',
		joined: "7.8.2017",
		nameInst: 'players.bulhkin.inst',
		gamerTagGen: 'players.bulhkin.gen',
		socials: {
			vk: "https://vk.com/bulhkin",
			instagram: "https://instagram.com/bulhkin",
			facebook: "https://facebook.com/bulhkin",
			twitter: "https://twitter.com/bulhkin",
			youtube: "https://youtube.com/bulhkin",
			twitch: "https://twitch.com/bulhkin"
		},
		story: 'players.bulhkin.story',
		highlights: ['https://www.youtube.com/embed/ei285af2rWc'],
		setup: {
			devices: {
				screen: "Acer P236H", mouse: "Logitech G203", keyboard: "Acer KU-0760",
				headphones: "Logitech G230", mousepad: "SteelSeries QcK Medium"
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "60",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1"
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";'
	},
	{
		gamerTag: "DeeZiK",
		image: deezik,
		firstName: 'players.deezik.first',
		lastName: 'players.deezik.last',
		country: "ru",
		age: "17",
		role: 'players.roles.sniper',
		joined: "7.8.2017",
		nameInst: 'players.deezik.inst',
		gamerTagGen: 'players.deezik.gen',
		socials: {
			vk: "https://vk.com/deezik"
		},
		story: 'players.deezik.story',
		highlights: ['https://www.youtube.com/embed/4pY7e8sOy74'],
		setup: {
			devices: {
				screen: "", mouse: "Logitec G102", keyboard: "Qcyber DOMINATOR TKL",
				headphones: "HyperX Cloud Core", mousepad: ""
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "60",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1"
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";'
	},
	{
		gamerTag: "GODEACH",
		image: godeach,
		firstName: 'players.godeach.first',
		lastName: 'players.godeach.last',
		country: "ru",
		age: "20",
		role: 'players.roles.entry',
		joined: "7.8.2017",
		nameInst: 'players.godeach.inst',
		gamerTagGen: 'players.godeach.gen',
		socials: {
			vk: "https://vk.com/90deach"
		},
		story: 'players.godeach.story',
		highlights: ['https://www.youtube.com/embed/2QbNk8Vmpmk'],
		setup: {
			devices: {
				screen: "Acer P236H", mouse: "Logitech G203", keyboard: "Acer KU-0760",
				headphones: "Logitech G230", mousepad: "SteelSeries QcK Medium"
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "60",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1"
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";'
	},
	{
		gamerTag: "Klaud",
		image: klaud,
		firstName: 'players.klaud.first',
		lastName: 'players.klaud.last',
		country: "kz",
		age: "58",
		role: 'players.roles.igl',
		joined: "7.8.2017",
		nameInst: 'players.klaud.inst',
		gamerTagGen: 'players.klaud.gen',
		socials: {
			vk: "https://vk.com/klaud456",
			instagram: "https://instagram.com/klaudiusoftheillidari/",
			facebook: "http://www.facebook.com/klaud.lolich"
		},
		story: 'players.klaud.story',
		highlights: ['https://www.youtube.com/embed/dhLurFxO-rA'],
		setup: {
			devices: {
				screen: "Acer Aspire V 17 Nitro BE", mouse: "Razer Mamba TE", keyboard: "Razer Blackwidow 2013",
				headphones: "Razer Kraken Pro v2 Oval", mousepad: "Genuine wooden table"
			},
			screen: {
				resolution: "640×512", aspectRatio: "5:4", displayMode: 'player.setup.fullscreen', refreshRate: "140",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "800", hz: "1000", zoomSensitivity: "0.82",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1"
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";'
	},
	{
		gamerTag: "axle",
		image: axle,
		firstName: 'players.axle.first',
		lastName: 'players.axle.last',
		country: "kz",
		age: "17",
		role: 'players.roles.rifler',
		joined: "18.9.2018",
		nameInst: 'players.axle.inst',
		gamerTagGen: 'players.axle.gen',
		socials: {
			vk: "https://vk.com/stfu_axl",
			instagram: "https://vk.com/stfu_axl",
		},
		story: 'players.bulhkin.story',
		highlights: ['https://www.youtube.com/embed/t2L6CXg5M8Y'],
		setup: {
			devices: {
				screen: "Samsung S22C300", mouse: "Steelseries Sensei Ten", keyboard: "Dark Project KD3B rev.2",
				headphones: "HyperX Cloud Core", mousepad: "HyperX Fury S Large"
			},
			screen: {
				resolution: "1280×960", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "75",
			},
			launchOptions: "-language english -novid -noforcemaccel -noforcemspd -noforcemparms -freq 144 +cl_forcepreload 1 +mat_queue_mode 2 -tickrate 128 -threads 4 -high -nojoy -allow_third_party_software",
			config: axleCfg,
		},
		mouse: {
			dpi: "400", sensitivity: "3.09", edpi: "1236", hz: "1000", zoomSensitivity: "1.0",
			mouseAcceleration: "0", windowsSensitivity: "6", rawInput: "1",
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "300"; cl_crosshaircolor "5"; cl_crosshaircolor_b "144"; cl_crosshaircolor_g "195"; cl_crosshaircolor_r "27"; cl_crosshairdot "0"; cl_crosshairgap "-3"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "0"; cl_crosshairsize "1.5"; cl_crosshairstyle "4"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "-5";',
	},
	{
		gamerTag: "rabcau",
		image: rabcau,
		firstName: 'players.rabcau.first',
		lastName: 'players.rabcau.last',
		country: "by",
		age: "26",
		role: 'players.roles.entry',
		joined: "6.7.2019",
		nameInst: 'players.rabcau.inst',
		gamerTagGen: 'players.rabcau.gen',
		socials: {
			instagram: "https://instagram.com/litviniangaming/",
			twitch: "https://instagram.com/litviniangaming/",
		},
		story: 'players.rabcau.story',
		highlights: ['https://www.youtube.com/embed/ei285af2rWc'],
		setup: {
			devices: {
				screen: "Acer P236H", mouse: "Logitech G203", keyboard: "Acer KU-0760",
				headphones: "Logitech G230", mousepad: "SteelSeries QcK Medium",
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "60",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg,
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1",
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";',
	},
	{
		gamerTag: "SeramisV",
		image: seramisv,
		firstName: 'players.seramisv.first',
		lastName: 'players.seramisv.last',
		country: "ua",
		age: "16",
		role: 'players.roles.rifler',
		joined: "7.8.2017",
		nameInst: 'players.seramisv.inst',
		gamerTagGen: 'players.seramisv.gen',
		socials: {
			vk: "https://vk.com/creeperborn",
		},
		story: 'players.bulhkin.story',
		highlights: ['https://www.youtube.com/embed/d0bIgxM6APg'],
		setup: {
			devices: {
				screen: "Don't need one", mouse: "Knight's sword", keyboard: "Knight's shield",
				headphones: "Helm", mousepad: "Wood",
			},
			screen: {
				resolution: "1024×768", aspectRatio: "4:3", displayMode: 'player.setup.fullscreen', refreshRate: "144",
			},
			launchOptions: "-novid -high -tickrate 128",
			config: bulhkinCfg,
		},
		mouse: {
			dpi: "800", sensitivity: "1.15", edpi: "920", hz: "1000", zoomSensitivity: "1",
			mouseAcceleration: "0", windowsSensitivity: "5", rawInput: "1",
		},
		crossHair: 'cl_crosshair_drawoutline "0"; cl_crosshair_dynamic_maxdist_splitratio "0.35"; cl_crosshair_dynamic_splitalpha_innermod "1"; cl_crosshair_dynamic_splitalpha_outermod "0.5"; cl_crosshair_dynamic_splitdist "7"; cl_crosshair_outlinethickness "1"; cl_crosshair_sniper_show_normal_inaccuracy "0"; cl_crosshair_sniper_width "1"; cl_crosshair_t "0"; cl_crosshairalpha "250"; cl_crosshaircolor "1"; cl_crosshaircolor_b "255"; cl_crosshaircolor_g "100"; cl_crosshaircolor_r "100"; cl_crosshairdot "0"; cl_crosshairgap "-0.5"; cl_crosshairgap_useweaponvalue "0"; cl_crosshairscale "4"; cl_crosshairsize "4"; cl_crosshairstyle "5"; cl_crosshairthickness "0"; cl_crosshairusealpha "1"; cl_fixedcrosshairgap "3";',
	},
];