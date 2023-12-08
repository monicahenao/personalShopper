import {
  AboutHome,
  HeaderHome,
  ServicesHome,
  ServicesBox,
  VideoHome,
  PricingPlansHome,
  Testimonials,
  StyleGallery,
  BlogHome,
  ClientsHome,
} from "../components/molecules";
import { AppointmentForm } from "../components/organisms";

export const Home = () => {
  return (
    <>
      {/* <!-- Header Video --> */}
      <HeaderHome />
      {/* <!-- About --> */}
      <AboutHome />
      {/* <!-- Services --> */}
      <ServicesHome />
      {/* <!-- Services Box --> */}
      <ServicesBox />
      {/* <!-- Video --> */}
      <VideoHome />
      {/* <!-- Pricing --> */}
      <PricingPlansHome />
      {/* <!-- Testimonials --> */}
      <Testimonials />
      {/* <!-- Style Gallery --> */}
      <StyleGallery />
      {/* <!-- Blog --> */}
      <BlogHome />
      {/* <!-- Appointment Form --> */}
      <AppointmentForm />
      {/* <!-- Clients --> */}
      <ClientsHome />
    </>
  );
};
