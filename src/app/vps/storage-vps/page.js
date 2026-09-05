import { permanentRedirect } from 'next/navigation';

export default function LegacyStorageVps() {
  permanentRedirect('/hosting/web-hosting');
}
