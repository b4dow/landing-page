import {
  AvatarServices,
  CircleImage,
  Container,
  SliderServices,
  TransitionPage,
} from "@/components";

const PageServices = () => {
  return (
    <>
      <Container>
        <TransitionPage />
        <CircleImage />
        <AvatarServices />
        <div className="grid items-center md:h-screen lg:h-0 max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 ">
          <div className="">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis <span className="text-secondary font-bold">servicios</span>
            </h1>
            <p className="mb-3 text-xl text-center  text-gray-300">
              Ofrezco servicios de desarrollo web frontend especializados en la
              creación de sitios web y aplicaciones atractivas y funcionales.
              Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
              diseño interfaces de usuario intuitivas y responsivas que reflejan
              la identidad de marca de mis clientes y mejoran su presencia en
              línea.
            </p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
              Contacta conmigo
            </button>
          </div>
          {/* SLIDER */}
          <div>
            <SliderServices />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PageServices;
