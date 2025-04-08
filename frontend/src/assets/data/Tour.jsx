import polo from "../../assets/images/polo.jpg";
import dwarka from "../../assets/images/dwarka.jpg";
import ahemdabad from "../../assets/images/ahmedabad.jpg";
import tajmahal from "../../assets/images/tajmahal.jpg";
import goa from "../../assets/images/goa.jpg";
import ladakh from "../../assets/images/ladakh.jpg";
import kerala from "../../assets/images/kerala.jpg";
import varanasi from "../../assets/images/varanasi.jpg";
import kutch from "../../assets/images/kutch.jpg";
import jaipur from "../../assets/images/jaipur.jpg";
import andaman from "../../assets/images/andaman.jpg";

const Tour = [
  {
    id: 1,
    name: "Dwarka",
    description: "Enjoy the best beach experience",
    address:"Gujarat India",
    price: 3999,
    image: dwarka,
    rating:4.5,
    reviews:[]

  },
  {
    id: 2,
    name: " Polo Forest",
    description: "Explore the stunning mountains",
    address:"Gujarat India",

    price: 2000,
    image: polo,
    rating:4.5,
    reviews:[]

  },
  {
    id: 3,
    name: " Ahmedabad",
    description: "Discover the best city spots",
    address:"Gujarat India",

    price: 1000,
    image: ahemdabad,
    rating:4.5,
        reviews:[]

  },

  {
    id: 4,
    name: "Taj Mahal",
    description: "Visit one of the wonders of the world",
    address:" India",

    price: 1500,
    image: tajmahal,

    rating:4.5,
        reviews:[
          {
            UserName:"Bhavyaraj",
            rating:5
          },
          {
            UserName:"rinkal",
            rating:5
          }


        ],

  },
  {
    id: 5,
    name: "Goa",
    description: "Relax and party on the best beaches in Goa",
    price: 5000,
    image: goa,
    address:" India",

    rating:4.5,
        reviews:[],

  },
  {
    id: 6,
    name: " Ladakh",
    description: "Experience high-altitude trekking and scenic landscapes",
    price: 8000,
    address:" India",

    image: ladakh,
    rating:4.5,
        reviews:[],
  },
  {
    id: 7,
    name: " Kerala",
    description: "Experience the peaceful backwaters on a houseboat",
    price: 5000,
    address:" India",

    image: kerala,
    rating:4.5,
        reviews:[],

  },
  {
    id: 8,
    name: "Varanasi Tour",
    description: "Witness the Ganga Aarti and explore temples",
    address:" India",

    price: 2500,
    image: varanasi,
    rating:4.5,
        reviews:[],

  },
  {
    id: 9,
    name: "Rann of Kutch ",
    description: "Witness the white desert and cultural heritage",
    address:"Gujarat India",

    price: 3000,
    image: kutch,
    rating:4.5,
        reviews:[]

  },
  {
    id: 10,
    name: "Jaipur",
    description: "Explore forts and palaces of the Pink City",
    address:"Rajsthan India",

    price: 3500,
    image: jaipur,
    rating:4.5,
        reviews:[]

  },
  {
    id: 11,
    name: "Andaman",
    description: "Enjoy pristine beaches and water sports",
    address:" India",

    price: 7000,
    image: andaman,
    rating:4.5,
        reviews:[]

  },
];

export default Tour;
