const AddNew = () => {
  return (
    <div className="w-full md:my-12">
      <form className="w-10/12 md:w-4/12 mx-auto border p-3 md:p-8">
        <h2 className="text-2xl text-center font-bold text-red-800">
          Add A New Book
        </h2>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Author</span>
          </label>
          <input
            type="text"
            placeholder="Enter Author"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Genre</span>
          </label>
          <input
            type="text"
            placeholder="Enter Genre"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Publish Date</span>
          </label>
          <input
            type="date"
            placeholder="Enter Publish Date"
            className="input input-bordered w-full"
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
