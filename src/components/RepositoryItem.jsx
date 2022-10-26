export default function RepositoryItem(props){

    return(
        <li>
            <strong> {props.repository.name ?? 'Default name'}</strong>
            <p> {props.repository.description ?? 'Default description'} </p>

            <a href={props.repository.description ?? 'Default description'}>
                Acesse o Link
            </a>

        </li> 

    )
}