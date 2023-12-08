import { PricingBox } from ".";

export const PricingPlansHome = () => {
  return (
    <section className="pricing section-padding bg-lightbrown">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-head text-center">
              <div className="section-subtitle">Pricing Plan</div>
              <div className="section-title">
                Styling <span>Packages</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <PricingBox />
          <PricingBox />
          <PricingBox />
        </div>
      </div>
    </section>
  );
};
