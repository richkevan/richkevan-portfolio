import { Octokit } from "octokit";

const octokit = new Octokit({auth: import.meta.env.PUBLIC_GITHUB_ALT});

const getRepos = async () => {
  return await octokit.rest.repos.listForUser({
    username: "richkevan",
    since: "2023-01-01",
  });
}

const getGists = async () => {
  return await octokit.rest.gists.listForUser({
    username: "richkevan",
    
  });
};

const getDeployments = async ({repo}:{repo: string}) => {
  return await octokit.request(`/repos/richkevan/insta_clone/pages`, {
    owner: "richkevan",
    repo,
  });
}

export {
  getDeployments,
  getGists,
  getRepos 
};