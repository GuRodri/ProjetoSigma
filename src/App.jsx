
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import AmbienteAdministrador from './containers/AmbienteAdministrador';
import AmbienteUsuario from './containers/AmbienteUsuario';
import CadastroAnuncios from './containers/CadastroAnuncios';
import CadastroEndereco from './containers/CadastroEndereco';
import CadastroJogos from './containers/CadastroJogos';
import CadastroProdutos from './containers/CadastroProdutos';
import CadastroUsuarios from './containers/CadastroUsuarios';
import CarrinhoCompras from './containers/CarrinhoCompras';
import HomeListagem from './containers/HomeListagem';
import Login from './containers/Login';
import ListaUsuarios from './containers/ListaUsuarios';
import ListaProdutos from './containers/ListaProdutos';
import ListaJogos from './containers/ListaJogos';
import ListaAnuncios from './containers/ListaAnuncios';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Favoritos from './containers/Favoritos';

const App = () => {
  return (
  <Router>
    <Header />
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home />} />
              <Route path='/ambiente-administrador' element={<AmbienteAdministrador />} />
              <Route path='/ambiente-usuario' element={<AmbienteUsuario />} />
              <Route path='/cadastro-anuncios' element={<CadastroAnuncios />} />
              <Route path='/cadastro-endereco' element={<CadastroEndereco />} />
              <Route path='/cadastro-jogos' element={<CadastroJogos />} />
              <Route path='/cadastro-produtos' element={<CadastroProdutos />} />
              <Route path='/cadastro-usuarios' element={<CadastroUsuarios />} />
              <Route path='/carrinho-compras' element={<CarrinhoCompras />} />
              <Route path='/home-listagem' element={<HomeListagem />} />
              <Route path='/login' element={<Login />} />
              <Route path='/lista-usuarios' element={<ListaUsuarios />} />
              <Route path='/lista-produtos' element={<ListaProdutos />} />
              <Route path='/lista-jogos' element={<ListaJogos />} />
              <Route path='/lista-anuncios' element={<ListaAnuncios />} />
              <Route path='/favoritos' element={<Favoritos />} />
        </Routes>
      </div>
    <Footer />
</Router>
  );
}

export default App;
