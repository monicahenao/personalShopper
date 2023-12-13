import {
  AboutHome,
  HeaderHome,
  ServicesHome,
  ServicesBox
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
      {/* <!-- Pricing --> */}
      {/* <!-- Testimonials --> */}
      {/* <!-- Style Gallery --> */}
      {/* <!-- Blog --> */}
      {/* <!-- Appointment Form --> */}
      <AppointmentForm />
      {/* <!-- Clients --> */}
    </>
  );
};
