# Pokémon Search App
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


##🚀 Features

- 🔍 Search Pokémon by name or ID

- 🧱 Modular architecture with separated components:

  - ```SearchComponent``` – handles user input

  - ```PokemonCardComponent``` – displays Pokémon data

  - ```ErrorMessageComponent``` – shows user-friendly error messages with a developer contact image

-⚡ Real-time API integration using Angular HttpClient

-🎨 Responsive UI built with Bootstrap and Angular best practices

-🧹 Clean state management – only one Pokémon is shown per search
