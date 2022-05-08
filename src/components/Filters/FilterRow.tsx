import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Filter } from "./types/Filter";
import {
  Button,
  Icon,
  Dropdown,
  Input,
  HtmlInputrops,
} from "semantic-ui-react";
import "./FilterRow.css";
import { ScoreModal } from "./ScoreModal";

type Props = {
  index: number;
  filter: Filter;
  onFilterChange: (newFilter: Filter, key: number) => void;
  onFilterDelete: (key: number) => void;
};

const typeOptions = [
  {
    key: "Default",
    text: "Default",
    value: "Default",
  },
  {
    key: "Date",
    text: "Date",
    value: "Date",
  },
  {
    key: "Search",
    text: "Search",
    value: "Search",
  },
  {
    key: "Score",
    text: "Score",
    value: "Score",
  },
];

export const FilterRow = ({
  index,
  filter,
  onFilterChange,
  onFilterDelete,
}: Props) => {
  const onLabelChange = (event: ChangeEvent<HtmlInputrops>) => {
    const { value } = event.currentTarget;
    onFilterChange(
      {
        ...filter,
        sampleHeader: value,
      },
      index
    );
  };

  const onTypeChange = (event: SyntheticEvent, data: any) => {
    const { value } = data;
    onFilterChange(
      {
        ...filter,
        type: value,
        score: value === "Score" ? "Average" : undefined,
      },
      index
    );
  };

  const onScoreChange = (score: string) => {
    onFilterChange(
      {
        ...filter,
        score,
      },
      index
    );
  };

  return (
    <div className="filterRow">
      <Input
        className="name"
        value={filter.sampleHeader}
        onChange={onLabelChange}
      />
      <div className="">
        <span className="typeLabel">Type</span>
        <Dropdown
          value={filter.type}
          selection
          options={typeOptions}
          onChange={onTypeChange}
        />
      </div>
      <div className="actions">
        {filter.type === "Score" && (
          <ScoreModal
            score={filter.score || "Average"}
            onSave={onScoreChange}
          />
        )}
        <Button icon basic onClick={() => onFilterDelete(index)}>
          <Icon name="trash" color="red" />
        </Button>
      </div>
    </div>
  );
};
