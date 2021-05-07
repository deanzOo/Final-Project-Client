import { Component, OnInit } from '@angular/core';
import { chartTitles, DashboardChart, DashboardItem } from '../../../models/admin/dashboardItem';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cpu = 55;
  dashboardStat: DashboardItem[] = [
    {
      title: 'מודלים במערכת',
      icon: 'leaderboard',
      amount: 7,
      color: 'rgb(63 81 181)'
    },
    {
      title: 'משתמשים רשומים',
      icon: 'supervisor_account',
      amount: 5,
      color: 'rgb(63 81 181)'
    },
    {
      title: 'לוגואים שנוצרו',
      icon: 'add_photo_alternate',
      amount: 25,
      color: 'rgb(63 81 181)'
    },
    {
      title: 'זמן אימון כולל',
      icon: 'more_time',
      amount: 130,
      color: 'rgb(63 81 181)'
    },
  ];
  dashboardCharts: DashboardChart[] = [
    {
      title: 'חתך המודל המרכזי מול המודל המשולב',
      type: chartTitles.AREA_CHARTS,
      data: [
        ['אוגוסט',  1000,      400],
        ['ספטמבר',  1170,      460],
        ['אוקטובר',  880,       780],
        ['נובמבר',  650,      540],
        ['דצמבר',  700,      320],
      ],
      columnNames: ['Month', 'Model1', 'Model2'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },
      size: 2
    },
    {
      title: 'חתך זמני אימון מודלים',
      type: chartTitles.PIE_CHARTS,
      data: [
        ['מודל ראשוני', 30.6],
        ['מודל בדיקה', 24.6],
        ['המודל הצגה', 25.6],
        ['מודל בדיקה', 16.6],
        ['מודל בדיקה 2', 40.6]
      ],
      columnNames: ['Browser', 'Percentage'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        is3D: true
      },
      size: 1
    },
    {
      title: 'נתוני צריכה בשרת',
      type: chartTitles.GAUGE,
      data: [
        ['זיכרון ראשי', 80],
        ['מעבד', this.cpu],
        ['תעבורת רשת', 702],
        ['ליבות GPU', 16],
      ],
      columnNames: ['Label', 'Value'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
      },
      size: 1
    },

    {
      title: 'תוצאות אימון אחרונות',
      type: chartTitles.LINE_CHARTS,
      data: [
        ['25/12/20',  1000,      980],
        ['28/12/20',  1170,      1000],
        ['1/1/20',  900,       1100],
        ['3/1/20',  1230,      1460]
      ],
      columnNames: ['תאריך', 'Generator', 'Discriminator'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },
      size: 2
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.BAR_CHART,
      data: [
        ['Copper', 8.94, '#b87333'],            // RGB value
        ['Silver', 10.49, 'silver'],            // English color name
        ['Gold', 19.30, 'gold'],
        ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
      ],
      columnNames: ['Element', 'Density', { role: 'style' }],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.BubbleCharts,
      data: [
        ['CAN',    80.66,              1.67,      'North America',  33739900],
        ['DEU',    79.84,              1.36,      'Europe',         81902307],
        ['DNK',    78.6,               1.84,      'Europe',         5523095],
        ['EGY',    72.73,              2.78,      'Middle East',    79716203],
        ['GBR',    80.05,              2,         'Europe',         61801570],
        ['IRN',    72.49,              1.7,       'Middle East',    73137148],
        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
        ['ISR',    81.55,              2.96,      'Middle East',    7485600],
        ['RUS',    68.6,               1.54,      'Europe',         141850000],
        ['USA',    78.09,              2.05,      'North America',  307007000]
      ],
      columnNames: ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.COLUMN_CHART,
      data: [
        ['2010', 10, 'color: gray'],
        ['2020', 14, 'color: #76A7FA'],
        ['2030', 16, 'opacity: 0.2'],
        ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
      ],
      columnNames: ['Year', 'Visitations', { role: 'style' } ],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.COMBO_CHART,
      data: [
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ],
      columnNames: ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.PIE_CHARTS,
      data: [
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ],
      columnNames: ['Task', 'Hours per Day'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        pieHole: 0.4,
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.GEO_CHART,
      data: [
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
      ],
      columnNames: ['Country', 'Popularity'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.HISTOGRAM,
      data: [
        ['Acrocanthosaurus (top-spined lizard)', 12.2],
        ['Albertosaurus (Alberta lizard)', 9.1],
        ['Allosaurus (other lizard)', 12.2],
        ['Apatosaurus (deceptive lizard)', 22.9],
        ['Archaeopteryx (ancient wing)', 0.9],
        ['Argentinosaurus (Argentina lizard)', 36.6],
        ['Baryonyx (heavy claws)', 9.1],
        ['Brachiosaurus (arm lizard)', 30.5],
        ['Ceratosaurus (horned lizard)', 6.1],
        ['Coelophysis (hollow form)', 2.7],
        ['Compsognathus (elegant jaw)', 0.9],
        ['Deinonychus (terrible claw)', 2.7],
        ['Diplodocus (double beam)', 27.1],
        ['Dromicelomimus (emu mimic)', 3.4],
        ['Gallimimus (fowl mimic)', 5.5],
        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
        ['Megalosaurus (big lizard)', 7.9],
        ['Microvenator (small hunter)', 1.2],
        ['Ornithomimus (bird mimic)', 4.6],
        ['Oviraptor (egg robber)', 1.5],
        ['Plateosaurus (flat lizard)', 7.9],
        ['Sauronithoides (narrow-clawed lizard)', 2.0],
        ['Seismosaurus (tremor lizard)', 45.7],
        ['Spinosaurus (spiny lizard)', 12.2],
        ['Supersaurus (super lizard)', 30.5],
        ['Tyrannosaurus (tyrant lizard)', 15.2],
        ['Ultrasaurus (ultra lizard)', 30.5],
        ['Velociraptor (swift robber)', 1.8]
      ],
      columnNames: ['Dinosaur', 'Length'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
      },
      size: 1
    },
    {
      title: 'Browser market shares at a specific website, 2014',
      type: chartTitles.STEPPED_AREA_CHARTS,
      data: [
        ['Alfred Hitchcock (1935)', 8.4,         7.9],
        ['Ralph Thomas (1959)',     6.9,         6.5],
        ['Don Sharp (1978)',        6.5,         6.4],
        ['James Hawes (2008)',      4.4,         6.2]
      ],
      columnNames: ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
      options: {
        legend: 'none',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },
      size: 1
    }
  ];

  constructor(
    private adminService: AdminService,
    private rout: ActivatedRoute
  ) {
    this.dashboardStat = [
      {
        title: 'משתמשים רשומים',
        icon: 'supervisor_account',
        amount: this.rout.snapshot.data.dashboard.userCount,
        color: 'rgb(63 81 181)'
      },
      {
        title: 'לוגואים שנוצרו',
        icon: 'add_photo_alternate',
        amount: this.rout.snapshot.data.dashboard.logoCount,
        color: 'rgb(63 81 181)'
      },
      {
        title: 'כמות דירוגים',
        icon: 'assessment',
        amount: this.rout.snapshot.data.dashboard.logoRatings,
        color: 'rgb(63 81 181)'
      },
    ];

    this.dashboardCharts = [
      {
        title: 'Discriminator',
        type: chartTitles.LINE_CHARTS,
        data: this.rout.snapshot.data.dashboard.losses.discriminator.map((value, index) => [index, value]),
        columnNames: ['X', 'Y'],
        options: {
          legend: 'none',
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent'
        },
        size: 4
      },
      {
        title: 'Generator',
        type: chartTitles.LINE_CHARTS,
        data: this.rout.snapshot.data.dashboard.losses.generator.map((value, index) => [index, value]),
        columnNames: ['X', 'Y'],
        options: {
          legend: 'none',
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent'
        },
        size: 4
      },
      {
        title: 'ממוצע דירוגים לפי קריטריונים',
        type: chartTitles.COLUMN_CHART,
        data: [
          ['צבעים', this.rout.snapshot.data.dashboard.logos_ratings_means.mean_color_rate, 'color: gray'],
          ['צורה', this.rout.snapshot.data.dashboard.logos_ratings_means.mean_shape_rate, 'color: #76A7FA'],
          ['חדות', this.rout.snapshot.data.dashboard.logos_ratings_means.mean_sharpness_rate, 'opacity: 0.2']
        ],
        columnNames: ['פרמטר', 'דירוג', { role: 'style' } ],
        options: {
          legend: 'none',
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
        },
        size: 2
      },
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cpu = 100;
    }, 5000);
  }

}
