export const getRepositories = async (): Promise<any> => {
    const data = await fetch(
      "https://api.github.com/users/linuxmobile/repos?per_page=50",
      {
        headers: {
          Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
        },
      }
    ).then((res) => res.json());
  
    return data;
  };
  