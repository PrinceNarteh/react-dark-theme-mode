import "./DarkMode.css";

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
      <span>🌙</span>
    </div>
  );
};

export default DarkMode;
