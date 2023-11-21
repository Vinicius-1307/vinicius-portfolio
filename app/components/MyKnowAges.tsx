import KnowledgeList from "./KnowledgeList";
import { knowages } from '../config/knowages';

export default function MyKnowAges() {
  return (
    <div className='w-full bg-[#006494] p-10 flex flex-col items-center'>
      <h2 className="text-white text-2xl font-bold">Meus Conhecimentos</h2>
        <div className='flex gap-2 flex-wrap justify-start'>
          <KnowledgeList knowages={knowages} type='language' title='Linguagens' />
          <KnowledgeList knowages={knowages} type='framework' title='Frameworks' />
          <KnowledgeList knowages={knowages} type='tools' title='Ferramentas' />
          <KnowledgeList knowages={knowages} type='styles' title='Estilização' />
        </div>
  </div>
  )
}