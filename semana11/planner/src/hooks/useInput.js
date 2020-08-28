import {useState} from 'react'

const useInput = (initialValues) => {

    const [form, setForm] = useState(initialValues)

    const onChange = (name, value) => {
        const newForm = {...form, [name]: value}
        setForm(newForm)
    }

    const resetInput = () => {
        setForm(initialValues)
    }

    return {form, onChange, resetInput}
}

export default useInput