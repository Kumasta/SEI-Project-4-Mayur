### General Assembly Project-4: Full-stack Project. 
#  --Giveaway Bae--

Contributors: [Mayur Kumar](https://github.com/Kumasta), [Bashar Othman](https://github.com/greenplastic90)

### Project Link : https://mayur-sei-porject-4.herokuapp.com/
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/94964514/159168887-5d5fdad7-fa66-4b60-abf1-4a6e04b6650d.png">

## Table of Contents

- [Brief](#brief)
- [Concept](#concept)
- [Languages, Packages and, technology used](#languages-packages-and-technology-used)
  - [Back-end](#back-end)
  - [Front-end](#front-end)
- [Approach](#approach)
    - [Document-Model-Breakdown](#document-model-breakdown)
    - [API-End-Points](#api-end-points)
    - [Front-end components](#front-end-components)
      - [Nav-Bar](#nav-bar)
      - [Home Page](#home-page)
      - [Showcase](#showcase)
      - [Search Page](#search-page)
      - [Dashboard Page](#dashboard-page)
      - [Profile Page](#profile-page)
      - [Styling](#styling)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements--changes)
- [Main Takeaways](#main-takeaways)
- [Contact](#contact)

## Brief


## Concept


## Languages, Packages and, technology used:
- JavaScript
- JSX (HTML5 via react)
- Python 

### Back-end
- django
- psycopg2-binary
- pylint 
- autopep8
- djangorestframework
- pyjwt

### Front-end
- @chakra-ui/icons
- @chakra-ui/react
- @emotion/react
- @emotion/styled
- @react-icons/all-files
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- buffer
- emotion-theming
- fontsource-inter
- framer-motion
- react
- react-dom
- react-dotenv
- react-router
- react-router-dom
- react-scripts
- react-select

## Approach


### Document Model Breakdown. 

#### User Model

#### Pin Model


### API-End-Points
(* secure route)   
(+ Body required)   
({ } id/text/token)

#### Giveaways
- Get all `Get /api/giveaways/` 
- Get one `Get /api/giveaways/{giveaway ID}/` 
- Post new*+ `POST /api/giveaways/`     
![image](https://user-images.githubusercontent.com/94964514/159490560-8f6cc06d-e68a-4fd5-9f06-eb32d55d2aa7.png) 
- Update one*+ `PUT /api/giveaways/{giveaway ID}/`    
![image](https://user-images.githubusercontent.com/94964514/159490641-bedbb702-c71f-45b2-a78a-e85318c0b998.png) 
- Delete one* `DELETE /api/giveaways/{giveaway ID}/`    

For the purpose of a user being able to "watch" a giveaway, we stored the giveaway Id in the user profile in a watchlist and the user ID is stored in the giveaway record in a watcher_list field. At the time of building this project we were not able to figure out a smooth way to do this in one request. So we made an end-point for the giveaway so that the User does not need to be the owner of the giveaway to update that ID array. For ease of checking & updating the array we create an unpopulated GET endpoint to get an array of numbers and not objects. 

- Get one unpopulated giveaway `GET /api/giveaways/update/{giveaway ID}/`     
- Update giveaway* (Non-owner) `PUT /api/giveaways/update/{giveaway ID}/`     
![image](https://user-images.githubusercontent.com/94964514/159493219-fb550337-69a4-4ea4-b9fe-0bd690266f90.png) 


#### Comments   
- Add comment*+ `POST /api/giveaways/comments/`     
![image](https://user-images.githubusercontent.com/94964514/159491006-67b074b8-77ef-4b38-a852-9b4f35d0ec4f.png) 
- Updated comment*+ `PUT /api/giveaways/comments/{comment ID}/`     
![image](https://user-images.githubusercontent.com/94964514/159491115-6aadcd27-b692-4fd8-8fda-f277654dec96.png) 
- Delete comment* `DELETE /api/giveaways/comments/{comment ID}/`  

#### Login & Register
- Register User+ `POST /api/register/`      
![image](https://user-images.githubusercontent.com/94964514/159491227-7023c17c-9e13-4437-8cd4-6fb09d0c2068.png) 
- Login user+ `POST /api/login/`     
![image](https://user-images.githubusercontent.com/94964514/159491261-a0d3b79c-e058-48f9-b9fc-e95e52d61b60.png) 

#### User Profile
- Get one profile `GET /api/profile/{user ID}/`     
- Update own profile*+ `GET /api/profile/{user ID}/`     
![image](https://user-images.githubusercontent.com/94964514/159491699-71dc50bf-ffed-4ff6-a008-4aa8c04e3608.png) 
- Delete user* `DELETE /api/profile/{user ID}/` 

#### Regions & Categories
For the purpose of populating drop down select forms  
- Get all regions `Get /api/regions/` 
- Get all categories `Get /api/categories/` 

### Front-end components

#### Nav-Bar

Navbar houses 4 main sections. The brand, the text search bar, colour mode toggle and navigation link buttons. In desktop view as seen in the image below, links to register/login will change to profile and/or dashboard and, logout when user is logged in. If user is not verified then the dashboard link will not display. When the user types into the search bar hit search, the page will navigate to the search page and pass the search text state with it.      

Desktop:       
<img width="1298" alt="image" src="https://user-images.githubusercontent.com/94964514/159913196-98bb7182-6718-41ec-957a-57552f3a9ebe.png">

In mobile view, nav links are moved into a drop down opened by the burger button.     

Mobile:       
<img width="768" alt="image" src="https://user-images.githubusercontent.com/94964514/159913271-30318b1c-288d-44e5-9b9e-b111d5cd3328.png">


#### Home page

Home page in its current version houses 2 parts, the site banner and giveaway carousel. As we made the site with charak for all components, the dark mode taggle will invert all colours with their default unless specified, as the banner was imported as an image, it would not be affected when the colour changes. To get around this, I made the banner background transparent so it takes on the background colour of the page.  

Dark mode on Banner:

![Dark mode on banner](https://user-images.githubusercontent.com/94964514/159914783-97dcf0fc-5a71-48db-bfbe-b86f4de0d8d0.gif)

Carousel:

The carousel was made with a Chakra carousel prototype and is currently populated with a card map from all the records in the giveaway GET all requests. The carousel moves from either drag/swipe or the arrow buttons below. By the end of the build time, image normalisation was not fully complete and needs to be addressed as images can be uploaded in any size or ratio at this time. Some pictures bleed into the bottom of the cards in mobile view.     

![Carousel gif](https://user-images.githubusercontent.com/94964514/159914218-7b69cf6f-5dac-4441-9389-4cc0aa2def0a.gif)


#### Showcase

From the showcase, users can view all information about the giveaway. Including an end date as well as a live countdown to that end date. If the end date has passed, the countdown will switch to a 'Giveaway Ended' text. Logged in users can also add the giveaway to their watch list by hitting the button, this will automatically add the giveaway ID to their array field and add the users ID to the giveaway watching array field. The feedback is given immediately by making the GET request again and populating the watcher list. Users can also follow a verified by clicking their username (Not a clear feature in this version) as seen below. Following a user at this stage has no effect for the User but will show up for the verified user at this stage.      
Main:     

![Showcase top](https://user-images.githubusercontent.com/94964514/159915319-59b1c998-dbf9-4caf-b3de-f476e96ed78c.gif)    

Logged in users can leave comments by typing into the comment box that only appears when logged in. Otherwise site visitors will see a prompt to login instead. If the user is the owner of a comment, they will see options to either edit or delete their comment with a popover prompt.    

Comment section:      

![Comment gif](https://user-images.githubusercontent.com/94964514/159915927-b1e9d24e-2f8c-4015-bef0-1630377adac4.gif)

#### Search Page

When on the search page, it will bring up all the giveaways on the site, users will be able to sort by several methods and by category drop down. Users can also type in text into the search bar to filter down the results.     

![SearchPage](https://user-images.githubusercontent.com/94964514/159916656-bea7c970-a8c9-4a5e-af53-09a02daaf02d.gif)

#### Dashboard page
If a verified user is logged in, they will be able to go to their dashboard. Here they can manage their giveaways and create new ones. They will also be able to see how many people are following them 

![Dashboard](https://user-images.githubusercontent.com/94964514/159918084-23fb5a89-c78d-46ac-bfc1-8a4491cfc28c.gif)

Form Errors:

From the giveaway form, if there is missing or unvalid data in a form field, 'toast' popup errors appear to indicate to the user that there is an issue with their new or updated giveaway form. 

![Toast](https://user-images.githubusercontent.com/94964514/159918902-3b12a220-aa9f-407f-b410-db8ead8d8c70.gif)

#### Profile Page

Profile page is built from the same components as the dashboard but currently has less features. Users can see the giveaways they are following and in the future they will also be able to update their profile details. 

<img width="600" alt="image" src="https://user-images.githubusercontent.com/94964514/159917150-55d74e84-6eb2-4008-bc23-9ab2931da77a.png">

### Styling

For this project, we did not use any CSS files. We relied on inline styling and native chakra features. We needed to import some books in order to achieve the colour change toggle. On the index page we needed to import `ColourModeScript`

![image](https://user-images.githubusercontent.com/94964514/159956709-3ecb7c7a-6965-4e9b-a94c-92ad3b6125b7.png)

The colour toggle button calls a functions from the `useColorMode` hook 

![image](https://user-images.githubusercontent.com/94964514/159956846-9947eb93-a026-4fd6-b597-1b20230945ca.png)

We used the native colour values for the majority of the build but for certain buttons and tags, we had to create a colour variable to store the colour for light and dark mode for the system to toggle between. 

![image](https://user-images.githubusercontent.com/94964514/159956943-11d5b054-ad25-4f62-bd54-7e718629eda2.png)

## Challenges

- First time using Chakra UI in a build, took some learning time to learn its component structure and we also choose not to use any CSS/SASS. Needed to learn more inline styling syntax to get it the way we wanted it to.   

- This was our first bask-end database built in Django python, there was a steep learning curve for us to get all the components (Models, serializers, views, urls etc.) learnt and working. Model relationships between user and giveaway many to many fields where not as dynamic as we had hoped it would be and we want to go back to improve this.   


## Future Improvements / Changes

- Re-work the relationship with the user model field 'watchlist' and giveaways 'Watching_list' to make the exchange of ID more dynamic rather than having to separate API requests and have one instead.

- Add state of giveaways when the time has expired, visually show that is finished and place them in another section on search results and dashboard/profile pages.  

- Like and reply system to comments. They have been built into the models but not implemented due to time and key targets during build time. 

- Homepage carousel images need standardisation in size and ratio. 

- Homepage banner does not look good in light mode, would scrap and build it in Chakra. 

## Main Takeaways

- This was the last project and  I really felt that it was the culmination of what I had learnt, I realised I had to ask for less help and was able to self teach / learn from documentation a lot more. I feel far more confident being able to go on by myself and grow my skills. 

- Working with a partner is great to be able to bounce of ideas and work through bugs, but I need to create more projects by myself to make myself more self reliant.

- Loved working with Chakra UI and that made me keen to try other frameworks and libraries. 

- At the end of the course I know that I love developing and am excited to enter the industry. 

## Contact

Social - https://www.linkedin.com/in/mayur-kumar-dev/

Email - mayurkumardev@googlemail.com

Project Link: https://mayur-sei-porject-4.herokuapp.com/

Git Hub: https://github.com/Kumasta

<p align="right">(<a href="#general-assembly-project-4-full-stack-project">back to top</a>)</p>
