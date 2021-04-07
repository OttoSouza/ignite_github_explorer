import { useState, useEffect } from "react";
import RepositoryListItem from "./RepositoryListItem";
import "../styles/repositories.scss";

interface RepositoryListProps {
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {


  const [repositories, setRepositories] = useState<RepositoryListProps[]>([]);

  useEffect(() => {
    fetch(" https://api.github.com/users/OttoSouza/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryListItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

export default RepositoryList;

