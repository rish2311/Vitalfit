# Fitness App

This project is a fitness app built using React.js. It leverages the RapidAPI and YouTube API to fetch exercise data and related YouTube videos, respectively. The Material-UI (Mui) library is also used for achieving responsiveness in the application's design.

Website Link-"https://fitness-app-five-drab.vercel.app/"

## Features

- **Exercise Data Retrieval**: The app integrates with the RapidAPI to fetch exercise data, including exercise types and descriptions.
- **YouTube Video Integration**: The app utilizes the YouTube API to retrieve relevant exercise videos from YouTube based on the selected exercise type.

## Installation

1. Clone the repository:

   \`\`\`
   git clone https://github.com/Snehagupta1907/Fitness-app.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`
   cd fitness-app
   \`\`\`

3. Install the dependencies:

   \`\`\`
   npm install
   \`\`\`

4. Create a \`.env\` file in the project root directory and add the necessary API keys:

   \`\`\`
   REACT_APP_RAPIDAPI_KEY=YOUR_RAPIDAPI_KEY
   REACT_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
   \`\`\`

5. Start the development server:

   \`\`\`
   npm start
   \`\`\`

6. Open the app in your browser at \`http://localhost:3000\`.

## Usage

1. Upon launching the app, you will see a list of exercise types retrieved from the RapidAPI.
2. Select an exercise type from the list to view related YouTube videos.
3. Click on a video thumbnail to watch the exercise video.
4. You can also navigate back to the exercise list to choose a different exercise type.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

