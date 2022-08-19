import { createContext, useContext, useState } from 'react'
import { Container, TitleContainer } from './styles'


const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <TitleContainer>
      Aumentar: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(activeCycle + 1)
        }}
      >
        Aumentar o ciclo ativo
      </button>
    </TitleContainer>
  )
}

function Countdown() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <TitleContainer>
      Diminuir: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(activeCycle - 1)
        }}
      >
        Diminuir o ciclo ativo
      </button>
    </TitleContainer>
  )
}


export function Home() {
  const [activeCycle, setActiveCycle] = useState(100)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <Container>
        <NewCycleForm />
        <Countdown />
      </Container>
    </CyclesContext.Provider>
  )
}