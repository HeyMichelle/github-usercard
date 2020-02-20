/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/HeyMichelle
*/
axios.get('https://api.github.com/users/HeyMichelle')
  .then( response => {
    console.log(response);
    const data = response.data;
    const cardDiv = document.querySelector('.cards');
    cardDiv.appendChild(createCard(data));
  })
  .catch( err => {
    console.log("Error: ", err);
  })

  
const followersArray = ['parkcoop', 'AndriwT', 'whitneyxlachelle', 'april5622', 'rachellsincere'];
i = 0;
followersArray.forEach((user, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
        .then(response => {
          const data = response.data;
          const cardDiv = document.querySelector('.cards');
          cardDiv.appendChild(createCard(data));
            card.appendChild(cardInfo)
        })
        .catch(error => {
            console.log(error)
        });
    console.log(followersArray);
});


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
    location.textContent = `Location: ${data.location}`;
    cardInfo.appendChild(location);

    const profile = document.createElement('p');
    profile.textContent = "Profile: ";
    cardInfo.appendChild(profile);

      const pageLink = document.createElement('a');
      pageLink.setAttribute('href', data.html_url);
      pageLink.textContent = `${data.html_url}`;
      profile.appendChild(pageLink);

    const followers = document.createElement('p');
    followers.textContent = `Followers: ${data.followers}`;
    cardInfo.appendChild(followers);

    const following = document.createElement('p');
    following.textContent = `Following: ${data.following}`;
    cardInfo.appendChild(following);

    const bio = document.createElement('p');
    bio.textContent = `Bio: ${data.bio}`;
    cardInfo.appendChild(bio);

    console.log(bio);
    console.log(card);
    return card;
}


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
