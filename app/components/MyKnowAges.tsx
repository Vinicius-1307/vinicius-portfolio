import KnowledgeList from "./KnowledgeList";
import { knowages } from '../config/knowages';
import Image from "next/image";

export default function MyKnowAges() {
  return (
    <>
    <div className="flex w-full bg-[#0a192f] items-center sm:flex-row gap-10">
      <div className='p-10 md:pl-72 flex flex-col'>
        <h2 className="font-bold mb-10 text-[#ccd6f6] text-4xl"><span className="font-mono text-[#64ffda]">01.</span> Sobre</h2>
        <p className="max-w-[540px]">Olá! Meu nome é Vinicius. Entrei para o mercado da programação em Junho de 2023. Atualmente estou como estagiário em <span className="text-[#64ffda]">Desenvolvimento Web</span>. Na minha empresa realizo integrações com APIs externas e internas. Sou responsável por desenvolver códigos no back-end e integrar com o front-end. Aqui abaixo estão alguns dos meus conhecimentos:</p>
          <div className='flex gap-2 flex-wrap max-w-[540px]'>
            <KnowledgeList knowages={knowages} type='language' title='Linguagens' />
            <KnowledgeList knowages={knowages} type='framework' title='Frameworks' />
            <KnowledgeList knowages={knowages} type='tools' title='Ferramentas' />
            <KnowledgeList knowages={knowages} type='styles' title='Estilização' />
          </div>
      </div>
    <Image className="hidden shadow-xl shadow-[#64ffda] sm:block rounded-lg" src={"/img/vinicius-profile.png"} alt="Imagem Vinicius" width={300} height={50} />
    </div>
  </>
  )
}