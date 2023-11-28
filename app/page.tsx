'use client'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import KnowledgeList from './components/KnowledgeList';
import Image from 'next/image';
import { knowages } from './config/knowages';

export default function Home() {

    const [openMenu, setOpenMenu] = useState(false);

    function handleLinkMenu() {
      setOpenMenu(false);
    }

  return (
    <main className="min-h-screen relative">
      {/* NAVBAR */}
      <header
        className={`w-full fixed flex justify-around items-center sm:py-5 py-2 border-b-2 border-teal-200 border-opacity-5 bg-[#0a192f] z-40 ${
          openMenu
            ? "max-[769px]:flex-col max-[769px]:h-screen max-[769px]:justify-start max-[769px]:backdrop-brightness-50 max-[769px]:transition-all"
            : ""
        }`}
      >
        <div className="max-[769px]:flex max-[769px]:justify-around max-[769px]:items-center max-[769px]:w-full">
          <div
            className="cursor-pointer z-50"
          >
            <a href='#header' className="font-mono sm:text-2xl text-[#64ffda]">Vinicius J. DEV</a>
          </div>
          <Icon
            icon="ep:close-bold"
            color="#64ffda"
            width={40}
            height={40}
            className={`min-[769px]:hidden cursor-pointer z-50 hover:scale-110 ${
              openMenu ? "" : "max-[769px]:hidden"
            }`}
            onClick={() => setOpenMenu(false)}
          />
          <Icon
            icon="ci:menu-alt-01"
            color="#64ffda"
            width={40}
            height={40}
            className={`min-[769px]:hidden cursor-pointer z-50 hover:scale-110 ${
              openMenu ? "max-[769px]:hidden" : ""
            }`}
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <nav
          className={`z-50 text-white ${
            openMenu ? "max-[769px]:flex mt-10" : "max-[769px]:hidden"
          }`}
        >
          <ul
            className={`flex gap-5 items-center max-[769px]:flex-col ${
              openMenu ? "max-[769px]:text-center" : ""
            }`}
          >
            <a
              href='#header'
              className="hover:text-[#64ffda] transition-all flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">01.</span>Home</h2>
            </a>
            <a
              href='#sobre'
              className="hover:text-[#64ffda] transition-all flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">02.</span>Sobre</h2>
            </a>
            <a
              href='#tecnologies'
              className="hover:text-[#64ffda] transition-all flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">03.</span>Tecnologias</h2>
            </a>
            <a
              href='#footer'
              className="hover:text-[#64ffda] flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">04.</span>Contato</h2>
            </a>

            <li className="hover:scale-105 transition-all flex flex-col">
              <a className="cursor-pointer text-[#64ffda] font-mono border-2 border-[#64ffda] p-2 rounded-md" href="./curriculo-vinicius-jose.pdf">Curriculo</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* FIM */}

      {/* SOCIALMEDIA */}
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
      {/* FIM */}

      {/* EMAIL */}
      <div className='hidden md:flex fixed flex-col gap-6 top-[500px] right-5'>
        <div className="flex flex-col items-center">
          <a href="https://www.instagram.com/vinicius.j10/" target='_blank'>
            <p className="font-mono text-[#8892b0] rotate-90 mb-32">viniciusjose9@outlook.com</p>
          </a>
          <div className="border-l border-[#8892b0] h-56"></div>
        </div>
      </div>
      {/* FIM */}

      {/* HEADER */}
      <section id='header' className='w-full h-screen bg-[#0a192f] pl-5 md:px-72 flex items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-mono text-[#64ffda] text-lg md:text-lg  text-start'>Olá, meu nome é</h1>
          <h2 className="font-sans font-bold text-4xl md:text-7xl text-[#ccd6f6]">Vinicius José.</h2>
          <h2 className="font-sans font-bold text-3xl md:text-7xl text-[#8892b0]">Sou Desenvolvedor Web.</h2>
          <p className="max-w-[500px] text-[#8892b0]">Sou desenvolvedor de sistemas, atualmente como estagiário. Atualmente meu foco está voltado para o back-end, onde eu realmente me encontro.</p>
        </div>
      </section>
      {/* FIM */}

      {/* SOBRE */}
      <section id='sobre' className="flex w-full bg-[#0a192f] items-start sm:flex-row gap-10">
        <div className='p-10 md:pl-72 flex flex-col'>
          <h2 className="font-bold mb-10 text-[#ccd6f6] text-3xl"><span className="font-mono text-[#64ffda]">02.</span> Sobre</h2>
          <p className="max-w-[540px] text-[#8892b0]">Olá! Meu nome é Vinicius. Entrei para o mercado da programação em Junho de 2023. Atualmente estou como estagiário em <span className="text-[#64ffda]">Desenvolvimento Web</span>. Na empresa onde trabalho realizo integrações com APIs externas e internas. Sou responsável por desenvolver códigos no back-end e integrar com o front-end. Aqui abaixo estão alguns dos meus conhecimentos:</p>
        </div>
        <Image className="hidden shadow-xl shadow-[#64ffda] sm:block rounded-lg" src={"/img/vinicius-profile.png"} alt="Imagem Vinicius" width={300} height={0} />
      </section>
      {/* FIM */}

      {/* TECS */}
      <section id='tecnologies' className="flex w-full bg-[#0a192f] items-center sm:flex-row gap-10">
        <div className='p-10 md:pl-72 flex flex-col'>
          <h2 className="font-bold mb-10 text-[#ccd6f6] text-3xl"><span className="font-mono text-[#64ffda]">03.</span> Tecnologias</h2>
            <div className='sm:flex gap-2 flex-wrap'>
              <KnowledgeList knowages={knowages} type='language' title='Linguagens' />
              <KnowledgeList knowages={knowages} type='framework' title='Frameworks' />
              <KnowledgeList knowages={knowages} type='tools' title='Ferramentas' />
              <KnowledgeList knowages={knowages} type='styles' title='Estilização' />
            </div>
        </div>
      </section>
      {/* FIM */}

      {/* FOOTER */}
      <section id='footer' className='font-mono flex flex-col justify-center gap-1 py-2 pl-4 bg-[#0a192f] text-[#8892b0]'>
        <div className='flex items-center gap-8'>
          <form className='w-full bg-[#0a192f] pl-5 md:pl-72 flex items-start gap-10 flex-col rounded-xl pr-5 pb-5 sm:min-w-[450px] max-w-[800px]'>
          <h2 className="font-bold mb-10 text-[#ccd6f6] text-3xl"><span className="font-mono text-[#64ffda]">04.</span> Contato</h2>
            <fieldset className="flex flex-col">
              <label htmlFor="name" className="sm:text-base text-xs">
                Nome
              </label>
              <input
                id="name"
                placeholder="Cristiano Ronaldo"
                className="rounded px-3 py-2 bg-transparent w-[300px] sm:w-96 border-b-2 border-[#64ffda] placeholder:text-gray-600"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="email" className="sm:text-base text-xs">
                Email
              </label>
                <input
                  id="email"
                  type="email"
                  className="rounded px-3 py-2 bg-transparent w-[300px] sm:w-96 border-b-2 border-[#64ffda]placeholder:text-gray-600"
                  placeholder="mail@mail.com"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="message" className="sm:text-base text-xs">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="rounded px-3 py-2 bg-transparent w-[300px] sm:w-96 border-b-2 border-[#64ffda] focus:outline-none focus:border-teal-300 resize-none placeholder:text-gray-600"
                  placeholder="Olá, gostei muito do seu portfolio..."
                />
              </fieldset>
              <button
                type="submit"
                className="self-start py-2 px-3 bg-transparent border-2 border-teal-300 rounded-md text-teal-300 transition-all hover:opacity-80 mt-2"
              >
                Enviar
              </button>
          </form>
              <Image className="hidden sm:block rounded-lg" src={"/img/email.svg"} alt="Imagem Vinicius" width={300} height={50} />
          
        </div>
        <div className="flex gap-8 justify-center mt-8 sm:hidden">
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
          <p className='font-mono flex justify-center sm:mt-6'>Desenvolvido por Vinicius José</p>
      </section>
      {/* FIM */}
    </main>
  )
}
