

const SectionTitles = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto md: w-1/4 my-5 text-center">
            <p className="text-yellow-600 mb-2 ">---{subHeading}---</p>
            <h3 className="border-y-4 py-4 uppercase text-3xl ">{heading}</h3>
        </div>
    );
};

export default SectionTitles;