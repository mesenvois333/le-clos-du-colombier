interface Props {
  stats: { value: string; label: string; suffix: string }[];
}

export default function VenueStats({ stats }: Props) {
  return (
    <section className="bg-white py-16 border-b border-[#E4E1DB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i > 0 ? "border-l border-[#E4E1DB]" : ""}`}>
              <div className="font-display text-4xl md:text-5xl font-light text-[#8B6947]">
                {stat.value}
                {stat.suffix && <span className="text-2xl ml-0.5">{stat.suffix}</span>}
              </div>
              <div className="font-body text-[10px] text-[#7A7A7A] mt-2 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
