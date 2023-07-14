import { useToast } from '@chakra-ui/react';
import { Analytics, getAnalytics } from 'firebase/analytics';
import React, { useContext, useEffect, useState } from 'react';
import CookieToast from '../components/cookieToast';
import { app } from '../firebase';
import { getCookie, setCookie } from '../utils/helpers/cookies';

interface ICookiesDrawer {
  consent: boolean;
  analytics: Analytics | null;
}

const CookiesContext = React.createContext(null);

export function useCookies() {
  return useContext<ICookiesDrawer>(CookiesContext);
}

export function CookiesProvider({ children }) {
  const [consent, setConsent] = useState(false);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const cookie = getCookie('consent');
    if (cookie === 'true') {
      setConsent(true);
      setAnalytics(getAnalytics(app));
    } else {
      setConsent(false);
      setAnalytics(null);
    }
  }, []);

  function accept() {
    setConsent(true);
    setAnalytics(getAnalytics(app));
    setCookie('consent', true, 365);
  }
  function decline() {
    setConsent(false);
    setCookie('consent', false, 7);
    window['ga-disable-D3RLD70Q2Y'] = true;
  }

  const cookieConsent = useToast();

  useEffect(() => {
    setTimeout(() => {
      const cookie = getCookie('consent');
      if (cookie === undefined) {
        !cookieConsent.isActive('cookie') &&
          cookieConsent({
            position: 'bottom',
            duration: null,
            isClosable: true,
            id: 'cookie',
            render: () => (
              <CookieToast
                accept={accept}
                decline={decline}
                close={() => cookieConsent.close('cookie')}
              />
            ),
          });
      }
    }, 4000);
  }, []);

  const value: ICookiesDrawer = {
    consent: consent,
    analytics: analytics,
  };
  return (
    <CookiesContext.Provider value={value}>{children}</CookiesContext.Provider>
  );
}
