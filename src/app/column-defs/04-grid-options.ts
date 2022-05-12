import { songData } from '../song-data';

export const gridOptions = {
  rowData: songData,
  pagination: true,
  paginationPageSize: 25,
  defaultColDef: {
    flex: 1,
    sortable: true,
    filter: true,
  },
  columnDefs: [
    { field: 'artist' },
    { field: 'song' },
    { field: 'genre', sortable: false, filter: false },
    { field: 'releaseDate' },
    { field: 'chartPosition' },
    { field: 'unitsSold' },
  ]
};
