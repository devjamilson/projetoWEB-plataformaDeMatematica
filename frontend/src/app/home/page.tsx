import './style.scss';
import Header from '../componentes/header';
import { RespostasProvider } from '../context/RespostasContext';
import User from '../componentes/user';
import Exercicios from '../componentes/exercicios';

import Gabarito from '../componentes/gabarito';

export default function Home() {
  return (
    <RespostasProvider> 
        <div className='home-page'>
              <div className='container-header-home'>
                <Header />
                <User />
              </div>

              <div className='container-exercicio-home'>
                <div className='container-exercicios'>
                  <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={0}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={1}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={2}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={3}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={4}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={5}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={6}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={7}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={8}
                    />
                    <Exercicios 
                      descricao="Qual é o resultado de 5 + 3?"
                      a="6"
                      b="7"
                      c="8"
                      d="9"
                      e="10"
                      certa="8"
                      index={9}
                    />
                </div>
                <div className='container-gabarito'>
                   <Gabarito></Gabarito>
                </div>
              </div>
            </div>
    </RespostasProvider>
    
  );
}
