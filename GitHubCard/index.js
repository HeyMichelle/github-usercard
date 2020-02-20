/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/HeyMichelle
*/
axios.get('https://api.github.com/users/HeyMichelle')
  .then( response => {
    console.log(response);
    const data = response.data;
    const cardDiv = document.querySelector('.cards');
    cardDiv.appendChild(createMyCard(data));
  })
  .catch( err => {
    console.log("Error: ", err);
  })


  
function createMyCard(data) {
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


    const calendarDiv = document.createElement('div');
    calendarDiv.classList.add('calendar');
    cardInfo.appendChild(calendarDiv);
    console.log(card);
    console.log(calendarDiv);
    
    return card;
}

const followersArray = ['parkcoop', 'AndriwT', 'whitneyxlachelle', 'april5622', 'rachellsincere'];
i = 0;
followersArray.forEach((user, i) => {
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
        .then(response => {
          const data = response.data;
          const cardDiv = document.querySelector('.cards');
          cardDiv.appendChild(createCard(data));
        })
        .catch(error => {
            console.log(error)
        });
    // console.log(followersArray);
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

    // console.log(bio);
    // console.log(card);
    return card;
}
