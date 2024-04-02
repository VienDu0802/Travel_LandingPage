import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/main.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#about", text: "about" },
	{ id: 3, href: "#services", text: "services" },
	{ id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
	{ id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
	{ id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
	{ id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
	{
		id: 1,
		title: "saving money",
		icon: "fas fa-wallet fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
	},
	{
		id: 2,
		title: "endless hiking",
		icon: "fas fa-tree fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
	},
	{
		id: 3,
		title: "amazing comfort",
		icon: "fas fa-socks fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
	},
];

export const tours = [
	{
		id: 1,
		src: tour1,
		date: "june 4th, 2023",
		title: "Tibet Adventure",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		place: "China",
		time: "6 days",
		price: "from $2100",
	},
	{
		id: 2,
		src: tour2,
		date: "july 15th, 2023",
		title: "explore hong kong",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		place: "Hong kong",
		time: "8 days",
		price: "from $500",
	},
	{
		id: 3,
		src: tour3,
		date: "november 16th, 2023",
		title: "kenya highlights",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		place: "osaka",
		time: "10 days",
		price: "from $3300",
	},
	{
		id: 4,
		src: tour4,
		date: "november 16th",
		title: "japan Adventure",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		place: "japan",
		time: "7 days",
		price: "from $2800",
	},
	{
		id: 5,
		src: tour5,
		date: "december 5th, 2023",
		title: "Vietnam Adventure",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		place: "viet nam",
		time: "8 days",
		price: "from $4100",
	},
	{
		id: 6,
		src: tour6,
		date: "december 5th, 2023",
		title: "somewhere Adventure",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		place: "somewhere",
		time: "8 days",
		price: "from $4100",
	},
];
