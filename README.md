# blog-exercise
To the run the app:

1) Clone the repo with: git clone https://github.com/danield770/blog-exercise.git
2) cd blog-exercise/client
3) npm i (installs the client packages)
4) cd ..
5) npm i (installs the server packages)
6) npm run dev
7) open a browser at: http://localhost:5173/

##Please note:
I really wanted to to deploy the app on a platform like vercel, but I wasn't successful in doing so due to the server I was using for the mock-data (json-server)

## Some Comments

1) For the data fetching, caching and updating server state I have made use of [TanStack Query](https://tanstack.com/query/v4) (formerly known as 'React Query') 
2) For the language-switcher component I used the [popover component from Radix-UI](https://www.radix-ui.com/docs/primitives/components/popover)
3) For the CSS in the app I used [CSS-modules](https://github.com/css-modules/css-modules)
4) I made use of [logical properies](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) throughout the CSS, so switching between a LTR language and a RTL language becomes trivial requiring only toggling the `direction` property on the root element of the app from 'ltr' to 'rtl'.
5) I made use of localStorage to persist the user's choice language over a page refresh.

