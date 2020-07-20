# iClinic Front-end Challenge

Welcome aboard Padawan!

Yes, it is another Star Wars challenge.

Your mission is simple:
You must consume the SWAPI (A famous Star Wars API).
Should call two endpoints at the SAME TIME:
- `https://swapi.dev/api/1`  -> Get info from the light side of force, the master is Luke Skywalker.
- `https://swapi.dev/api/4`  -> Get info from the dark side of force, the master is Darth Vader.

Based on service response time, and your "force alignment", the first master returned should be display on screen, with its **centered image**, **name** and a **corresponding background color** (black for the dark side and yellow for the light side).

You must call these requests at the **click of a button**.

## UI
As for CSS, just follow the images! 

### Desktop
![Dark Side](dark-side.png?raw=true "Dark side")
![Light Side](light-side.png?raw=true "Light side")

### Mobile `< 800px`
![Dark Side Mobile](dark-side-mobile.png?raw=true "Dark side mobile")

In the mobile version, an image must be **adjusted to the width of yout viewport**, and the **position of the button and the master text must be inverted**, the text is above and the button below. the font used is "sans serif".

The button to invoke the force, **must be disabled when requests is in progress** to avoid "nervous clicks" and also receive some **visual feedback (opacity .5)**.

- In addition to the implementation, it would be *very good* if we had tests!

## Hosting
The source code must be hosted in some Git repository and open so that we can access it, we recommend Github.
To evaluate the implementation we need to visualize the project running, for this, we suggests Github pages, Netlify, now.sh, AWS Amplify, etc.

Good luck! And the force may be with you.
