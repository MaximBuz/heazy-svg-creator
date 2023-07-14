import { logEvent } from 'firebase/analytics';
import { useCookies } from '../contexts/Cookies';

export const useEventLogger = () => {
  const cookies = useCookies();

  function sendEventLog(
    eventName: string,
    eventParams: Record<string, unknown>
  ) {
    if (!cookies.consent || !cookies.analytics) return;

    return logEvent(cookies.analytics, eventName, eventParams);
  }

  return { sendEventLog };
};
