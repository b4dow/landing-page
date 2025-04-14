import {
  AvatarPortfolio,
  CircleImage,
  Container,
  PortfolioBox,
  TransitionPage,
} from "@/components";
import { dataPortfolio } from "@/data/data";

const PortfolioPage = () => {
  return (
    <>
      <Container>
        <TransitionPage />
        <AvatarPortfolio />
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Mis Ultimos{" "}
            <span className="text-secondary font-bold">
              trabajos realizados
            </span>
          </h1>
          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PortfolioPage;
