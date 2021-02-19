import axios from "axios";
export const fetchPeople = async () => {
  let response = [];
  try {
    let people = [];
    response = await axios("https://swapi-deno.azurewebsites.net/api/people")
      .then(response => {
        people = response.data;
        return response.data.count;
      })
      .then(count => {
        const numberOfPages = Math.ceil((count - 1) / 10);
        let promises = [];
        for (let i = 2; i <= numberOfPages; i++) {
          promises.push(axios(`https://swapi-deno.azurewebsites.net/api/people?page=${i}`));
        }
        return Promise.all(promises);
      })
      .then(response => {
        people = response.reduce(
          (acc, data) => [...acc, ...data.data.results],
          people
        );
        return people;
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }

  return response;
};
