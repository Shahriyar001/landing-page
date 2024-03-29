import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import mackbook from "@/assets/macbook-pro-15-2016-smontato-2.jpeg";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't worry</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">
          Wekcome to{" "}
          <span className=" text-primary-foreground font-semibold">
            iRepair
          </span>
          , your one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">
            {" "}
            Macbook repair{" "}
          </span>{" "}
          and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[35deg] h-[95%] object-contain"
          src={mackbook}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
