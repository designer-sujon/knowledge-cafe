import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} =  blog;

  return (
    <div className="mb-16">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center gap-4 mb-4">
            <img className="w-14 h-14 border-gray-100 rounded-full" src={author_img} alt="" />
            <div>
              <h3 className="text-2xl">{author}</h3>
              <p>{posted_date}</p>
            </div>
        </div>
        <div className="">
          <span>{reading_time} min read</span>
          <button onClick={()=>handleAddBookmark(blog)} className="ml-2 text-xl"><CiBookmark /></button>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4"> {title}</h1>
      <p>
      {
        hashtags.map((hash, idx) =><span key={idx}><a href="">#{hash}</a></span>)
      }
      </p>
      <button onClick={()=>handleMarkAsRead(id, reading_time)} className="mt-2 font-bold text-purple-600 underline">Mark As Read</button>
   </div>
   );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.number
};

export default Blog;
