# Github Users Finder

  This Angular application allows users to search for GitHub users using the GitHub API. It incorporates RxJS for handling asynchronous operations, NgRx for state management, and provides a clean and user-friendly interface.

## Features

- **Search Box:** Enter a GitHub username in the search box.
- **Debouncing:** API requests are triggered only after the user has stopped typing for at least 300 milliseconds.
- **State Management:** Utilizes NgRx for managing the application state.
- **Error Handling:** Displays appropriate messages for potential API errors.

## Requirements

- Angular
- RxJS
- NgRx
- TailwindCSS

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hassan-kamel/talabeyah-angular-task
   ```

2. **Install dependencies:**
   ```bash
   cd talabeyah-angular-task
   npm install
   ```

3. **Run the application:**
   ```bash
   ng serve
   ```

4. **Open your browser:**
   Visit [http://localhost:4200/](http://localhost:4200/) to use the application.

## Usage

1. Enter a GitHub username in the search box.
2. Wait for at least 300 milliseconds after typing to trigger the API request.
3. View the list of users returned from the GitHub API.
4. Handle any potential errors gracefully.

## Contributing

Feel free to contribute to the development of this project. Follow the standard GitHub flow: fork, clone, branch, commit, push, and open a pull request.

## License

This project is licensed under the [MIT License](#github-users-finder).
```
Feel free to modify and customize it based on your project's specifics!
