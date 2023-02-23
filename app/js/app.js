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

fetch('https://api.github.com/repos/steelesh/Hangman/commits')
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
      'js-hangman-date'
    ).innerHTML = `Last updated ${formattedDate}`;
  });

fetch('https://api.github.com/repos/steelesh/IdeaStorm/commits')
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
      'ideastorm-date'
    ).innerHTML = `Last updated ${formattedDate}`;
  });

fetch(
  'https://api.github.com/repos/steelesh/IT3049C-Final-Project-Game/commits'
)
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
      'rampant-runaway-date'
    ).innerHTML = `Last updated ${formattedDate}`;
  });

fetch('https://api.github.com/repos/steelesh/IT2045C-Lab08/commits')
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
      'tagextractor-date'
    ).innerHTML = `Last updated ${formattedDate}`;
  });

fetch('https://api.github.com/repos/steelesh/IT2045C-Lab09/commits')
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
      'datastreams-date'
    ).innerHTML = `Last updated ${formattedDate}`;
  });
