fetch('https://api.github.com/repos/steelesh/personal-portfolio/commits')
  .then((response) => response.json())
  .then((commits) => {
    // Get the date of the most recent commit
    const latestCommitDate = new Date(commits[0].commit.committer.date);

    // Format the date to mm/dd/yyyy
    const formattedDate = `${
      latestCommitDate.getMonth() + 1
    }/${latestCommitDate.getDate()}/${latestCommitDate.getFullYear()}`;

    // Display the formatted date in the HTML
    document.getElementById(
      'personal-portfolio-date'
    ).innerHTML = `Last updated ${formattedDate}`;
  });
