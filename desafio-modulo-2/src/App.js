import React from 'react';
import './App.css';
import Movies from './data.js';
import { useState, useEffect } from 'react';

import Logo from "./assets/images/logo.svg";
import IconeFavorito from "./assets/images/bookmark-icon.svg";
import IconePromocao from "./assets/images/promotion-icon.svg";
import FotoPerfil from "./assets/images/profile.jpg";
import IconeLupa from "./assets/images/search-icon.svg";
import IconeEstrelaPreenchida from "./assets/images/golden-star.svg";
import IconeCupom from "./assets/images/coupon-icon.svg";
import IconeSacola from "./assets/images/bag-icon.svg";
import IlustracaoPessoa from "./assets/images/person-illustration.svg";

const filtros = [
  {
    nome: "Todos",
    valor: "todos"
  },
  {
    nome: "Ação",
    valor: "action"
  },
  {
    nome: "Romance",
    valor: "romance"
  },
  {
    nome: "Ficção Centífica",
    valor: "science fiction"
  },
  {
    nome: "Terror",
    valor: "horror"
  },
];

function App() {
  const [filtro, setFiltro] = useState("todos");
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);

  function handleFilter(novoFiltro) {
    setFiltro(novoFiltro)
  }

  function filtrarPeloBotao(filtrados) {
    if (filtro === "todos") return filtrados;

    if (filtrados.categories.includes(filtro)) return filtrados;
  }

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="input">
          <form>
            <input type="text" placeholder="Pesquise aqui..." />
            <button><img src={IconeLupa} /></button>
          </form>
        </div>

        <div className="favoritos">
          <h2><img src={IconeFavorito} />Favoritos</h2>
        </div>

        <div className="promocoes">
          <h2><img src={IconePromocao} />Promoções</h2>
        </div>

        <div className="profile">
          <h2>Bem vindo Dina<img src={FotoPerfil} /></h2>
        </div>
      </header>

      <main>
        <div className="top-filmes">
          <h2>Top Filmes</h2>
          <div>
            <ul>{
              Movies.slice(0, 5).map(movies =>
                <li>
                  <img src={movies.backgroundImg} className="background-filme" />
                  <p className="titulo-top-filmes">{movies.title}</p>
                  <img src={IconeEstrelaPreenchida} className="icone-estrela" /><span className="pontuacao">{movies.starsCount}</span>
                  <button className="botao-sacola">Sacola <span>R$ {movies.price.toFixed(2)}</span></button>
                </li>
              )}
            </ul>
          </div>

          <div className="container-filmes">
            <h2>Filmes</h2>
            <div className="filtros">
              {filtros.map((movies) =>
                <button id={filtro === movies.valor ? "botoes-filtros-selecionado" : ""} className="botoes-filtros" onClick={() => handleFilter(movies.valor)}>{movies.nome}</button>
              )}
            </div>

            <div className="filmes">
              <ul>{
                Movies.filter(filtrarPeloBotao).map(movies =>
                  <li>
                    <img src={movies.backgroundImg} className="background-filme" />
                    <p className="titulo-top-filmes">{movies.title}</p>
                    <img src={IconeEstrelaPreenchida} className="icone-estrela" /><span className="pontuacao">{movies.starsCount}</span>
                    <button className="botao-sacola">Sacola <span>R$ {movies.price.toFixed(2)}</span></button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>


      </main>

      <aside>
        <div className="container-sacola">
          <div className="titulo-sacola">
            <h2><img src={IconeSacola} />Sacola</h2>
          </div>
          
          <div className="sacola-vazia">
            <h3>Sua sacola está vazia</h3>
            <h4>Adicione filmes agora</h4>

            <img src={IlustracaoPessoa} />
          </div>

          <div className="sacola-cupom">
            <label>Insira seu cupom</label>
            <input type="text" placeholder="Cupom de desconto" /><img src={IconeCupom} />
          </div>
        </div>
      </aside>
    </div >
  );
}

export default App;
