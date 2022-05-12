import { formatNumber } from '@angular/common';

import { songData } from '../song-data';
import { convertToMilliseconds, sortDateStrings } from '../utils';

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
    { field: 'artist'},
    { field: 'song' },
    { field: 'genre', sortable: false, filter: false  },
    { 
      field: 'releaseDate',
      comparator: sortDateStrings,
      filter: 'agDateColumnFilter',
      filterParams: {
        suppressAndOrCondition: true,
        comparator: (filterValue: Date, cellValue: string) => {
          return convertToMilliseconds(cellValue) - filterValue.getTime();
        },
      },
    },
    { 
      field: 'chartPosition',
      filter: 'agNumberColumnFilter',
      type: 'rightAligned',
    },
    {
      field: 'unitsSold',
      valueFormatter: (data: any) => {
        return formatNumber(data.value, 'en-US', '1.0');
      },
      filter: 'agNumberColumnFilter',
      type: 'rightAligned',
    },
  ]
};
