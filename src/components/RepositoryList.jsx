import RepositoryItem from "./RepositoryItem"

import '../styles/repositories.scss'

export default function RepositoryList(){

    const repository={
        name:'Form 1',
        description: 'This is a form made from React!',
        link: 'https://github.com'
    }
    const repository2={
        
        description: '2This is a form made from React!',
        link: 'https://github.com'
    }
    
    return(
        <section className="repository-list">

            <h1>Repository List JS</h1>

            <ul>

                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository2} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />

            </ul>
        </section>
    )
}