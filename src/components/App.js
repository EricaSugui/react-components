import React from 'react';
import Card from './Card';
import Title from './Title';
import Table from './Table';
import NavItem from './NavItem';

class App extends React.Component {

  state = {
    nav: [
      {titulo: "Home", link: "#"},
      {titulo: "Página interna", link: "#"},
      {titulo: "Contato", link: "#"},
      {titulo: "Sobre", link: "#"},
      {titulo: "Blog", link: "#"},
    ],
    users: [
      {titulo: "Victor", cor: "Verde", comida: "Lasanha"},
      {titulo: "Victor", cor: "Verde", comida: "Lasanha"},
      {titulo: "Maria", cor: "Cinza", comida: "Arroz"}
    ]
  }

  render() {
    return (
      <div>
        <nav className="green darken-4">
          <div className="container">
            <ul>
              <NavItem titulo="Home" />
              <NavItem titulo="Pagina interna" />
              <NavItem titulo="Contato" />
            </ul>
          </div>
        </nav>
        <div className="container">
          
          <Title titulo="Home Page" />
      
          <h3 className="title green-text"> Listagem de usuários </h3>    
          <Table users={this.state.users} />
          
          <h3 className="title green-text"> Cartões de usuários </h3>
          <div className="row">
            {this.state.users.map((user) => 
              <Card titulo={user.titulo} cor={user.cor} comida={user.comida} foto="https://cdn.meutimao.com.br/_upload/idolos-do-corinthians/vampeta.jpg" />
            )}
          </div>

          <h3 className="title green-text"> Adicionar usuário </h3>
          <form>
            <div className="input-field col s6">
              <input id="first_name" name="nome" type="text" className="validate" />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s6">
              <input id="cor_favorita" name="cor_favorita" type="text" className="validate" />
              <label htmlFor="cor_favorita">Cor favorita</label>
            </div>
            <div className="input-field col s6">
              <input id="comida_favorita" name="comida_favorita" type="text" className="validate" />
              <label htmlFor="comida_favorita">Comida favorita</label>
            </div>
            <div className="input-field col s6">
              <input id="link_github" name="link_github" type="text" className="validate" />
              <label htmlFor="link_github">Github</label>
            </div>
            <div className="right-align">
              <a class="waves-effect waves-light green btn" onClick={e => {this.setState({
                ...this.state
                , users: [
                  ...this.state.users,
                  {titulo: "Maria", cor: "Cinza", comida: "Arroz"}
                ]}) }}>button</a>
            </div>
          </form>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
