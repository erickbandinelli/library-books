import React from "react";
import { useForm } from "react-hook-form";
import { FiSearch, FiUser } from "react-icons/fi";
import PageHeader from './style';

const Header = () => {
  const { register, errors } = useForm();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.href="/";
  }

  return (
    <>
      <PageHeader>
        <div className="logo">
          <h1>Mega Library</h1>
        </div>

        <div className="formSearch">
          <form>
            <input 
              className={errors.search && 'input-error'}
              type="search" 
              name="search"
              ref={register({ 
                required: true
              })}
              placeholder="Buscar por..." />

            <button type="submit"><FiSearch /></button>
          </form>
        </div>

        <div className="profile">
          <div className="iconLinks">
            <div className="iconProfile"><FiUser /></div>
            <div className="nameUser">
              Olá SoftDesign
              <span onClick={handleLogout}>Sair</span>
            </div>
          </div>
        </div>
      </PageHeader>
    </>
  );
};

export default Header;