import moment from "moment";
import { Fragment } from "react";
import { useStats } from "../hooks/useStats";
import { BASE_URL } from "../utils/constants";

export default function Stats(props) {
  const stats = useStats(`${BASE_URL}/${props.uri}`);
  if (!stats) return <p>Loading Stats...</p>;

  if (!stats.confirmed) return <p>No statistics exist.</p>;

  return (
    <Fragment>
      <div className="row justify-content-around">
        <section className="card col-sm-3">
          <div className="card-body">
            <h3 className="card-title">Confirmed</h3>
            <span className="card-text" style={{ fontSize: 15 }}>
              {stats.confirmed.value}
            </span>
          </div>
        </section>
        <section className="card col-sm-3">
          <div className="card-body">
            <h3 className="card-title">Deaths</h3>
            <span className="card-text" style={{ fontSize: 15 }}>
              {stats.deaths.value}
            </span>
          </div>
        </section>
        <section className="card col-sm-3">
          <div className="card-body">
            <h3 className="card-title">Recovered</h3>
            <span className="card-text" style={{ fontSize: 15 }}>
              {stats.recovered.value}
            </span>
          </div>
        </section>
      </div>
      <section className="mx-auto" style={{ width: 300, marginTop: 20 }}>
        Last Updated at: {moment(stats.lastUpdate).format("dddd, MMM Do YYYY")}
      </section>
    </Fragment>
  );
}
