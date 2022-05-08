import React, { useEffect, useState } from "react";
import { Synopsis, SynopsisColumn } from "./types/Synopsis";
import { getSynopsis } from "./getSynopsis";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "reactstrap";
import { AddFilter } from "./AddFilter";
import { Filter } from "./types/Filter";
import { FilterRow } from "./FilterRow";
import "./Filters.css";
import { Button } from "semantic-ui-react";

export const Filters = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [synopsisLoading, setSynopsisLoading] = useState<boolean>();
  const [synopsisError, setSynopsisError] = useState<boolean>();
  const [synopsis, setSynopsis] = useState<Synopsis>();
  const [filters, setFilters] = useState<Filter[]>([]);

  useEffect(() => {
    setSynopsisLoading(true);
    (async () => {
      const token = await getAccessTokenSilently();
      await getSynopsis(token)
        .then((synopsis) => {
          setSynopsis(synopsis);
          setSynopsisLoading(false);
        })
        .catch((error) => {
          setSynopsisError(error);
          setSynopsisLoading(false);
        });
    })();
  }, [getAccessTokenSilently]);

  const onFilterSelected = (synopsisColumn: SynopsisColumn) => {
    setFilters((filters) => [
      ...filters,
      { ...synopsisColumn, type: "Default" },
    ]);
  };

  const onFilterChange = (newFilter: Filter, key: number) => {
    setFilters((filters) => {
      const newFilters = [...filters];
      newFilters[key] = newFilter;
      return newFilters;
    });
  };

  const onFilterDelete = (key: number) => {
    setFilters((filters) => {
      const newFilters = [...filters];
      newFilters.splice(key, 1);
      return newFilters;
    });
  };

  const onSave = () => {
    let message = "";
    filters.forEach((filter) => {
      message += `name: ${filter.sampleHeader}\ntype: ${filter.type}`;
      if (filter.score) {
        message += `\nscore: ${filter.score}`;
      }
      message += `\n\n`;
    });
    alert(message);
  };

  if (synopsisLoading) {
    return <Spinner />;
  }

  if (synopsisError || !synopsis) {
    return (
      <div>
        Got error trying to load synopsis, please try again. {synopsisError}
      </div>
    );
  }

  return (
    <div>
      <div className="filterRows">
        {filters.map((filter, index) => (
          <FilterRow
            key={index}
            index={index}
            filter={filter}
            onFilterChange={onFilterChange}
            onFilterDelete={onFilterDelete}
          />
        ))}
      </div>
      <AddFilter onFilterSelected={onFilterSelected} synopsis={synopsis} />
      <div className="filtersActions">
        <Button basic>Cancel</Button>
        <Button content="Save" onClick={onSave} color="blue" />
      </div>
    </div>
  );
};
