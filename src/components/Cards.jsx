import PropTypes from "prop-types";
const Cards = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className=" mb-24">
      <div className="card w-96">
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
        <div className="card-body p-4 w-[350px]">
          <h2 className="card-title text-2xl font-semibold">{title}</h2>
          <p className="mt-4">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary p-3 mt-6 text-[#3F3172] border border-[#3F3172] rounded-full font-bold">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default Cards;
