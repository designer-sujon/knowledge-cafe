import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmark = blog =>{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime)
    // remove the blog from mark as read
    // console.log('remove book mark', id);
    const remainingBookMarks = bookmarks.filter(bookmark=>bookmark.id !== id)
    setBookmarks(remainingBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
