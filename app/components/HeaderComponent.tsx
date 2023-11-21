import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className='w-full h-screen bg-[#13293D] p-5 md:p-20 flex items-center gap-10'>
      <div className='flex flex-col gap-2'>
        <h3 className=' text-5xl md:text-7xl text-white text-center md:text-start'>Olá, sou Vinicius 👋</h3>
        <h1 className=' text-7xl md:text-9xl text-white text-center md:text-start'><span className='text-[#1B98E0] font-bold'>Web</span> Developer</h1>
        <div className='flex flex-col text-center md:text-start md:flex-row items-center gap-4 xl:justify-between'>
          <p className='max-w-xl text-white'>Trabalho na área desde junho de 2023. Atualmente estou como estagiário de desenvolvimento web, utilizando <a href="https://laravel.com/docs/10.x/readme" className='text-[#1B98E0]'>Laravel</a> e <a href="https://nodejs.org/en" className='
          text-[#1B98E0]'>Node.js</a> no back-end e <a href="https://react.dev" className='
          text-[#1B98E0]'>React.js</a> e <a href="https://nextjs.org" className='
          text-[#1B98E0]'>Next.js</a> no front-end.</p>
          <div className='flex gap-2'>
            <a title='Linkedin' className="text-2xl transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-[#0a66c2]" target='_blank' href="https://www.linkedin.com/in/vinicius-josé-648148202/">
              <Icon icon="bi:linkedin" />
            </a>
            <a title='Github' className="text-2xl transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-gray-600" target='_blank' href="https://github.com/Vinicius-1307">
              <Icon icon="bi:github" />
            </a>
            <a title="Currículo" className="text-2xl transition-colors text-white p-3 text-center border-4 border-white rounded-full hover:bg-white hover:text-orange-600" target='_blank' href="/curriculo-vinicius-jose.pdf">
              <Icon icon="mdi:resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}