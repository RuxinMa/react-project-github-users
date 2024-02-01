## Project Review

### Tach Stack
- Framwork: React
- Environment: Create React App
- Build: Netlify

### Introduce
Create a website to search github users and display their information (including name, image, following and repos data)

Connect with the third-party platform (email, Google, Linkedln) through **Auth0**, and confirm whether to display the homepage by obtaining the user's login status (authenticated).

Disassemble the project through the components of the page, the user's status, etc., as shown in the figure (project-review.png) ![Review](project-review.png)

### Testing Case

@sarah_edo 
@john_smilga  
@cassidoo 



## Other Info

### Gihthub API
- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. 
  Unauthenticated requests are associated with the originating IP address, and not the user making requests.

### Fusion Charts
- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

### Auth0
- [Auth0 - Main Docs](https://auth0.com/)
- Connections
  email, linkedln, google

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

### Deployment
[Netlify](https://www.netlify.com/)