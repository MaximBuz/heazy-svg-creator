import { useToast } from '@chakra-ui/react';
import { getAnalytics } from 'firebase/analytics';
import React, { useContext, useEffect, useState } from 'react';
import CookieToast from '../components/CookieToast';
import { app } from '../firebase';
import { getCookie, setCookie } from '../utils/helpers/cookies';
import { IAnalyticsConsent } from './types/AnalyticsConsentContext.types';

const AnalyticsConsentContext = React.createContext(null);

export function useAnalyticsConsent() {
  return useContext<IAnalyticsConsent>(AnalyticsConsentContext);
}

export function AnalyticsConsentProvider({ children }) {
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

  const value: IAnalyticsConsent = {
    consent: consent,
    analytics: analytics,
  };
  return (
    <AnalyticsConsentContext.Provider value={value}>
      {children}
    </AnalyticsConsentContext.Provider>
  );
}
