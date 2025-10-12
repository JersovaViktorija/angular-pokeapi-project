# Pokémon Search App
### 🔗 Live Demo: https://poke-api-412ee.web.app/

A simple Angular application built for a coding challenge, allowing users to search for Pokémon by name or ID.
The app fetches live data from the [PokéAPI](https://pokeapi.co/)
 and displays detailed Pokémon information.

## Technologies

| Technology            | Purpose             |
| --------------------- | ------------------- |
| **Angular 17+**       | Front-end framework |
| **TypeScript**        | Language            |
| ** HttpClient** | Data fetching       |
| **Bootstrap**         | Styling             |
| **PokéAPI**           | Data source         |


## Features

- 🔍 Search Pokémon by name or ID
- 🧱 Modular architecture with separated components:
  - ```SearchComponent``` – handles user input
  - ```PokemonCardComponent``` – displays Pokémon data
  - ```ErrorMessageComponent``` – shows user-friendly error messages with a developer contact image
- ⚡ Real-time API integration using Angular HttpClient
- 🎨 Responsive UI built with Bootstrap and Angular best practices
- 🧹 Clean state management – only one Pokémon is shown per search

## How It Works

1. User enters a Pokémon **name** or **ID** in the search bar.
2. The ```SearchComponent``` emits the value to HomeComponent.
3. The ```HomeComponent``` calls the PokéAPI service to fetch the Pokémon.
4. On success → a ```PokemonCardComponen```t renders the Pokémon details.
5. On error → an ```ErrorMessageComponent``` shows a friendly message with CV image.

## 🧪 Example Search
| Input            | Result             |
| --------------------- | ------------------- |
| **charmeleon**       | Displays Pikachu’s card |
| **150**        | Displays Pikachu’s card  |
| **xyz123**         | Shows “Pokémon not found. Please contact the developer.” |

## 🧑‍💻 Setup & Run Locally
1. Clone the repository
```
git clone https://github.com/yourusername/pokemon-search-challenge.git
cd pokemon-search-challenge
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
ng serve
```


Then open http://localhost:4200/
 in your browser.
