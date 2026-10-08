
import './App.css'
import Cabecalho from './components/Cabecalho'
import CardCurso from './components/CardCurso'
import Destaque from './components/Destaque'
import { cursos } from './db'

function App() {

  return (
    <>
      <span className='cabecalho' ><Cabecalho title = "Catálogo de Cursos" descricao = "Conheça algumas formações disponíveis na área de tecnologia." /></span>

      <div className='container'>
        {
          cursos.map( i => {
            return <CardCurso nome={i.nome}  duracao={i.duracao} modalidade={i.modalidade} nivel={i.nivel} vagas={i.vagas } />
          })
        }
      </div>

      <span className='linha'></span>

      <Destaque
      titleDestaque = "Aprenda fazendo"
      descricaoDestaque = "Desenvolva projetos durante sua formação."
      />
      <Destaque
      titleDestaque = "Prática constante"
      descricaoDestaque = "Construa sistemas reais ao longo dos seus estudos."
      />
      <Destaque
      titleDestaque = "Evolução técnica"
      descricaoDestaque = "Aprimore suas habilidades com desafios práticos."
      />

    </>
  )
}

export default App
