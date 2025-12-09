
 function WhyAttendCard({ title, text, img }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>

      {/* On Hover Bright Overlay */}
      <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-8 z-10">
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className="opacity-80">{text}</p>
      </div>
    </div>
  );
}

export default WhyAttendCard
