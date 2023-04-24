function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">Forum - No copyright</p>
        <div className="footer__container">
          <div className="footer__block">
            <h3 className="footer__title">Socials</h3>
            <div className="footer__block-link">
              <a className="footer__link" href="">
                Twitter
              </a>
              <a className="footer__link" href="">
                Github
              </a>
              <a className="footer__link" href="">
                Discord
              </a>
            </div>
          </div>
          <div className="footer__block">
            <h3 className="footer__title">Account</h3>
            <div className="footer__block-link">
              <a className="footer__link" href="">
                Create Account
              </a>
              <a className="footer__link" href="">
                Github
              </a>
              <a className="footer__link" href="">
                Discord
              </a>
            </div>
          </div>
          <div className="footer__block">
            <h3 className="footer__title">Support</h3>
            <div className="footer__block-link">
              <a className="footer__link" href="">
                Contact
              </a>
              <a className="footer__link" href="">
                Report user
              </a>
              <a className="footer__link" href="">
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
