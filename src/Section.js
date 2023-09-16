import "./styles.css";

export default function Section() {
  return (
    <div className="Section">
      <section>
        <h4 id="search-city">H4</h4>
        <h4 id="current-city">H4</h4>
        <h5>
          <span id="current-date">H5</span>
        </h5>
        <br />
        <p className="links" id="links">
          {/*<a href="#" class="hyperlink" id="change-temp-one-C">
            C°
  </a>{" "}*/}
          |
         {/* <a href="#" class="hyperlink" id="change-temp-one-F">
           {" "}
          F°
          </a>*/}
        </p>
        <div className="card-deck" id="currentforecast">
          <div className="card text-center border-light">
            <img src="" className="icon" id="icon" alt=""/>
            <h5 className="card-title" id="tempone">H5</h5>
            <p className="card-text" id="dayone">
              <small className="text-muted" id="descriptionone"></small>
              <br />
              <small className="text-muted" id="wind"></small>
              <br />
              <small className="text-muted" id="humidity"></small>
            </p>
          </div>
        </div>
        <br />
        <div className="card-deck text-center" id="forecast"></div>
      </section>
    </div>
  );
}
