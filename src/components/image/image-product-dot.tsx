export default function ImageProductDot() {
  return (
    <div className="absolute w-full h-full z-50 overflow-hidden">
      <Dot />
    </div>
  );
}

export function Dot() {
  return (
    <div className="absolute w-0 h-0 z-50 left-[50%] top-[50%]">
      <div className="absolute top-[-.75rem] left-[-.75rem] w-[1.5rem] h-[1.5rem] rounded-full bg-white opacity-80 z-50" />
      <div className="absolute top-[-1.25rem] left-[-1.25rem] w-[2.5rem] h-[2.5rem] rounded-full bg-slate-300 animate-pulse cursor-pointer" />
    </div>
  );
}
