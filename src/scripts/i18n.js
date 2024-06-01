import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '../assets/translations/en.js';
import { be } from '../assets/translations/be.js';
import { kk } from '../assets/translations/kk.js';

import convert from './cyrToLat.js';

i18n
	.use({
		type: 'postProcessor',
		name: 'lacinkaPostProcessor',
		process: function (value, key, options, translator) {
			if (translator.language === 'be-Latn') {
				return convert(value);
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
