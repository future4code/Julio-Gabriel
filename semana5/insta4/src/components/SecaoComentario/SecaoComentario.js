import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		input1: ""
	}

	onChangeComentario = event => {
		console.log(event.target.value)
		this.setState({ input1: event.target.value })
	}

	render() {
		return <div className={'comment-container'}>
			<input
				name={"input1"}
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.input1}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
