import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoCompartilhar extends Component {
	state = {
		input1: ""
	}

	onClickCompartilhar = event => {
		console.log(event.target.value)
		this.setState({ input1: event.target.value })
	}

	render() {
		return <div className={'comment-container'}>
			<button>Facebook</button>
            <button>Instagram</button>
            <button>Twitter</button>
		</div>
	}
}