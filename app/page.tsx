import { GetContact } from "@/components/contact";
import { Gallery } from "@/components/gallery/gallery";
import { Main } from "@/components/main";
import { layout } from "@/components/primitives";
import { Testimonials } from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <div className={layout()}>
      <Main />
      <Gallery />
      <Testimonials />
      <GetContact />
    </div>
  );
}
