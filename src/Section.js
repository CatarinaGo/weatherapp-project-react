import "./styles.css";

export default function Section() {
  return (
    <div className="Section">
      <section>
        <h4 id="search-city"></h4>
        <h4 id="current-city"></h4>
        <h5>
          <span id="current-date"></span>
        </h5>
        <br />
        <p class="links" id="links">
          <a href="#" class="hyperlink" id="change-temp-one-C">
            C°
          </a>{" "}
          |
          <a href="#" class="hyperlink" id="change-temp-one-F">
            {" "}
            F°
          </a>
        </p>
        <div class="card-deck" id="currentforecast">
          <div class="card text-center border-light">
            <img src="" class="icon" id="icon" alt=""/>
            <h5 class="card-title" id="tempone"></h5>
            <p class="card-text" id="dayone">
              <small class="text-muted" id="descriptionone"></small>
              <br />
              <small class="text-muted" id="wind"></small>
              <br />
              <small class="text-muted" id="humidity"></small>
            </p>
          </div>
        </div>
        <br />
        <div class="card-deck text-center" id="forecast"></div>
      </section>
    </div>
  );
}
