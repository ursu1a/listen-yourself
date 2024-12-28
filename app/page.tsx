import { Gallery } from "@/components/gallery/gallery";
import { Main } from "@/components/main";
import { Testimonials } from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-y-24 lg:gap-y-44">
      <div className="container px-6 mx-auto">
        <Main />
      </div>
      <div>
        <Testimonials />
        <div className="mt-8">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
