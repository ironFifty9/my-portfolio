import React from 'react';
import './App.css';

// Importing images for the featured works
// These images are used in the FeaturedWorks component to showcase different projects
// The images are imported from the assets/images directory
import image1 from './assets/images/image-1.png';
import image2 from './assets/images/image-2.png';
import image3 from './assets/images/image-3.png';
// Importing components for the application
// The components are imported from the components directory
// Each component is responsible for a specific part of the application
// The Header component is responsible for the top navigation and introduction
import Header from './components/Header';
// The RecentPosts component displays a list of recent blog posts
import RecentPosts from './components/RecentPosts';
// The FeaturedWorks component showcases featured works or projects
import FeaturedWorks from './components/FeaturedWorks';
// The Footer component displays the footer section of the application
// It includes social media links and copyright information
import Footer from './components/Footer';


const posts = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    category: "Design, Pattern",
    text: "Lorem Ipsum", // Placeholder text, replace with actual content later
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    category: "Figma, Icon Design",
    text: "Lorem Ipsum",
  },
];

// Array containing details of featured works to be displayed in the application
const works = [
  {
    image: image1,
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    text: "Lorem Ipsum",
  },
  {
    image: image2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    text: "Lorem Ipsum",
  },
  {
    image: image3,
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Typography",
    text: "Lorem Ipsum",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <RecentPosts posts={posts} />
      <FeaturedWorks works={works} />
      <Footer />
    </div>
  );
}

export default App;