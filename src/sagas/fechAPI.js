export const fetchPeople = async () => {
  const response = await fetch("https://swapi.co/api/people").then(response =>
    response.json()
  );
  return response;
};
