## Pam's Beer Web App

## Description

Using the [punk api](https://punkapi.com/), which doesn’t require a key to use and provides a lot of information in its responses, I've created a rather simple React app, which show some beers.

## Objectives:

### Web2 features:

- Listing of some/all beers.
- Search for a beer.
- See a list of the items you've favorited. (This will of course isn't saved to any database.)
- Play the sound of the opening beer when you like a beer.
- Play a sound when a beer is removed from the favorite list.
- Go on adventure and receive a random beer.
- The favorites list is with unique entries only - I've used hashed data for this.
- If Punk API could eventually change a beer, upon viewing the Favorites list, you will know which beers have not changed and which have been updated since your last viewing of the Favourites list.

### Web3 part:

- All Web3 functionalities are locked behind a toggle in the Home Page, so that everybody could see the app, even if they're not interested in Web3.
- “Unlock” the FE functionality only if a wallet is connected.
- Implement "Disconnect Wallet" functionality.

### Want to see it action?
1. Clone the repository
2. Install the dependencies wit 'npm install'
3. Run the project with 'npm start'