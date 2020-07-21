import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

function TripDetailsPage() {

    const history = useHistory()
    const pathParams = useParams()

    const [detalheViagem, setdetalheViagem] = useState({})

    const onClickAdmin = () => {
        history.push("/admin")
    }

    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julio-gabriel-turing/trip/6RqhTP0529WaBUnEW0vl`, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs"
            }
        })
        .then((response) => {
            console.log("funcionou")
            setdetalheViagem(response.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }, [])

    return (
        <div>
            {pathParams.codigo}
            <button onClick={onClickAdmin}>VOLTAR</button>
        </div>
    )
}

export default TripDetailsPage