import "./Header.scss";

const header = () => {
  return (
    <div className="header">
      <div className="header__text">
        <h1>I am Web Developer (React Developer)</h1>
        <h2 className='mb-xsm'>Manish Rawat</h2>
        <p className='mb-sm'>
          hello, I am a Self-taught developer I was born in Uttarakhand,
          Currently I am in New Delhi, India.
        </p>
        <button className="main-btn">Hire me</button>
      </div>

      <div className="header__img-box">
          <img src="img/man_working.svg" alt="" className="header__img" />
      </div>
    </div>
  );
};

export default header;
