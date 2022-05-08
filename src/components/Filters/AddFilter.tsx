import React from "react";
import { Dropdown, Popup } from "semantic-ui-react";
import { Synopsis, SynopsisColumn } from "./types/Synopsis";

type Props = {
  synopsis: Synopsis;
  onFilterSelected: (synopsisColumn: SynopsisColumn) => void;
};

export const AddFilter = ({ synopsis, onFilterSelected }: Props) => {
  return (
    <Dropdown
      text="Add filter"
      icon="plus"
      floating
      labeled
      button
      basic
      className="icon"
    >
      <Dropdown.Menu>
        <Dropdown.Menu scrolling>
          {synopsis.columns.map((synopsisColumn, index) => (
            <Popup
              key={index}
              content={synopsisColumn.sample
                .filter((sample) => sample !== synopsisColumn.sampleHeader)
                .splice(0, 5)
                .map((sample) => (
                  <div>{sample}</div>
                ))}
              header="Sample data"
              position="right center"
              trigger={
                <Dropdown.Item
                  onClick={() => onFilterSelected(synopsisColumn)}
                  text={synopsisColumn.sampleHeader}
                  value={synopsisColumn.sampleHeader}
                />
              }
            />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
};
