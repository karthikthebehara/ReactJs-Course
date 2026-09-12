import React from "react";
import Card from "./components/card" 
import User from "./components/User"
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/meta.svg",
    name: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/netflix.svg",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nvidia.svg",
    name: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Pune, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonwebservices.svg",
    name: "Amazon Web Services",
    datePosted: "4 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 36,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
    name: "Google",
    datePosted: "6 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 62,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg",
    name: "Microsoft",
    datePosted: "10 weeks ago",
    post: "Cloud Solution Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 45,
    location: "Mumbai, India"
  }
];
  jobOpenings.map((el)=>{
    console.log(el);
  });
  return (
    <div className="parent">
      {jobOpenings.map((el)=>{
        return <Card name={el.name}
        logo ={el.brandLogo}
         datePosted={el.datePosted} 
         post={el.post} 
         location={el.location} 
         pay ={el.pay}
         tag1 ={el.tag1}
         tag2 ={el.tag2}
         />
      })}
    </div>
  );
};

export default App;
