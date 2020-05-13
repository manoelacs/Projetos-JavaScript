import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from "./Header";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import styled from 'styled-components';

class App extends Component{
    state = {
        autores: [
            {
                nome: 'Paulo',
                livro: 'React',
                preco: '1000'
            },
            {
                nome: 'Daniel',
                livro: 'Java',
                preco: '99'
            },
            {
                nome: 'Marcos',
                livro: 'Design',
                preco: '150'
            },
            {
                nome: 'Bruno',
                livro: 'DevOps',
                preco: '100'
            },
            {
                nome: 'Carlos',
                livro: 'Testes',
                preco: '300'

            },
            {
                nome: 'Carlos',
                livro: 'Testes',
                preco: '300'

            }
        ],
    };
    removeAutor =  index => {
        const {autores} = this.state;

        this.setState({
            autores: autores.filter((autor, posAtual) => {
                //console.log(index, posAtual);
                return posAtual !== index;
            }),
        })

    }
    escutadorDeSubmit = autor =>{
        this.setState({autores:[...this.state.autores, autor]})
    }
    render(){
        return(
                <Fragment>
                    <Header/>
                    <div className="container mb-10">
                        <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor}/>
                        <Formulario escutadorDeSubmit = {this.escutadorDeSubmit}/>
                    </div>

                </Fragment>

        )
    }
}




export default App;
