import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="w-1/3 bg-gray-100 ml-4 rounded-lgw">
      <div>
        <h3 className="text-3xl text-center font-bold mb-2 py-2">Reading Time {readingTime}</h3>
      </div>
      <h2 className="text-2xl text-center">Book Marks Blog: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};
Bookmarks.propTypes={
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}
export default Bookmarks;
