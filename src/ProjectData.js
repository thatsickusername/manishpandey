import project1 from './images/SkilllyBackground.png'
import project2 from './images/shoestore.png'
import project3 from './images/giphy.gif'
import project4 from './images/project4.jpeg'

const ProjectData = [
    {
        projectTitle: "SKILLLY",
        projectType: "Content writing practicing platform",
        projectTech: "React js, node js, Mongo DB, React Router",
        projectText: "A web app that helps budding content writers by providing them a platform to practice and learn from the community via a comprehensive mechanism of community feedback. The app provides the users with a list of prompts to write articles that are used to create a portfolio of the user’s best work. The quality of a user’s work is judged using reviews given by other users along with a self produced algorithm.",
        projectGitHubLink: "https://github.com/SKILLLY/Main-Website",
        projectWebsite: "https://skillly.netlify.app/",
        projectImage: project1    
    },

    {
        projectTitle: "Project Shoe Store",
        projectType: "Frontend Web Development, State management using Context API",
        projectTech: "React js, Css, Context API, Hooks, React router",
        projectText: "It is a beautifully designed, interactive eCommerce website with a carefully chosen color palette and a consistent design system.Users can choose the products they like and add them to the shopping cart. A  notification badge shows the number of items in the cart at any given time dynamically. The states of the cart items are being managed using context API and useContext hook.",
        projectGitHubLink: "https://github.com/thatsickusername/project-shoes-store",
        projectWebsite: " https://project-shoe-store.netlify.app",
        
        projectImage: project2  
    },

    {
        projectTitle: "Giphy Clone",
        projectType: "Frontend Web Development, Data Fetching from Giphy API",
        projectTech: "React js, Css, Axios, Hooks, Asynchronous javascript",
        projectText: "It is a clone website of the popular GIF distributing service Giphy using the Giphy API endpoints. A total of two Giphy API endpoints are being used in this project (trending and searching). Users can Browse and look through the trending GIFs on the Giphy platform. The users can also search for a term that they want the GIFs search results for. The user login button takes the user to the actual Giphy Login portal. The GIFs are being displayed in a beautiful masonry layout for a space efficient design like the actual website. ",
        projectGitHubLink: "https://github.com/thatsickusername/giphy-clone",
        projectWebsite: "https://project-giphy-clone.netlify.app",

        projectImage: project3 
    },

    {
        projectTitle: "Portfolio Website",
        projectType: "Frontend Web Development, Animation using Gsap, UX/UI design",
        projectTech: "React js, Css, Gsap js, Hooks, React router",
        projectText: "A minimal design Personal portfolio website with clean animations and user interface. The animation are programmed with GSAP.js and ScrollTrigger Plugin. The projects are displayed with simple square tiles. The details of the projects are also displayed in a separate page. The data about all the projects is being stored in a separate array is re used to keep the code clean",
        projectGitHubLink: "https://github.com/thatsickusername/manishpandey",
        projectWebsite: " https://manishpandey.netlify.app",
        
        projectImage: project4 
    }

]

export default ProjectData
