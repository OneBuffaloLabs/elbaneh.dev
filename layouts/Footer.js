const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <a target="_blank" href="https://dribbble.com/Bana0615">
          <span className="ion ion-social-dribbble" />
        </a>
        {/* <a target="_blank" href="https://twitter.com/">
          <span className="ion ion-social-twitter" />
        </a> */}
        <a target="_blank" href="https://github.com/Bana0615">
          <span className="ion ion-social-github" />
        </a>
        {/* <a target="_blank" href="https://www.instagram.com/">
          <span className="ion ion-social-instagram-outline" />
        </a> */}
      </div>
      <div className="copy">
        © {new Date().getFullYear()} OneBuffaloLabs. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
