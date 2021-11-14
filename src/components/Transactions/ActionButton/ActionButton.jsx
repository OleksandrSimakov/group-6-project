import { ActionButton } from '../TransForm/TransForm.styled'
const MainButton = ({ type, onClick = null, text }) => (
  <ActionButton type={type} onClick={onClick}>
    {text}
  </ActionButton>
)

export default MainButton
