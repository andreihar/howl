import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '../assets/translations/en.js';
import { be } from '../assets/translations/be.js';
import { kk } from '../assets/translations/kk.js';

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en,
			be,
			kk
		},
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;