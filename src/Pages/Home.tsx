import image from "../assets/bookHome.jpg";

const Home = () => {
  return (
    <div className="px-4 py-18 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-16">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              "Today a reader, tomorrow a leader."
            </h2>
            <p className="text-base text-gray-700 md:text-lg text-justify">
              "Reading is escape, and the opposite of escape; it's a way to make
              contact with reality after a day of making things up, and it's a
              way of making contact with someone else's imagination after a day
              that's all too real."
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <p className="text-sm text-gray-900 text-justify">
                  "Sometimes, you read a book and it fills you with this weird
                  evangelical zeal, and you become convinced that the shattered
                  world will never be put back together unless and until all
                  living humans read the book."
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <p className="text-sm text-gray-900 text-justify">
                  "Reading is a form of prayer, a guided meditation that briefly
                  makes us believe we’re someone else, disrupting the delusion
                  that we’re permanent and at the center of the universe.
                  Suddenly (we’re saved!) other people are real again, and we’re
                  fond of them."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
