import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { WaitText } from '../components/Registration/Registration.styled'
import { authOperations, authSelectors } from '../redux/auth'

const WaitPage = () => {
  const { email } = useParams();
  console.log('email :>> ', email);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  const dispatch = useDispatch();
   dispatch(authOperations.googleAuth(email))
  
  
  

    return (
        <>
        {!isLoggedIn && <WaitText>Подождите, пожалуйста, выполняется вход...</WaitText>}
        </>
    )
}
export default WaitPage