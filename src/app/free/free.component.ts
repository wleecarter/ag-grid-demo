import { Component } from '@angular/core';

import { songData } from '../song-data';

// import { columnDefs } from '../column-defs/01-column-defs';
// import { columnDefs } from '../column-defs/02-sort-filter-flex';
// import { columnDefs, defaultColDef } from '../column-defs/03-default-column-def';
// import { gridOptions } from '../column-defs/04-grid-options';
// import { gridOptions } from '../column-defs/05a-format-units-sold';
// import { gridOptions } from '../column-defs/05b-sort-by-date';
import { gridOptions } from '../column-defs/07-custom-filters';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent {

  public rowData = songData;
  // public columnDefs = columnDefs;
  // public defaultColDef = defaultColDef;
  public gridOptions = gridOptions;
}
