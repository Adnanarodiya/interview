import PropTypes from "prop-types";
export default function Card({ imageSrc, title, description }) {
  return (
    <div className="w-2/5">
      <div className="hue-rotate-180 hover:hue-rotate-0 hover:duration-200">
        <img src={imageSrc} alt="" />
      </div>
      <h3 className="text-4xl mt-4">{title}</h3>
      <p className="mt-4 text-xl">{description}</p>
    </div>
  );
}
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
