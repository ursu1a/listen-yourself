import { Contact } from "@/components/sections/Contact/Сontact";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Main } from "@/components/sections/Main/Main";
import { layout } from "@/components/shared/primitives";
import { TestimonialsList } from "@/components/sections/Testimonials/TestimonialsList";

export default function Home() {
  return (
    <div className={layout()}>
      <Main />
      <Gallery />
      <TestimonialsList />
      <Contact />
    </div>
  );
}
