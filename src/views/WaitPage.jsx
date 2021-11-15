import {useDispatch } from 'react-redux'
import { WaitText } from '../components/Registration/Registration.styled'
import { authOperations } from '../redux/auth'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

const WaitPage = () => {
    const location = useLocation()
    const { email} = queryString.parse(location.search)
    console.log('queryParams :>> ', email);

   const dispatch = useDispatch();
   dispatch(authOperations.googleAuth(email))
  
   return (
        <WaitText>Подождите, пожалуйста, выполняется вход...</WaitText>
    )
}
export default WaitPage