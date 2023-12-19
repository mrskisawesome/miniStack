//calls the api
async function getMessage() {
  //call our api with fetch
  const response = await fetch("http://localhost:8080/message");
  //turn the response into json
  const json = await response.json();
  console.log(json);

  //put my mesage on the page
  const p = document.getElementById("message");
  p.textContent = json.message;
}
//run our function
getMessage();
