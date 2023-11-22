import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className='font-mono flex flex-col justify-center gap-1 py-2 bg-[#0a192f] text-[#8892b0]'>
      <div className="flex gap-8 justify-center sm:hidden">
      <a href="https://www.linkedin.com/in/vinicius-josé-648148202/" target='_blank'>
          <Icon
            width={20}
            height={20}
            icon="lucide:linkedin"
            color='#8892b0'
            className='hover:scale-125 transition-transform duration-300'
          />
        </a>
        <a 
        href="https://github.com/Vinicius-1307" 
        target='_blank'
        >
          <Icon
            width={20}
            height={20}
            icon="ri:github-line"
            color='#8892b0'
            className='hover:scale-125 transition-transform duration-300'
          />
        </a>
          <a href="https://www.instagram.com/vinicius.j10/" target='_blank'>
            <Icon
              width={20}
              height={20}
              icon="bi:instagram"
              color='#8892b0'
              className='mb-8 hover:scale-125 transition-transform duration-300'
            />
          </a>
      </div>
         <p className='font-mono flex justify-center'>Desenvolvido por Vinicius José</p>
    </div>
  )
}