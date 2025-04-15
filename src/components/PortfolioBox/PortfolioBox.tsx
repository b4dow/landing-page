import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

export const PortfolioBox = ({ data }: Props) => {
  const { title, image, urlGithub, urlDemo } = data;
  return (
    <div className="p-4 border border-teal-50 rounded-xl flex flex-col items-center justify-center">
      <h3 className="mb-4 text-xl">{title}</h3>

      <Image
        src={image}
        alt="Image product"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
        unoptimized
      />
      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
        >
          GitHub
        </Link>
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};
