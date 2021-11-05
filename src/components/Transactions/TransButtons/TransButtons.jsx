import { BtnWrapper, Button } from './TransButtons.styled'

const TransButtons = ({ inputReset }) => (
  <BtnWrapper>
    <Button type="submit">ввод</Button>
    <Button type="button" onClick={inputReset}>
      очистить
    </Button>
  </BtnWrapper>
)

export default TransButtons
