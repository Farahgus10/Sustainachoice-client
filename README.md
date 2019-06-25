
# SustainaChoice
### Author: 
Farah Gustafson

### Link to live app:
[SustainaChoice](https://farah-sustainachoice-app.now.sh/ "SustainaChoice")

### API used in this app: 
Google Maps Javascript API: https://developers.google.com/maps/documentation/javascript/tutorial

### App Summary:
SustainaChoice allows users in the Washington, D.C. area to search for where they can find sustainably-sourced food in their area.
![Homepage header](/src/Screenshots/NavbarHeader.png?raw=true)

Users can search by zip code and filter by type (restaurant, farmers market, grocery store, bar), or they can simply choose to see all results for all locations. Results are shown as a list, and the user can click on any list item to read more information on it. Clicking on a map marker will zoom into that location on the map, and clicking the 'x' button will cause the map to zoom back out.
![Homepage Search Form](/src/Screenshots/HomepageSearchForm.png?raw=true) (Located in the SearchForm folder as SeachForm.js)
![Results Page with Map](/src/Screenshots/ResultsListandMap.png?raw=true) (The entire results page and the results list components are located in the Results folder, as ResultsPage.js and ResultsList.js. The map component is located in the Map folder as GoogleMap.js)

Users can choose to make a new search directly from the results page, instead of navigating back to the homepage. 
![Results page search form](/src/Screenshots/ResultsPageSearchForm.png?raw=true) (Located in the SearchForm folder as SeachForm.js)

Users can click on links on the homepage or in the nav bar to learn more information about sustainability.
![Learn more dropdown in navigation](/src/Screenshots/LearnMore.png?raw=true) (Located in the Nav folder, the Learn More links are rendered in the Nav.js component)
![Why page](/src/Screenshots/WhyPage.png?raw=true) (All info page components are location in the InfoSection folder as WhyPage.js, ConsumerHowPage.js and BusinessHowPage.js)

These links are also available on the home page if you scroll down. 
![Homepage link to Why Page](/src/Screenshots/HomeWhyPage.png?raw=true) (Located in the InfoSection folder as InfoSection.js)

Finally, users can choose to sign up for a newsletter by entering their email into a form located in the footer.
![Footer](/src/Screenshots/Footer.png?raw=true) (The footer and search form components are located in the Footer folder as Footer.js and EmailForm.js)

### Technical stack:
React, CSS, Node, Express, and PostgreSQL

