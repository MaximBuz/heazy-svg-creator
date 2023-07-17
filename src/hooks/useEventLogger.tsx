import { logEvent } from 'firebase/analytics';
import { useAnalyticsConsent } from '../contexts/AnalyticsConsentContext';

export const useEventLogger = () => {
  const cookies = useAnalyticsConsent();

  function sendEventLog(
    eventName: string,
    eventParams: Record<string, unknown>
  ) {
    if (!cookies?.consent || !cookies?.analytics) return;

    return logEvent(cookies.analytics, eventName, eventParams);
  }

  return { sendEventLog };
};
