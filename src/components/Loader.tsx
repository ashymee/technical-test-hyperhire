type LoaderProps = {
  size: number;
  isSlider?: boolean;
};

export default function Loader({ size = 1, isSlider = false }: LoaderProps) {
  if (size > 1) {
    return (
      <div className="grid grid-cols-6 gap-6 w-full h-max p-4">
        {new Array(size).fill(null).map((_, index) => (
          <div key={index} className="w-full h-24 bg-[#0094D7]/50 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  return <div className={`w-full ${isSlider ? 'h-[88]' : 'h-2/3'} bg-white/20 animate-pulse rounded-lg`} />;
}
