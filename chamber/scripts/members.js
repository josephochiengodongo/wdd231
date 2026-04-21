
const companies = [
  {
    name: "Expert Holdings",
    industry: "Retail",
    location: "Industry",
    phone: "+223 70 123 456",
    email: "info@expertraders.com",
    address:"P.O.Box 54 Nairobi",
    membership:"ncc342",
    level:"silver"

  },
  {
    name: "Real Tech Solutions",
    industry: "IT Services",
    location: "Nairobi",
    phone: "+223 76 987 654",
    email: "info@realeserttech.com",
    address: "P.O.Box 67 Nairobi",
    membership:"Gold"
  },
  {
    name: "Savana Logistics",
    industry: "Transportation",
    location: "Nairobi",
    phone: "+223 71 555 888",
    email: "info@savanalogistics.com",
    address:"P.O.Box 6578 Naivasha",
    membership: "silver"
  },
  {
    name:"Bount Baker",
    industry:"bakery",
    location: "Nairobi",
    phone: "073564877",
    email:"bony@bytbonty",
    address:"P.O.Box 234 Nairobi",
    membership: "siver"
  },
  {
     name: "Top printers",
     industry: "printing",
     location: "Nairobi",
     phone: "0727812455",
     email: "top@topprinter",
     address:"P.O.Box 34576 Nairobi",
     member:"Silver"
  },
  {

    name:"Kebsali Taders",
    industry:'sales',
    location: "Nairobi",
    phone:"07654321",
    email: "keb@jotrde",
    address:"P.O.Box 355 Nairobi",
    membership:"Gold"
  },
  {
    name:"Gmaks Travellers",
    industry:"Travelling",
    location:"Nairobi",
    phone: "0786543432",
    email: "gmark@travelas",
    address:"P.O.Box 345 Nairobi",
    membership:"Silver"
    }
    
];
function showLastModified() {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById('lastModified');
}



const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Wait for the fetch to complete
    const data = await response.json(); // Wait for the response to be converted to JSON
    console.log(data); // Output the fetched data
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors
  }
};