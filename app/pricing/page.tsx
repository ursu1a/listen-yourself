import { PlansList } from "@/components/pricing/PlansList";
import { container, subtitle, title } from "@/components/shared/primitives";
import { siteConfig as strings } from "@/config/site";
import { fetchPlans } from "@/lib/plans";

export default async function PricingPage() {
  const plans = await fetchPlans();

  return (
    <div className="space-y-12 lg:space-y-20">
      <div className={container({ className: "pt-6 lg:pt-16 text-center" })}>
        <div className="mb-3">
          <h1 className={title({ size: "sm" })}>{strings.pricing.title}</h1>
        </div>
        <h2
          dangerouslySetInnerHTML={{ __html: strings.pricing.description }}
          className={subtitle({ className: "text-default-500 font-light" })}
        />
      </div>
      <PlansList items={plans} />
    </div>
  );
}
