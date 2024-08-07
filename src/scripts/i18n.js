import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '../assets/translations/en.js';
import { be } from '../assets/translations/be.js';
import { kk } from '../assets/translations/kk.js';

import belToLat from './belLat.js';
import kazToLat from './kazLat.js';

i18n
	.use({
		type: 'postProcessor',
		name: 'lacinkaPostProcessor',
		process: function (value, _key, _options, translator) {
			if (translator.language === 'be-Lat') {
				return belToLat(value);
			}
			if (translator.language === 'kk-Cyr') {
				return value;
			}
			if (translator.language === 'kk') {
				return kazToLat(value);
			}
			return value;
		}
	})
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
		},
		postProcess: ['lacinkaPostProcessor'],
	});

export default i18n;
