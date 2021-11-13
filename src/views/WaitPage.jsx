import { useHistory, useParams } from 'react-router-dom'
import { WaitText } from '../components/Registration/Registration.styled'

const WaitPage = () => {
    const history = useHistory();
    const { email } = useParams();
    console.log('email :>> ', email);
    history.push("/balance")

    return (
        <>
          <WaitText>Подождите, выполняется вход...</WaitText>
        </>
    )
}
export default WaitPage