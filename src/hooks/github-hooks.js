import { useContext } from "react";
import { GitHubContext } from "../providers/github-provide";

const useGitHub = () =>{
    const {gitHubState} = useContext(GitHubContext);

    return {gitHubState};
};

export default useGitHub;
