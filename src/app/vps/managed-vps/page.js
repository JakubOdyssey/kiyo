import { permanentRedirect } from 'next/navigation';

export default function LegacyManagedVps() {
  permanentRedirect('/hosting/web-hosting');
}
