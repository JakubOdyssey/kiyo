import { permanentRedirect } from "next/navigation";

export default function LegacyWebHostingPage() {
  permanentRedirect("/hosting-plans");
}
