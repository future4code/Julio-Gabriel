import React, {useState} from 'react'

const useInput = (estadoinicial) => {

    const [valor, setValor] = useState(estadoinicial)

    const onChangeValor = (event) => {
        setValor(event.target.value)
    }

    return [valor, onChangeValor]
}

export default useInput
