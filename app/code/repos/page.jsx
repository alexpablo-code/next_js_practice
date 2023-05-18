import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';



async function fetchRepos(){
    const response = await fetch('https://api.github.com/users/alexpablo-code/repos');
    const repos = await response.json();
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    console.log(repos); 
    return (
        <div>
            Repos Page
            <div className="repos-container">
                {repos.map(repo => (
                    <div className="single-repo" key={repo.id}>
                        <h4>{repo.name}</h4>
                        <div className="repo-details">
                            <span>
                                <FaStar/> {repo.stargazers_count}
                            </span>
                            <FaCodeBranch/> {repo.forks_count}
                            <FaEye/> {repo.watchers_count}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ReposPage;
