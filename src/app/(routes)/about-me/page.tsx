import {
  Avatar,
  Container,
  CounterServices,
  TimeLine,
  TransitionPage,
} from "@/components";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi{" "}
          <span className="font-bold text-secondary">
            trayectoria profesional
          </span>
        </h1>
        <CounterServices />
        <TimeLine />
      </Container>
    </>
  );
};

export default PageAboutMe;
