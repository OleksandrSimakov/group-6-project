import PropTypes from 'prop-types';
import { CurrentInput, CurrentLabel } from './Input.styled';

export default function Input({
  label,
  type,
  name,
  value,
  pattern = null,
  title = null,
  placeholder,
  onChange,
}) {
  return (
    <CurrentLabel>
      {label}
      <CurrentInput
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
      />
    </CurrentLabel>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
