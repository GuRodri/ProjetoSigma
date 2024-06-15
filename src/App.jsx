import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Home from './containers/Home';
import AmbienteAdministrador from './containers/AmbienteAdministrador';
import AmbienteUsuario from './containers/AmbienteUsuario';
import CadastroAnuncios from './containers/CadastroAnuncios';
import CadastroEndereco from './containers/CadastroEndereco';
import CadastroJogos from './containers/CadastroJogos';
import CadastroProdutos from './containers/CadastroProdutos';
import CadastroUsuarios from './containers/CadastroUsuarios';
import CarrinhoCompras from './containers/CarrinhoCompras';
import Login from './containers/Login';
import ListaUsuarios from './containers/ListaUsuarios';
import ListaProdutos from './containers/ListaProdutos';
import ListaJogos from './containers/ListaJogos';
import ListaAnuncios from './containers/ListaAnuncios';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Favoritos from './containers/Favoritos';
import { SearchProvider } from './context/searchCoxtexto';
import ProtectedRoute from './routes/protectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/autContexto1';
import Unauthorized from './components/Unauthorized';
import UserProfile from './components/UserProfile';
import HomeListagem from './containers/HomeListagem';
import EditarAnuncios from './containers/EditarAnuncios';
import DetalhesAnuncios from './containers/DetalhesAnuncio';
import EditarProdutos from './containers/EditarProdutos';
import DetalhesProduto from './containers/DetalhesProduto';
import EditarUsuarios from './containers/EditarUsuarios';
import DetalhesUsuario from './containers/DetalhesUsuario';
import EditarJogos from './containers/EditarJogos';
import DetalhesJogo from './containers/DetalheJogo';
import CadastroImagens from './containers/CadastroImagens';
import ListaImagens from './containers/ListaImagens';
import RecuperarSenha from './containers/RecuperarSenha';

// Configuração do elemento da aplicação para o Modal
Modal.setAppElement('#root');

const App = () => {
  return (
    <SearchProvider>
      <AuthProvider>
        <Router>
          <Header />
          <div className='container'>
            <ErrorBoundary>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ambiente-usuario' element={<AmbienteUsuario />} />
                <Route path='/cadastro-usuarios' element={<CadastroUsuarios />} />
                <Route path='/home-listagem' element={<HomeListagem />} />
                <Route path='/recuperar-senha' element={<RecuperarSenha />} />
                <Route path='/carrinho-compras' element={<ProtectedRoute element={<CarrinhoCompras />} requiredRole={0} />} />
                <Route path='/favoritos' element={<ProtectedRoute element={<Favoritos />} requiredRole={0} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/lista-usuarios' element={<ProtectedRoute element={<ListaUsuarios />} requiredRole={1} />} />
                <Route path='/lista-produtos' element={<ProtectedRoute element={<ListaProdutos />} requiredRole={1} />} />
                <Route path='/lista-jogos' element={<ProtectedRoute element={<ListaJogos />} requiredRole={1} />} />
                <Route path='/lista-anuncios' element={<ProtectedRoute element={<ListaAnuncios />} requiredRole={1} />} />
                <Route path='/cadastro-jogos' element={<ProtectedRoute element={<CadastroJogos />} requiredRole={1} />} />
                <Route path='/cadastro-produtos' element={<ProtectedRoute element={<CadastroProdutos />} requiredRole={1} />} />
                <Route path='/cadastro-anuncios' element={<ProtectedRoute element={<CadastroAnuncios />} requiredRole={1} />} />
                <Route path='/ambiente-administrador' element={<ProtectedRoute element={<AmbienteAdministrador />} requiredRole={1} />} />
                <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} requiredRole={0} />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path='/editar-anuncios/:id' element={<ProtectedRoute element={<EditarAnuncios />} requiredRole={1} />} />
                <Route path='/detalhes-anuncios/:id' element={<ProtectedRoute element={<DetalhesAnuncios />} requiredRole={1} />} />
                <Route path='/editar-produtos/:id' element={<ProtectedRoute element={<EditarProdutos />} requiredRole={1} />} />
                <Route path='/detalhes-produtos/:id' element={<ProtectedRoute element={<DetalhesProduto />} requiredRole={1} />} />
                <Route path='/editar-usuarios/:id' element={<ProtectedRoute element={<EditarUsuarios />} requiredRole={1} />} />
                <Route path='/detalhes-usuarios/:id' element={<ProtectedRoute element={<DetalhesUsuario />} requiredRole={1} />} />
                <Route path='/editar-jogos/:id' element={<ProtectedRoute element={<EditarJogos />} requiredRole={1} />} />
                <Route path='/detalhes-jogos/:id' element={<ProtectedRoute element={<DetalhesJogo />} requiredRole={1} />} />
                <Route path='/cadastro-imagens' element={<ProtectedRoute element={<CadastroImagens />} requiredRole={1} />} />
                <Route path='/editar-imagens' element={<ProtectedRoute element={<CadastroImagens />} requiredRole={1} />} />
                <Route path='/detalhes-imagens' element={<ProtectedRoute element={<CadastroImagens />} requiredRole={1} />} />
                <Route path='/lista-imagens' element={<ProtectedRoute element={<ListaImagens />} requiredRole={1} />} />
              </Routes>
            </ErrorBoundary>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </SearchProvider>
  );
};

export default App;
