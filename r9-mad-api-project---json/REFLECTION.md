# R9 API Data Project and IDP Reflection

When starting this project I didn't know where to begin to find an API on a topic I was interested in. I began by trying to access the SoundCloud API since I love music and thought they would have interesting data. It ended up being a bit too difficult for me to find a key and access this particular API so I then looked at government APIs with easier access, like NASA. Although I could see the NASA API, I wasn't sure how to manipulate the data they provided so I continued my search and landed on the Genius API. Genius categories data about musical artists and their song lyrics, so I would be able to display different artists' top songs in my app.

The first challenge in this project was learning how to use React Native to insert the API into this program so I could begin to make the app with its data. To gain an access token to the API I had to provide my app website url and an email. I had some trouble at first with getting the syntax correct, but with help from Mr. Oswald, I was able to work the API into my code!

The first thing I was able to do with my data was transfer it into text on the cards from what I had learned with the previous R7 Weather Project. I looked through the API to see what information I wanted to pull and put onto the cards. I found a url for an image corresponding to each song, and Mr. Oswald showed me how to convert the url into an image on the card. 

By the end of winter break I had cards to display the top ten songs of a specific artist and each card had an image and some text to go along with it. However, to change what artist was displayed I had to go into the API link itself and change the artist written there. Mr. Oswald helped me replace that line of the API with "queryText" and added TextInput at the top of the app so I could create a search box. Now the function will rerun each time that text changes.

I'm really happy with how this project turned out! To go further in the future I could implement a feature so that I could click on each card and it would lead me to more information.


