import loaderIcon from "../assets/loaderimg.gif";

const LoaderIcon = () => {
  return (
    <div className="loader">
      <img src={loaderIcon} alt="loader" />
      <h1> Loading, Please Wait... </h1>
    </div>
  );
};

export default LoaderIcon;
