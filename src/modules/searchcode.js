import ajaxService from "./ajaxService";
const searchCode = () => {
   document.querySelector('form').addEventListener('submit', (e) => {
       e.preventDefault();
       const searchTerm = document.querySelector('.term').value;
       const city = document.querySelector('.city').value;
       let searchResponse;
       ajaxService(searchTerm, city)
           .then(result => searchResponse = result)
           .then(() => {
               const postalCode = searchResponse.data[0].post_code;
               document.querySelector('.result').value = postalCode;
           })
           .catch(error => {
               console.error("Klaida:", error);
               // Display error message
               document.querySelector('.error-message').textContent = " Tokio miesto nėra";
           });
   });
}
export default searchCode;