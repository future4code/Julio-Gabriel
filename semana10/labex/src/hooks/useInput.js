import React, {useState} from 'react'

const useInput = () => {

    const [valor, setValor] = useState("")

    const onChangeValor = (event) => {
        setValor(event.target.value)
    }

    return [valor, onChangeValor, setValor]
}

export default useInput
