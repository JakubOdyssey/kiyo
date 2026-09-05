import { permanentRedirect } from 'next/navigation';

export default function LegacyResellerHosting() {
  permanentRedirect('/domains');
}
