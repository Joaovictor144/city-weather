import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./NavigationTopBar.style";

export function NavigationTopBar(){
  const location = useLocation();
  const navigate = useNavigate();

  return(
    <S.Container>
      {location.pathname !== '/' && <S.Button onClick={()=> navigate('/')}>Home</S.Button>}
      {(location.pathname !== '/viewbyAddress' && location.pathname !== '/') && <S.Button onClick={()=> navigate('/viewbyAddress')}>View by Address</S.Button>}
      {(location.pathname !== '/viewbylocation' && location.pathname !== '/') && <S.Button onClick={()=> navigate('/viewbylocation')}>View by Location</S.Button>}
    </S.Container>
  )
}