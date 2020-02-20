/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/HeyMichelle
*/
axios.get('https://api.github.com/users/HeyMichelle')
  .then( response => {
    console.log(response);// deal with the response data in here
  })
  .catch( err => {
    console.log("Error:", err);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

const userCard = document.querySelector('.card');
function createCard(data) {
  const card = document.createElement('div');
  card.classList.add('card');

    const avatarImg = document.createElement('img');
    card.appendChild(avatarImg);
    avatarImg.src = `${data.avatar_url}`;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = `${data.name}`;
    cardInfo.appendChild(name);

    const username = document.createElement('p');
    username.classList.add('username');
    username.textContent = `${data.login}`;
    cardInfo.appendChild(username);

    const location = document.createElement('p');
    location.textContent = "Location: ", `${data.location}`;
    cardInfo.appendChild(location);

    const profile = document.createElement('p');
    profile.textContent = "Profile: ", `${data.html_url}`;
    cardInfo.appendChild(profile);

      const pageLink = document.createElement('a');
      profile.appendChild(pageLink);

    const followers = document.createElement('p');
    followers.textContent = "Followers: ", `${data.followers}`;
    cardInfo.appendChild(followers);

    const following = document.createElement('p');
    following.textContent = "Following: ", `&{data.following}`;
    cardInfo.appendChild(following);

    const bio = document.createElement('p');
    bio.textContent = "Bio: ", `${data.bio}`;
    cardInfo.appendChild(bio);

    console.log(card);
    return card;
}

userCard.appendChild(card);
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
