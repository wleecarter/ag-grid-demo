import { formatNumber } from '@angular/common';

import { songData } from '../song-data';

export const gridOptions = {
  rowData: songData,
  pagination: true,
  paginationPageSize: 25,
  defaultColDef: {
    flex: 1,
    sortable: true,
    filter: true,
    filterParams: {
      suppressAndOrCondition: true,
    },
  },
  columnDefs: [
    { field: 'artist' },
    { field: 'song' },
    { field: 'genre', sortable: false, filter: false },
    { field: 'releaseDate' },
    { 
      field: 'chartPosition',
      type: 'rightAligned',
    },
    {
      field: 'unitsSold',
      valueFormatter: (data: any) => {
        return formatNumber(data.value, 'en-US', '1.0');
      },
      type: 'rightAligned',
    },
  ]
};
