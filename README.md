## site name: gadget heaven

## live link: 
# [https://gadget-heaven-a8.surge.sh/]

## requirement doc link:
# [https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf]

## React Fundamental concepts used in the project:
 1. React Router DOM:
 - A library that allows for dynamic routing in React applications, enabling navigation between different components and URLs without reloading the page.

2. React useLocation Hook:
- A hook provided by React Router to get the current location object. It contains information about the current URL and updates whenever the URL changes.

3. React useEffect Hook:
- A lifecycle hook that runs side effects in functional components. It can execute code on component mount, unmount, or every time specific dependencies change.

4. React useState Hook:
- A hook for managing state in functional components. It allows you to define a state variable and a function to update that variable.

5. localStorage:
- A Web API that stores data in the browser persistently, even after the page is refreshed. Useful for saving small pieces of data like user preferences.

6. React Context API:
- Provides a way to share values (like themes or user info) across the component tree without having to pass props down manually at every level.

7. Nested Component:
- Refers to a component that is placed inside another component. Useful for structuring the UI hierarchically, where parent components control layout and child components manage specific content or functionality.

## to handling and managing data i am using Local Storage

## 5 key features of this website.
1. Multi-Page Navigation with React Router DOM:
- The website is structured with multiple pages, allowing users to navigate smoothly across different sections without reloading the page, thanks to React Router DOM.

2. Dynamic Path and Parameter Tracking:
- With the useLocation hook, the website monitors the current URL path, and the useParams() hook retrieves dynamic parameters from the URL, such as IDs, for loading specific content on pages.

3. State Management with useEffect:
- The useEffect hook is used to update states based on path changes, user interactions, or data updates, ensuring that components react dynamically to changes and improve the user experience.

4. Data Fetching with loader():
- Data is fetched from APIs using loader() functions, which provide a seamless data loading experience across pages, preloading necessary data for each route.

5. Persistent Data Storage with localStorage:
- Data critical for user experience, like preferences or form inputs, is stored in localStorage, allowing it to persist across sessions, even after page reloads or tab closures.