import RepositoryItem from "./RepositoryItem"
import '../styles/repositories.scss'

import { useState, useEffect } from "react"

export default function RepositoryList(){

    interface Repository{
        name: string;
        description: string;
        html_url: string;
    }
    
    const [repositories, setRepositories] = useState<Repository[]>([])

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