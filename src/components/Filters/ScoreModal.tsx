import React, { SyntheticEvent, useState } from "react";
import {
  Dropdown,
  Button,
  Header,
  Image,
  Modal,
  Icon,
} from "semantic-ui-react";

type Props = {
  score: string;
  onSave: (score: string) => void;
};

const scoreOptions = [
  {
    key: "Average",
    text: "Average",
    value: "Average",
  },
  {
    key: "NPS",
    text: "NPS",
    value: "NPS",
  },
  {
    key: "Threshold",
    text: "Threshold",
    value: "Threshold",
  },
];

export const ScoreModal = ({ score, onSave }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [scoreValue, setScoreValue] = useState<string>(score);

  const onOpen = () => {
    setScoreValue(score); //incase it changed
    setOpen(true);
  };

  const handleSave = () => {
    setOpen(false);
    onSave(scoreValue);
  };

  const onScoreChange = (event: SyntheticEvent, data: any) => {
    const { value } = data;
    setScoreValue(value);
  };

  return (
    <Modal
      //  I think the modal needed some style help because it was fighting with react-bootstrap
      style={{ position: "relative" }}
      onClose={() => setOpen(false)}
      onOpen={onOpen}
      open={open}
      size="small"
      trigger={
        <Button icon basic onClick={onOpen}>
          <Icon name="cog" />
        </Button>
      }
    >
      <Modal.Header>Edit filter</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "256px",
            }}
          >
            Score type
            <Dropdown
              value={scoreValue}
              selection
              options={scoreOptions}
              onChange={onScoreChange}
            />
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button basic onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button content="Save" onClick={handleSave} color="blue" />
      </Modal.Actions>
    </Modal>
  );
};
