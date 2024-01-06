// const axios = require('axios');
// const fs = require('fs').promises;

// const apiKey = process.env.DEVTO_API_KEY;
// const readmePath = 'README.md';

// async function fetchDEVArticles() {
//   try {
//     const response = await axios.get('https://dev.to/api/articles/me', {
//       headers: {
//         'api-key': apiKey,
//       },
//     });

//     const articles = response.data;

//     // Generate a list of blog links with titles
//     const blogList = articles.map(article => `- [${article.title}](${article.url})`).join('\n');

//     // Read existing README content
//     let readmeContent = await fs.readFile(readmePath, 'utf-8');

//     // Identify the placeholder <!-- DEV_TO_BLOGS_START --> and <!-- DEV_TO_BLOGS_END --> in README.md
//     const startMarker = '<!-- DEVTO_BLOGS_START -->';
//     const endMarker = '<!-- DEVTO_BLOGS_END -->';

//     // Replace the content between markers with the updated blog list
//     readmeContent = readmeContent.replace(
//       new RegExp(`${startMarker}[\\s\\S]*${endMarker}`),
//       `${startMarker}\n${blogList}\n${endMarker}`
//     );

//     // Write the updated README content back to the file
//     await fs.writeFile(readmePath, readmeContent);

//     console.log('Updated README.md with DEV.to blogs.');
//   } catch (error) {
//     console.error('Error fetching or updating DEV articles:', error.message);
//   }
// }

// fetchDEVArticles();
