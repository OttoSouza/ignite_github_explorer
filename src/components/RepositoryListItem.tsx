interface RepositoryListItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}



function RepositoryListItem(props: RepositoryListItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>
        {props.repository.description ??
          "This repository doenst have a description"}
      </p>
      <a href={props.repository.html_url}>Go to the repository</a>

    </li>
  );
}

export default RepositoryListItem;
