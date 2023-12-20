const axios = require('axios');
const fs = require('fs');

const devToApiKey = process.env.DEVTO_API_KEY;
const devToUsername = 'your_devto_username';

axios.get(`https://dev.to/api/articles?username=${devToUsername}`)
  .then((response) => {
    const latestArticle = response.data[0];
    const readmeContent = `
    # Welcome to My GitHub Profile

    ## Latest DEV.to Article
    - Title: [${latestArticle.title}](${latestArticle.url})
    - Published on: ${new Date(latestArticle.published_at).toDateString()}
    `;

    fs.writeFileSync('README.md', readmeContent);
  })
  .catch((error) => {
    console.error('Error fetching data from DEV.to:', error.response ? error.response.data : error.message);
    process.exit(1);
  });
