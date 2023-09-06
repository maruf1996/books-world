import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePostBookMutation } from "../Redux/features/books/bookApi";
import { useAppSelector } from "../Redux/hook";

const AddNew = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publishDate: "",
  });
  const { user } = useAppSelector((state) => state.user);
  const [book, { isSuccess }] = usePostBookMutation();
  const handleAddBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, author, genre, publishDate } = formData;
    const options = {
      data: { userEmail: user?.email, title, author, genre, publishDate },
    };
    book(options);
  };

  useEffect(() => {
    if (isSuccess === true) {
      toast.success("Book Added Successfully!");
      // Reset the input fields
      setFormData({
        title: "",
        author: "",
        genre: "",
        publishDate: "",
      });
    }
  }, [isSuccess]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full md:my-12">
      <form
        onSubmit={handleAddBook}
        className="w-10/12 md:w-4/12 mx-auto border p-3 md:p-8"
      >
        <h2 className="text-2xl text-center font-bold text-red-800">
          Add A New Book
        </h2>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            name="title"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter Title"
            className="input input-bordered w-full"
            value={formData.title}
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Author</span>
          </label>
          <input
            name="author"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter Author"
            className="input input-bordered w-full"
            value={formData.author}
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Genre</span>
          </label>
          <input
            name="genre"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter Genre"
            className="input input-bordered w-full"
            value={formData.genre}
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Publish Date</span>
          </label>
          <input
            name="publishDate"
            type="date"
            onChange={handleInputChange}
            placeholder="Enter Publish Date"
            className="input input-bordered w-full"
            value={formData.publishDate}
          />
        </div>
        <div className="form-control w-full mt-6">
          <button className="btn btn-active bg-red-800 hover:bg-red-600 text-white">
            Add The Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
