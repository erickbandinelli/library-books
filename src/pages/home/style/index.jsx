import React from "react";
import { useForm } from "react-hook-form";
import PageLogin from './style';
import { useDispatch } from 'react-redux';
import { loadRequestUsers } from '../../store/ducks/users/actions';

const Home = () => {
  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    dispatch(loadRequestUsers(data));
  };

  return (
    <>
      <PageLogin>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <input 
            className={errors.email && 'input-error'}
            type="email" 
            name="email"
            ref={register({ 
							required: true
						})}
            placeholder="Digite seu E-mail" />
          <input 
            className={errors.password && 'input-error'}
            type="password" 
            name="password"
            ref={register({ 
							required: true
						})}
            placeholder="Digite sua Senha" />

          <button type="submit">Entrar</button>
        </form>
      </PageLogin>
    </>
  );
};

export default (Home);