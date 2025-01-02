import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [user , setUser] = useState(null);

  //buscar usuario na api
  const FetchUser = async () => {
    try{
      const response = await fetch("https://randomuser.me/api/")
      const data = await response.json();
      setUser(data.results[0]);
    }catch(error){
      console.error("Erro :" ,error);
    }
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
  <div className='min-h-screen flex flex-col items-center justify-center bg-slate-900 p-4 space-y-4'>
      <h1 className='text-white text-3xl font-bold'>Gerador de Dados Pessoais</h1>
    <div className='bg-slate-700 px-8 py-8 w-[600px] rounded-md shadow-lg'>
    {user ? 
        <div>
          <img 
          className='block mx-auto h-30 rounded-full sm:mx-0 sm:shrink-0 mb-2'
          src={user.picture.large} 
          alt="imagem de perfil"
          />

          <h2 className='font-bold text-2xl text-white'> {user.name.first} {user.name.last} </h2>
          <p className='text-white'>Email: {user.email} </p>
          <p className='text-white'>Telefone: {user.phone}</p>
          <p className='text-white'>Celular: {user.cell}</p>
          <p className='text-white'>Gênero: {user.gender}</p>
          <p className='text-white'>Cidade: {user.location.city}</p>
          <p className='text-white'>Rua: {user.location.street.name}</p>
          <p className='text-white'>Nº: {user.location.street.number}</p>
          <p className='text-white'>Estado: {user.location.state}</p>
          <p className='text-white'>País: {user.location.country}</p>
          <p className='text-white'>Idade: {user.dob.age}</p>
          
        </div>
       :(
        <p>carregando usuario ...</p>
      )}
    </div>
    <button
    onClick={FetchUser}
    className='bg-slate-800 px-4 py-2 text-white rounded-lg mt-6 hover:bg-slate-600'>
      Gerar novo Usuário
    </button>
  </div>
  );
}

export default App
