import { Icon } from "@iconify/react";

export default function SocialMediaComponent(){
  return (
    <div className='hidden md:flex fixed flex-col gap-6 top-[500px] left-20'>
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
        <div className="flex flex-col items-center">
          <a href="https://www.instagram.com/vinicius.j10/" target='_blank'>
            <Icon
              width={20}
              height={20}
              icon="bi:instagram"
              color='#8892b0'
              className='mb-8 hover:scale-125 transition-transform duration-300'
            />
          </a>
          <div className="border-l border-[#8892b0] h-56"></div>
        </div>
    </div>
  )
}