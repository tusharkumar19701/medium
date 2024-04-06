import React from "react";

const MainContainer1 = () => {
  return (
    <div className="w-full">
      <div className="text-3xl md:text-7xl text-center p-16">Every idea needs a Medium.</div>
      <div className="flex md:flex-row flex-col-reverse items-center w-full justify-between border border-gray-900">
        <div className="md:w-1/2 w-full md:py-16 md:px-28 p-6 border border-r-gray-900">
          <p className="mb-4">
            Medium is a captivating online platform that inspires intellectual
            discourse and connects curious minds. Explore a diverse tapestry of
            perspectives, delving into profound insights that spark epiphanies
            and awaken transformative realizations. This vibrant community
            cultivates an immersive atmosphere for engaging with compelling
            ideas, nourishing your cerebral appetite.
          </p>
          <p>
            Embark on a voyage of profound contemplation as eloquent wordsmiths
            unveil evocative narratives, elucidating the zeitgeist with
            articulate eloquence. On Medium, knowledge unfurls, igniting the
            catalyst for enlightened growth.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum asperiores culpa numquam voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto possimus voluptate pariatur beatae magnam saepe similiquet.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-96  object-cover m-auto"
            src="https://media.istockphoto.com/id/1205033382/vector/italian-language-learning-vector-pattern-with-icons-and-national-symbols-of-italy.jpg?s=1024x1024&w=is&k=20&c=VJGWphpPM6gXOY6TmlEXzH_weQpREU1LY_MdzmWIs3Y="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer1;
