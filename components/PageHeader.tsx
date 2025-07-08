interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f75101] to-[#e64100]">
        {backgroundImage && (
          <img src={backgroundImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover opacity-20" />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  )
}
