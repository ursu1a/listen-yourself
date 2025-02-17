import { Banner } from "@/components/sections/About/Banner";
import { Instagram } from "@/components/sections/About/Instagram";
import { Story } from "@/components/sections/About/Story";
import { layout } from "@/components/shared/primitives";

export default function AboutPage() {
  return (
    <div className={layout()}>
      <div className="space-y-4">
        <Banner />
        <Story />
      </div>
      <Instagram />
    </div>
  );
}
