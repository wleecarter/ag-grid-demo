export const columnDefs = [
  { field: 'artist' },
  { field: 'song' },
  { field: 'genre', sortable: false, filter: false },
  { field: 'releaseDate' },
  { field: 'chartPosition' },
  { field: 'unitsSold' },
];

export const defaultColDef = {
  flex: 1,
  sortable: true,
  filter: true,
};
