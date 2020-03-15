import { Fragment } from "react";
import { useStats } from "../hooks/useStats";

export default function CountrySelector(props) {
  const countries = useStats("https://covid19.mathdro.id/api/countries");
  if (!countries) return <p>Loading countries...</p>;

  return (
    <Fragment>
      <h3>Select from Countries List</h3>
      <section className="input-group mb-3">
        <select
          className="custom-select"
          id="inputGroupSelect02"
          onChange={e => props.setSelectedCountry(e.target.value)}
          value={props.activeCountry}
        >
          {Object.entries(countries.countries).map(([country, code], index) => (
            <option key={`code_${index}`} value={code}>
              {country}
            </option>
          ))}
        </select>
      </section>
    </Fragment>
  );
}
