import { Icon } from "@iconify/react";

export default function AboutComponent() {
  return (
    <div className='w-full bg-[#E8F1F2] flex flex-col items-center py-10'>
        <h2 className="text-gray-800 text-2xl font-bold">Sobre</h2>
        <div className='flex rounded-lg border-gray-800 sm:pt-4 sm:pl-4 sm:pb-0 sm:pr-0 shadow-2xl'>
          <div className='flex flex-col-reverse items-center sm:items-start sm:flex-col gap-3'>
            <div className='flex flex-col gap-3 max-w-5xl text-center sm:text-start'>
              <p className="text-gray-800">Atualmente, estou desempenhando o papel de estagiário em desenvolvimento web full stack, com ênfase no backend. Utilizo as linguagens Node.js e Laravel para a criação de APIs, concentrando-me em garantir códigos com pouca necessidade de manutenção e excelente escalabilidade. No frontend, minha principal linguagem é o Next.js, onde busco aplicar as melhores práticas para o desenvolvimento de interfaces. Meu foco central está no backend, onde encontro satisfação em resolver desafios por debaixo dos panos, e é nesse domínio que pretendo direcionar minha atuação profissional.</p>
            </div>
            <div className='flex gap-2 mb-4'>
              <a title='Linkedin' className=" text-gray-800 transition-colors p-3 text-center border-4 border-gray-800  rounded-full hover:bg-gray-800  hover:text-[#0a66c2]" target='_blank' href="https://www.linkedin.com/in/vinicius-josé-648148202/">
                <Icon icon="bi:linkedin" />
              </a>
              <a title='Github' className=" text-gray-800 transition-colors  p-3 text-center border-4 border-gray-800  rounded-full hover:bg-gray-800  hover:text-gray-600" target='_blank' href="https://github.com/Vinicius-1307">
                <Icon icon="bi:github" />
              </a>
              <a title="Currículo" className=" text-gray-800 transition-colors  p-3 text-center border-4 border-gray-800  rounded-full hover:bg-gray-800  hover:text-orange-600" target='_blank' href="./curriculo-vinicius-jose.pdf">
                <Icon icon="mdi:resume" />
              </a>
            </div>
          </div>
        </div>
      </div>

  )
}