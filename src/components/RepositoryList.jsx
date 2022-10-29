import RepositoryItem from "./RepositoryItem"
import '../styles/repositories.scss'

import { useState, useEffect } from "react"

export default function RepositoryList(){
    
    const [repositories, setRepositories] = useState([])

    useEffect( () => {

        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))

    }, [])
    
    return(
        <section className="repository-list">

            <h1>Repository List JS</h1>

            <ul>
                {
                    repositories.map( repository => <RepositoryItem key={repository.name} repository={repository} />)
                }

            </ul>
        </section>
    )
}