// fetching data 
let data;
const destDiv = document.querySelector("#block8");
getDestData();
async function getDestData(){
   try {

      const res = await fetch(`https://places-59x7.onrender.com/places`);
      data = await res.json();
      console.log(data);
      displayDestData(data);
   } catch (err) {
      console.log("Error: fetching in Destination data");
  }
}

const displayDestData = (data) => {

  data.forEach(Dest => {

     const DestDiv = document.createElement('div')
     DestDiv.classList.add('Dest-container');

     const image = document.createElement('img');
     image.src = Dest.img1;

     const detailDiv = document.createElement('div')
     const name = document.createElement('h2');
     name.textContent = Dest.name;
       
     detailDiv.appendChild(name);
   
     const location = document.createElement('p');
     location.textContent = Dest.location;
     detailDiv.appendChild(location);

     const desc = document.createElement('p');
     desc.textContent = Dest.description;
     detailDiv.appendChild(desc);

     var bookTicket=document.createElement("button");
     bookTicket.textContent="Book Ticket";
    //  bookTicket.onclick=function(){
    //     // redirectPayment();
    //  };
    
  
     DestDiv.appendChild(image)
     DestDiv.appendChild(detailDiv)
     DestDiv.appendChild(bookTicket)

     destDiv.appendChild(DestDiv);

   });
}


function search() {
  var searchTerm = document.getElementById("searchInput").value;
  // Implement your search functionality here using the searchTerm
  // For example, you can redirect to a search results page or perform an AJAX request to fetch search results
  // Replace the following alert with your desired functionality
  alert("You searched for: " + searchTerm);
}

// --------------Slider--------------

const swiper = new Swiper('.swiper', {
  autoplay:{
      delay:4000,
      disableOnInteraction:false,
  },
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  

  });
// -------------------------------------
