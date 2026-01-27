java
const companies = [
  {
    name: "Expert Holdings",
    industry: "Retail",
    location: "Industry",
    phone: "+223 70 123 456",
    email: "info@expertraders.com",
    adress:"P.O.Box 54 Nairobi",
    membership:"ncc342",
    level:"member"
  },
  {
    name: "Reaal Tech Solutions",
    industry: "IT Services",
    location: "Nairobi",
    phone: "+223 76 987 654",
    email: "contact@realeserttech.com",
    adress: "P.O.Box 67 Nairibi",
    membership:"Gold"
  },
  {
    name: "Savana Logistics",
    industry: "Transportation",
    location: "Nairobi",
    phone: "+223 71 555 888",
    email: "support@savanalogistics.com",
    adress:"P.O.Box 6578 Naivasha",
    membership: "silver"
  },
  {
    name:"Bount Baker",
    industry:"baakery",
    location: "Nairobi",
    phone: "073564877",
    email:"bony@bytbonty",
    adress:"box 234 Nairobi",
    membership: "siver"
  },
  {
     name: "Top printers",
     industry: "printing",
     location: "Nairobi",
     phone: "0727812455",
     email: "top@topprinter",
     adress:"Box 34576 Nairobi",
     member:"Silver"
  },
  {

    name:"Kebsali Taders",
    indusrty:'sales',
    location: "Nairobi",
    phone:"07654321",
    email: "keb@jotrde",
    adrees:"jihgt564hy,",
  },
  {
    name:"Gmaks Travellers",
    indusustry:"Travelling",
    location:"Nairobi",
    phone: "0786543432",
    email: "gmark@travelas",
    }
    
];function showLastModified() {
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