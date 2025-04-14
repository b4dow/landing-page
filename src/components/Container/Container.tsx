interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="w-full max-w-6xl px-4 mb-40 mx-auto mt-40 md:pb-0 md:px-6">
      {children}
    </div>
  );
};
