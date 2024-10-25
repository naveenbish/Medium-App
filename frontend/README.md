
# Frontend Medium Project

This is a medium-sized React application that includes a series of routes to handle navigation between different pages. Below is an overview of the main routes, components, and their functionality.

## Project Overview
This application uses React to implement a basic frontend structure with routes for different sections including a homepage, blog pages, and authentication.

### Routes
- **`/`** : Loads the `<Home />` component, which serves as the main landing page for the application.
- **`/blogs/:id`** : Loads the `<Blogs />` component, designed to display individual blog entries based on the specified ID.
- **`/blogs`** : Loads the `<Home />` component, which lists all blog entries available.
- **`/signup`** : Loads the `<Signup />` component, allowing new users to create an account.
- **`/signin`** : Loads the `<Signin />` component, allowing existing users to log in to their account.

## Components Overview
Each route corresponds to a specific React component responsible for rendering the necessary content.

- **`<Home />`** : 
  - Acts as the main page and blog listing page.
  - Provides navigation options for users and links to individual blog entries.

- **`<Blogs />`** : 
  - Displays individual blog details based on the provided `:id` parameter in the URL.
  - Fetches and shows specific blog content.

- **`<Signup />`** : 
  - Contains forms and fields for new users to create an account.
  - Handles user input validation and communicates with backend services for account creation.

- **`<Signin />`** : 
  - Contains forms and fields for returning users to log into their account.
  - Communicates with backend services for user authentication.

## Additional Setup
The `App.tsx` file includes critical application setup details such as:

1. **Redux Store** : Ensures global state management across the application.
2. **User Verification** : Implements user authentication checks.
3. **ToastContainer** : Manages toast notifications for user interactions, providing feedback on actions like login success, signup, etc.

## Project Requirements
Make sure to have Node.js installed, then run the following commands to set up and start the project:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

This README provides a structured overview of the project's main features and component interactions for easy onboarding and reference.
