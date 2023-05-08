import { useMemo } from 'react';
import * as S from './App.style';

function App() {
  const widthScreen = useMemo(()=> window.innerWidth, [])

  return (
    <S.Container widthScreen={widthScreen}>
      <S.Head>
        <h1>City Information</h1>
      </S.Head>
      <S.Main>
        <S.Button to="viewbylocation">View by device location</S.Button>
        <S.Button to="viewbyAddress">Enter address</S.Button>
      </S.Main>
    </S.Container>
  )
}





export default App
