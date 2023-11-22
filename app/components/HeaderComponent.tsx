export default function Header() {
  return (
    <div className='w-full h-screen bg-[#0a192f] pl-5 md:px-72 flex items-center gap-10'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-mono text-[#64ffda] text-lg md:text-lg  text-start'>Olá, meu nome é</h1>
        <h2 className="font-sans font-bold text-4xl md:text-7xl text-[#ccd6f6]">Vinicius José.</h2>
        <h2 className="font-sans font-bold text-3xl md:text-7xl text-[#8892b0]">Sou Desenvolvedor Web.</h2>
        <p className="max-w-[500px] text-[#8892b0]">Sou desenvolvedor de sistemas, atualmente como estagiário. Atualmente meu foco está volado para o back-end, onde eu realmente me encontro.</p>
      </div>
    </div>
  )
}