import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { I18nextProvider, useTranslation } from 'react-i18next';

import Home from './pages/Home';
import News from './pages/News';
import Teams from './pages/Teams';
import Team from './pages/Team';
import Player from './pages/Player';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const langAttribute = i18n.language === 'kk' ? 'tr' : i18n.language;
    document.documentElement.lang = langAttribute;
  }, [i18n.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:teamId" element={<Team />} />
        <Route path="/player/:playerId" element={<Player />} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;
