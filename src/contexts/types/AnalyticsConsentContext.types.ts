import { Analytics } from 'firebase/analytics';

export interface IAnalyticsConsent {
  consent: boolean;
  analytics: Analytics | null;
}
