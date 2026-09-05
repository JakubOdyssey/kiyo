import { permanentRedirect } from 'next/navigation';

export default function LegacyVps() {
  permanentRedirect('/hosting/web-hosting');
}
