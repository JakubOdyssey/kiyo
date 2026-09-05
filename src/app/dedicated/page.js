import { permanentRedirect } from 'next/navigation';

export default function LegacyDedicated() {
  permanentRedirect('/hosting/web-hosting');
}
