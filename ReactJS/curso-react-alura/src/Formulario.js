import React, {Component} from "react";
class Formulario extends Component{
    constructor(props) {
        super(props);
        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }
        this.state = this.stateInicial;
    }
    escutadordeInputs = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    submitFormulario = () =>{
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const {nome, livro, preco} = this.state;
        return(
            <form>
                <div className={"row"}>

                    <div className={"input-field col s4 "}>
                        <label className={"input-filed"} htmlFor="nome">Nome</label>
                        <input
                            className={"validate"}
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadordeInputs}
                        />
                    </div>

                    <div className={"input-field col s4 "}>
                        <label className={"input-filed"} htmlFor="livro">Livro</label>
                        <input
                            className={"validate"}
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadordeInputs}
                        />
                    </div>

                    <div className={"input-field col s4 "}>
                        <label className={"input-filed"} htmlFor="preco">Preço</label>
                        <input
                            className={"validate"}
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadordeInputs}
                        />
                    </div>

                </div>
                    <button onClick={this.submitFormulario} className="waves-effect waves-light #e57373 red lighten-2 btn" type="button">Salvar
                    </button>

            </form>
        );
    }


}
export default Formulario;