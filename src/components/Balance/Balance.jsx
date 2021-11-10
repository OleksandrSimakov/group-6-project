import { ZeroBalanceModal } from "../Modal/ZeroBanalceModal/ZeroBalanceModal";
import {
  BalanceForm,
  BalanceLabel,
  BalanceInput,
  BalanceButton,
  BalanceWrapper,
} from "./Balance.styled";

export default function Balance({ value }) {
  return (
    <>
      <BalanceForm>
        <BalanceLabel>Баланс:</BalanceLabel>
        <BalanceWrapper>
          <BalanceInput
            type="text"
            name="balance"
            defaultValue="00.00 UAH"
            required
          />
          <BalanceButton type="submit">ПОДТВЕРДИТЬ</BalanceButton>
        </BalanceWrapper>
      </BalanceForm>
      <ZeroBalanceModal></ZeroBalanceModal>
    </>
  );
}
