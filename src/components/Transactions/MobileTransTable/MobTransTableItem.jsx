import {
  TransactionItem,
  DescriptionWrap,
  CategoryDateWrap,
  Description,
  DateItem,
  Category,
  AmountWrap,
  AmountHigh,
  AmountLow,
  DeleteIconBtnWrapper,
} from './MobTransTable.styled'
import { ReactComponent as DeleteIcon } from '../../../images/delete.svg'
import { format } from 'date-fns'

const MobTransTableItem = ({ item, profit, onDelete }) => {
  return (
    <TransactionItem key={item._id}>
      <DescriptionWrap>
        <Description>{item.description}</Description>
        <CategoryDateWrap>
          <DateItem>{format(new Date(item.date), 'dd.MM.yyyy')}</DateItem>
          <Category>{item.category}</Category>
        </CategoryDateWrap>
      </DescriptionWrap>

      <AmountWrap>
        {profit ? (
          <AmountHigh>{`${item.amount.toFixed(2)} грн.`}</AmountHigh>
        ) : (
          <AmountLow>{`${-item.amount.toFixed(2)} грн.`}</AmountLow>
        )}
        {item.action}
        <DeleteIconBtnWrapper type="button" onClick={() => onDelete(item._id)}>
          <DeleteIcon />
        </DeleteIconBtnWrapper>
      </AmountWrap>
    </TransactionItem>
  )
}
export default MobTransTableItem
