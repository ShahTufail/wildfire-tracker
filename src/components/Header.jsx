import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <div className="header">
      <h1>
        {" "}
        <Icon
          style={{ color: "white" }}
          icon={locationIcon}
          className="location-icon"
        />{" "}
        Wildfire Tracker (Powered by NASA)
      </h1>
    </div>
  );
};

export default Header;
