import Head from "next/head";
import React, { Fragment, useState } from "react";
import CountrySelector from "../components/CountrySelector";
import Stats from "../components/Stats";

const IndexPage = props => {
  const [activeCountry, setActiveCountry] = useState("IN");
  const setSelectedCountry = country => setActiveCountry(country);

  return (
    <Fragment>
      <Head>
        <title>COVID-19 Stats</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/superhero/bootstrap.min.css"
        ></link>
      </Head>
      <main className="container">
        <h1 className="mx-auto" style={{ width: 300 }}>
          COVID-19 Stats
        </h1>
        <div className="jumbotron">
          <section className="row">
            <h2 className="col-sm-12">Worldwide Stats</h2>
          </section>
          <Stats uri={`api`} />
        </div>
        <CountrySelector
          activeCountry={activeCountry}
          setSelectedCountry={setSelectedCountry}
        />
        {activeCountry && <Stats uri={`api/countries/${activeCountry}`} />}
      </main>
    </Fragment>
  );
};

export default IndexPage;
