export type SynopsisColumn = {
  colType: string; //"Text"
  numRows: number; //94465
  numUniqueValues: number; //5
  sample: string[]; // ['Southwest Airlines', 'American Airlines', 'airline_name', 'United Airlines', 'Delta Air Lines']
  sampleHeader: string; //"airline_name"
};

export type Synopsis = {
  columns: SynopsisColumn[];
  numColumns: number; //27
  numRows: number; //94465
};
