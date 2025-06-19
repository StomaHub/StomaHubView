//Propriedades esperadas pelo componete
type StarsProps = {
    stars: number;
}

export default function Stars({ stars }: StarsProps) {
  return (
    <div className="flex flex-row gap-[3px]">
      {Array.from({ length: stars }).map((_, i) => (
        <img
          key={i}
          src="/icons/star.svg"
          alt="star"
          className="w-[18px]"
        />
      ))}
    </div>
  );
}