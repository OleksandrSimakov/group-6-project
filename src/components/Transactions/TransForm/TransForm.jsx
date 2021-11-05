import TransButtons from '../TransButtons/TransButtons'
import TransEntry from '../TransEntry/TransEntry'

import { Form, FormContainer } from './TransForm.styled'

const TransactionsForm = ({ category, data, income, expense }) => {
  return (
    <Form type="submit" /* onSubmit={handleSubmit} */>
      <FormContainer></FormContainer>

      <TransEntry />
      <TransButtons /* inputReset={inputReset} */ />
    </Form>
  )
}

export default TransactionsForm
