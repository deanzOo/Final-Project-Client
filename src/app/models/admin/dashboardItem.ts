export enum chartTitles {
  STEPPED_AREA_CHARTS = 'SteppedAreaChart',
  GEO_CHART = 'GeoChart',
  PIE_CHARTS = 'PieChart',
  GAUGE = 'Gauge',
  LINE_CHARTS = 'LineChart',
  HISTOGRAM = 'Histogram',
  COLUMN_CHART = 'ColumnChart',
  BubbleCharts = 'BubbleChart',
  BAR_CHART = 'BarChart',
  AREA_CHARTS = 'AreaChart',
  COMBO_CHART = 'ComboChart',
  TABLE = 'Table',
}

export interface DashboardItem {
  title: string;
  icon: string;
  amount: number;
  color?: string;
  fontColor?: string;
}

export interface MenuLink {
  title: string;
  icon?: string;
  link: string;
}

export interface DashboardChart {
  title: string;
  type: chartTitles;
  data: Array<any>;
  columnNames: Array<any>;
  options: any;
  size: number;
}

