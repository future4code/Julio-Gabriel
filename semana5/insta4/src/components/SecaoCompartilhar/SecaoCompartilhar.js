import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {

	state = {
		input1: ""
	}

	onChangeInput1 = event => {
		this.setState({ input1: event.target.value });
	}

	onClickCompartilheiFacebook = () => {
		console.log("Post compartilhado no Facebook com a mensagem: " + this.state.input1)
		this.setState({ input1: ""})
	}

	onClickCompartilheiInstagram = () => {
		console.log("Post compartilhado no Instagram com a mensagem: " + this.state.input1)
		this.setState({ input1: ""})
	}

	onClickCompartilheiTwitter = () => {
		console.log("Post compartilhado no Twitter com a mensagem: " + this.state.input1)
		this.setState({ input1: ""})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className="input-compartilhei"
				name={"input1"}
				value={this.state.input1}
				onChange={this.onChangeInput1}
			/>
			<button onClick={this.onClickCompartilheiFacebook}>Facebook</button>
			<button onClick={this.onClickCompartilheiInstagram}>Instagram</button>
			<button onClick={this.onClickCompartilheiTwitter}>Twitter</button>
		</div>
	}
}


          
