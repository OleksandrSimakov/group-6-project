import React from 'react';
import { AccessContainer, Description, Google} from './Registration.styled.jsx'
import Input from '../Input/Input.jsx'
import { AccessForm, AccessFormBotton, FormBottons } from '../AccessForm/AccessForm.styled.jsx'
import {ReactComponent as GoogleIcon} from '../../images/google.svg'

export default function Registration(){
    // const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     switch (name) {
    //         case 'name':
    //             setName(value);
    //             break;

    //         case 'email':
    //             setEmail(value);
    //             break;
            
    //         case 'password':
    //             setPassword(value);
    //             break;
            
    //         default:
    //             return;
    //     }
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch(authOperations.register({ name, email, password }));
    //     reset();
    // }

    // const reset = () => {
    // setName('');
    // setEmail('');
    // setPassword('');
    // };

    return(
        <AccessContainer>
            <Description>Вы можете авторизоваться с помощью Google Account:</Description>
            <Google>
               <GoogleIcon/>
            </Google>
            <Description>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</Description>
            <AccessForm>
                <Input
                    label="Электронная почта:"
                    type="email"
                    name="email"
                    // value={email}
                    placeholder="your@email.com"
                    required
                    // onChange={handleChange}
                />  
                
                <Input
                    label="Пароль:"
                    type="password"
                    name="password"
                    // value={password}
                    placeholder="Пароль"
                    pattern="[0-9a-fA-F]{4,8}"
                    title="Длина пароля 4-8 символов"
                    required
                    // onChange={handleChange}
                />
                <FormBottons>
                    <AccessFormBotton type="submit">Войти</AccessFormBotton>
                    <AccessFormBotton type="submit">Регистрация</AccessFormBotton>
                </FormBottons>
            </AccessForm>
           
        </AccessContainer>
    )
}