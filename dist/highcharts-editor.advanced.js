/*

Highcharts Editor v0.2.0

Copyright (c) 2016-2017, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

highed.meta.optionsAdvanced = highed.transform.advanced({
  "meta": {
    "types": {},
    "excludes": {}
  },
  "subtree": {
    "accessibility": {
      "meta": {
        "types": {},
        "name": "accessibility",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Options for configuring accessibility for the chart. Requires the [accessibility\nmodule](//code.highcharts.com/modules/accessibility.js) to be loaded.\nFor a description of the module and information on its features, see\n[Highcharts Accessibility](http://www.highcharts.com/docs/chart-concepts/accessibility)."
      },
      "subtree": {
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Enable accessibility features for the chart."
          },
          "subtree": {}
        },
        "pointDescriptionThreshold": {
          "meta": {
            "types": {
              "number": 1,
              "boolean": 1
            },
            "name": "pointDescriptionThreshold",
            "excludes": {},
            "default": "30",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When a series contains more points than this, we no longer expose information\nabout individual points to screen readers.\n\nSet to `false` to disable."
          },
          "subtree": {}
        },
        "keyboardNavigation": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "keyboardNavigation",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Options for keyboard navigation."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Enable keyboard navigation for the chart."
              },
              "subtree": {}
            },
            "skipNullPoints": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "skipNullPoints",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Skip null points when navigating through points with the keyboard."
              },
              "subtree": {}
            }
          }
        },
        "describeSingleSeries": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "describeSingleSeries",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether or not to add series descriptions to charts with a single series."
          },
          "subtree": {}
        },
        "pointDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "pointDateFormat",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Date format to use for points on datetime axes when describing them to\nscreen reader users.\n\nDefaults to the same format as in tooltip.\n\nFor an overview of the replacement codes, see [dateFormat](#Highcharts.\ndateFormat)."
          },
          "subtree": {}
        }
      }
    },
    "drilldown": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "drilldown",
        "excludes": {},
        "description": "Options for drill down, the concept of inspecting increasingly high \nresolution data through clicking on chart items like columns or pie slices.\n\nThe drilldown feature requires the drilldown.js file to be loaded, \nfound in the modules directory of the download package, or online at \n(code.highcharts.com/modules/drilldown.js)[code.highcharts.com/modules/drilldown.js]."
      },
      "subtree": {
        "activeAxisLabelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "activeAxisLabelStyle",
            "excludes": {},
            "default": "{ \"cursor\": \"pointer\", \"color\": \"#003399\", \"fontWeight\": \"bold\", \"textDecoration\": \"underline\" }",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Additional styles to apply to the X axis label for a point that has drilldown\ndata. By default it is underlined and blue to invite to interaction."
          },
          "subtree": {
            "cursor": {
              "meta": {
                "types": {},
                "name": "cursor",
                "excludes": {},
                "default": "pointer"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.highlightColor100}"
              },
              "subtree": {}
            },
            "fontWeight": {
              "meta": {
                "types": {},
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "textDecoration": {
              "meta": {
                "types": {},
                "name": "textDecoration",
                "excludes": {},
                "default": "underline"
              },
              "subtree": {}
            }
          }
        },
        "activeDataLabelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "activeDataLabelStyle",
            "excludes": {},
            "default": "{ \"cursor\": \"pointer\", \"color\": \"#003399\", \"fontWeight\": \"bold\", \"textDecoration\": \"underline\" }",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Additional styles to apply to the data label of a point that has drilldown\ndata. By default it is underlined and blue to invite to interaction."
          },
          "subtree": {
            "cursor": {
              "meta": {
                "types": {},
                "name": "cursor",
                "excludes": {},
                "default": "pointer"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.highlightColor100}"
              },
              "subtree": {}
            },
            "fontWeight": {
              "meta": {
                "types": {},
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "textDecoration": {
              "meta": {
                "types": {},
                "name": "textDecoration",
                "excludes": {},
                "default": "underline"
              },
              "subtree": {}
            }
          }
        },
        "animation": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "animation",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Set the animation for all drilldown animations. Animation of a drilldown\noccurs when drilling between a column point and a column series, or a\npie slice and a full pie series. Drilldown can still be used between\nseries and points of different types, but animation will not occur.\n\nThe animation can either be set as a boolean or a configuration object.\nIf `true`, it will use the 'swing' jQuery easing and a duration of 500\nms. If used as a configuration object, the following properties are supported:\n\n<dl>\n\n<dt>duration</dt>\n\n<dd>The duration of the animation in milliseconds.</dd>\n\n<dt>easing</dt>\n\n<dd>A string reference to an easing function set on the `Math` object.\nSee [the easing demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\nanimation-easing/).</dd>\n\n</dl>"
          },
          "subtree": {
            "duration": {
              "meta": {
                "types": {},
                "name": "duration",
                "excludes": {},
                "default": 500
              },
              "subtree": {}
            }
          }
        },
        "drillUpButton": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "drillUpButton",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Options for the drill up button that appears when drilling down on a\nseries. The text for the button is defined in [lang.drillUpText](#lang.\ndrillUpText)."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "position",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "Positioning options for the button within the `relativeTo` box. Available\nproperties are `x`, `y`, `align` and `verticalAlign`."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {},
                    "name": "align",
                    "excludes": {},
                    "default": "right"
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {},
                    "name": "x",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {},
                    "name": "y",
                    "excludes": {},
                    "default": 10
                  },
                  "subtree": {}
                }
              }
            },
            "relativeTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "relativeTo",
                "excludes": {},
                "default": "plotBox",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "What box to align the button to. Can be either \"plotBox\" or \"spacingBox\"."
              },
              "subtree": {}
            },
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "A collection of attributes for the button. The object takes SVG attributes\nlike `fill`, `stroke`, `stroke-width` or `r`, the border radius. The theme\nalso supports `style`, a collection of CSS properties for the text. Equivalent\nattributes for the hover state are given in `theme.states.hover`."
              },
              "subtree": {}
            }
          }
        },
        "allowPointDrilldown": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowPointDrilldown",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1
            },
            "description": "When this option is false, clicking a single point will drill down all\npoints in the same category, equivalent to clicking the X axis label."
          },
          "subtree": {}
        },
        "series": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "series",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "An array of series configurations for the drill down. Each series configuration\nuses the same syntax as the [series](#series) option set. These drilldown\nseries are hidden by default. The drilldown series is linked to the parent\nseries' point by its `id`."
          },
          "subtree": {}
        }
      }
    },
    "navigation": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "navigation",
        "excludes": {},
        "description": "A collection of options for buttons and menus appearing in the exporting module."
      },
      "subtree": {
        "menuItemHoverStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "menuItemHoverStyle",
            "excludes": {},
            "default": "{ \"background\": \"#335cad\", \"color\": \"#ffffff\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the hover state of the individual items within the popup\nmenu appearing by default when the export icon is clicked. The menu items\nare rendered in HTML."
          },
          "subtree": {}
        },
        "menuItemStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "menuItemStyle",
            "excludes": {},
            "default": "{ \"padding\": \"0.5em 1em\", \"color\": \"#333333\", \"background\": \"none\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the individual items within the popup menu appearing by\ndefault when the export icon is clicked. The menu items are rendered in\nHTML."
          },
          "subtree": {}
        },
        "menuStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "menuStyle",
            "excludes": {},
            "default": "{ \"border\": \"1px solid #999999\", \"background\": \"#ffffff\", \"padding\": \"5px 0\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the popup menu appearing by default when the export icon\nis clicked. This menu is rendered in HTML."
          },
          "subtree": {}
        },
        "buttonOptions": {
          "meta": {
            "types": {},
            "name": "buttonOptions",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A collection of options for buttons appearing in the exporting module.\n\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the buttons are styled with the `.highcharts-contextbutton` and\n`.highcharts-button-symbol` class."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "default": "right",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Alignment for the buttons.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether to enable buttons."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "default": "20",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Pixel height of the buttons."
              },
              "subtree": {}
            },
            "symbolFill": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "symbolFill",
                "excludes": {},
                "default": "#666666",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Fill color for the symbol within the button."
              },
              "subtree": {}
            },
            "symbolSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolSize",
                "excludes": {},
                "default": "14",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel size of the symbol on the button."
              },
              "subtree": {}
            },
            "symbolStroke": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "symbolStroke",
                "excludes": {},
                "default": "#666666",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The color of the symbol's stroke or line."
              },
              "subtree": {}
            },
            "symbolStrokeWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolStrokeWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel stroke width of the symbol on the button."
              },
              "subtree": {}
            },
            "symbolX": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolX",
                "excludes": {},
                "default": "12.5",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The x position of the center of the symbol inside the button."
              },
              "subtree": {}
            },
            "symbolY": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolY",
                "excludes": {},
                "default": "10.5",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The y position of the center of the symbol inside the button."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A text string to add to the individual button."
              },
              "subtree": {}
            },
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A configuration object for the button theme. The object accepts SVG properties\nlike `stroke-width`, `stroke` and `fill`. Tri-state button styles are\nsupported by the `states.hover` and `states.select` objects."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "top",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The vertical alignment of the buttons. Can be one of \"top\", \"middle\" or\n\"bottom\".",
                "enumValues": [
                  "top",
                  "middle",
                  "bottom"
                ]
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "24",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel width of the button."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The vertical offset of the button's position relative to its `verticalAlign`.\n ."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "exporting": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "exporting",
        "excludes": {},
        "description": "Options for the exporting module. For an overview on the matter, see [the docs](http://www.highcharts.com/docs/export-module/export-module-overview)."
      },
      "subtree": {
        "type": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "type",
            "excludes": {},
            "default": "image/png",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Default MIME type for exporting if `chart.exportChart()` is called without\nspecifying a `type` option. Possible values are `image/png`, `image/jpeg`,\n `application/pdf` and `image/svg+xml`.",
            "enumValues": [
              "image/png",
              "image/jpeg",
              "application/pdf",
              "image/svg+xml"
            ]
          },
          "subtree": {}
        },
        "url": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "url",
            "excludes": {},
            "default": "https://export.highcharts.com",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The URL for the server module converting the SVG string to an image format.\n By default this points to Highchart's free web service."
          },
          "subtree": {}
        },
        "printMaxWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "printMaxWidth",
            "excludes": {},
            "default": "780",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When printing the chart from the menu item in the burger menu, if the\non-screen chart exceeds this width, it is resized. After printing or\ncancelled, it is restored. The default width makes the chart fit into\ntypical paper format. Note that this does not affect the chart when printing\nthe web page as a whole."
          },
          "subtree": {}
        },
        "scale": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "scale",
            "excludes": {},
            "default": "2",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Defines the scale or zoom factor for the exported image compared to the\non-screen display. While for instance a 600px wide chart may look good\non a website, it will look bad in print. The default scale of 2 makes\nthis chart export to a 1200px PNG or JPG."
          },
          "subtree": {}
        },
        "buttons": {
          "meta": {
            "types": {},
            "name": "buttons",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Options for the export related buttons, print and export. In addition\nto the default buttons listed here, custom buttons can be added. See\n[navigation.buttonOptions](#navigation.buttonOptions) for general options."
          },
          "subtree": {
            "contextButton": {
              "meta": {
                "types": {},
                "name": "contextButton",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Options for the export button.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), export button styles can be applied with the `.highcharts-contextbutton`\nclass.",
                "extends": "navigation.buttonOptions"
              },
              "subtree": {
                "className": {
                  "meta": {
                    "types": {},
                    "name": "className",
                    "excludes": {},
                    "default": "highcharts-contextbutton"
                  },
                  "subtree": {}
                },
                "menuClassName": {
                  "meta": {
                    "types": {},
                    "name": "menuClassName",
                    "excludes": {},
                    "default": "highcharts-contextmenu"
                  },
                  "subtree": {}
                },
                "symbol": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "symbol",
                    "excludes": {},
                    "default": "menu",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The symbol for the button. Points to a definition function in the `Highcharts.\nRenderer.symbols` collection. The default `exportIcon` function is\npart of the exporting module.",
                    "enumValues": [
                      "circle",
                      "square",
                      "diamond",
                      "triangle",
                      "triangle-down",
                      "menu"
                    ]
                  },
                  "subtree": {}
                },
                "_titleKey": {
                  "meta": {
                    "types": {},
                    "name": "_titleKey",
                    "excludes": {},
                    "default": "contextButtonTitle"
                  },
                  "subtree": {}
                },
                "menuItems": {
                  "meta": {
                    "types": {},
                    "name": "menuItems",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "symbolFill": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "symbolFill",
                    "excludes": {},
                    "default": "#666666",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "See [navigation.buttonOptions](#navigation.buttonOptions) => symbolFill."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": "-10",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The horizontal position of the button relative to the `align` option."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "allowHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Experimental setting to allow HTML inside the chart (added through the\n`useHTML` options), directly in the exported image. This allows you to\npreserve complicated HTML structures like tables or bi-directional text\nin exported charts.\n\nDisclaimer: The HTML is rendered in a `foreignObject` tag in the generated\nSVG. The official export server is based on PhantomJS, which supports\nthis, but other SVG clients, like Batik, does not support it. This also\napplies to downloaded SVG that you want to open in a desktop client."
          },
          "subtree": {}
        },
        "chartOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "chartOptions",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Additional chart options to be merged into an exported chart. For example,\na common use case is to add data labels to improve readaility of the\nexported chart, or to add a printer-friendly color scheme."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to enable the exporting module. Disabling the module will hide\nthe context button, but API methods will still be available."
          },
          "subtree": {}
        },
        "fallbackToExportServer": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "fallbackToExportServer",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether or not to fall back to the export server if the offline-exporting\nmodule is unable to export the chart on the client side."
          },
          "subtree": {}
        },
        "filename": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "filename",
            "excludes": {},
            "default": "chart",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The filename, without extension, to use for the exported chart."
          },
          "subtree": {}
        },
        "formAttributes": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "formAttributes",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "An object containing additional attributes for the POST form that sends\nthe SVG to the export server. For example, a `target` can be set to make\nsure the generated image is received in another frame, or a custom `enctype`\nor `encoding` can be set."
          },
          "subtree": {}
        },
        "libURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "libURL",
            "excludes": {},
            "default": "https://code.highcharts.com/{version}/lib",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Path where Highcharts will look for export module dependencies to load\non demand if they don't already exist on `window`. Should currently point\nto location of [CanVG](https://github.com/canvg/canvg) library, [RGBColor.\njs](https://github.com/canvg/canvg), [jsPDF](https://github.com/yWorks/jsPDF)\nand [svg2pdf.js](https://github.com/yWorks/svg2pdf.js), required for client\nside export in certain browsers."
          },
          "subtree": {}
        },
        "sourceHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "sourceHeight",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Analogous to [sourceWidth](#exporting.sourceWidth)"
          },
          "subtree": {}
        },
        "sourceWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "sourceWidth",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The width of the original chart when exported, unless an explicit [chart.\nwidth](#chart.width) is set. The width exported raster image is then multiplied\nby [scale](#exporting.scale)."
          },
          "subtree": {}
        },
        "width": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "width",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of charts exported to PNG or JPG. As of Highcharts 3.0,\nthe default pixel width is a function of the [chart.width](#chart.width)\nor [exporting.sourceWidth](#exporting.sourceWidth) and the [exporting.\nscale](#exporting.scale)."
          },
          "subtree": {}
        }
      }
    },
    "plotOptions": {
      "meta": {
        "types": {},
        "name": "plotOptions",
        "excludes": {}
      },
      "subtree": {
        "funnel": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "funnel",
            "excludes": {
              "animation": 1,
              "endAngle": 1,
              "ignoreHiddenPoint": 1,
              "innerSize": 1,
              "size": 1,
              "startAngle": 1,
              "pointIntervalUnit": 1,
              "softThreshold": 1,
              "threshold": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "Funnel charts are a type of chart often used to visualize stages in a\nsales project, where the top are the initial stages with the most clients.\n It requires that the `modules/funnel.js` file is loaded.",
            "extends": "plotOptions.pie"
          },
          "subtree": {
            "animation": {
              "meta": {
                "types": {},
                "name": "animation",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "center": {
              "meta": {
                "types": {},
                "name": "center",
                "excludes": {}
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "width",
                "excludes": {},
                "default": "90%",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the funnel compared to the width of the plot area, or the\npixel width if it is a number."
              },
              "subtree": {}
            },
            "neckWidth": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "neckWidth",
                "excludes": {},
                "default": "30%",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the neck, the lower part of the funnel. A number defines\npixel width, a percentage string defines a percentage of the plot area\nwidth."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "height",
                "excludes": {},
                "default": "100%",
                "products": {
                  "highcharts": 1
                },
                "description": "The height of the funnel or pyramid. If it is a number it defines the\npixel height, if it is a percentage string it is the percentage of the\nplot area height."
              },
              "subtree": {}
            },
            "neckHeight": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "neckHeight",
                "excludes": {},
                "default": "25%",
                "products": {
                  "highcharts": 1
                },
                "description": "The height of the neck, the lower part of the funnel. A number defines\npixel width, a percentage string defines a percentage of the plot area\nheight."
              },
              "subtree": {}
            },
            "reversed": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reversed",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "A reversed funnel has the widest area down. A reversed funnel with no\nneck width and neck height is a pyramid."
              },
              "subtree": {}
            },
            "size": {
              "meta": {
                "types": {},
                "name": "size",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "connectorWidth": {
                  "meta": {
                    "types": {},
                    "name": "connectorWidth",
                    "excludes": {},
                    "default": 1
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "select": {
                  "meta": {
                    "types": {},
                    "name": "select",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {},
                        "name": "color",
                        "excludes": {},
                        "default": "${palette.neutralColor20}"
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {},
                        "name": "borderColor",
                        "excludes": {},
                        "default": "${palette.neutralColor100}"
                      },
                      "subtree": {}
                    },
                    "shadow": {
                      "meta": {
                        "types": {},
                        "name": "shadow",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            }
          }
        },
        "pyramid": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "pyramid",
            "excludes": {
              "neckWidth": 1,
              "neckHeight": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "A pyramid chart consists of a single pyramid with item heights corresponding\nto each point value. Technically it is the same as a reversed funnel chart\nwithout a neck.",
            "extends": "plotOptions.funnel"
          },
          "subtree": {
            "neckWidth": {
              "meta": {
                "types": {},
                "name": "neckWidth",
                "excludes": {},
                "default": "0%"
              },
              "subtree": {}
            },
            "neckHeight": {
              "meta": {
                "types": {},
                "name": "neckHeight",
                "excludes": {},
                "default": "0%"
              },
              "subtree": {}
            },
            "reversed": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reversed",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "The pyramid is reversed by default, as opposed to the funnel, which shares\nthe layout engine, and is not reversed."
              },
              "subtree": {}
            }
          }
        },
        "series": {
          "meta": {
            "types": {},
            "name": "series",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "General options for all series types."
          },
          "subtree": {
            "label": {
              "meta": {
                "types": {},
                "name": "label",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {},
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "connectorAllowed": {
                  "meta": {
                    "types": {},
                    "name": "connectorAllowed",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "connectorNeighbourDistance": {
                  "meta": {
                    "types": {},
                    "name": "connectorNeighbourDistance",
                    "excludes": {},
                    "default": 24
                  },
                  "subtree": {}
                },
                "styles": {
                  "meta": {
                    "types": {},
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "fontWeight": {
                      "meta": {
                        "types": {},
                        "name": "fontWeight",
                        "excludes": {},
                        "default": "bold"
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "allowPointSelect": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowPointSelect",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Allow this series' points to be selected by clicking on the markers, bars\nor pie slices."
              },
              "subtree": {}
            },
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "animation",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Enable or disable the initial animation when a series is displayed. The\nanimation can also be set as a configuration object. Please note that\nthis option only applies to the initial animation of the series itself.\nFor other animations, see [chart.animation](#chart.animation) and the\nanimation parameter under the API methods. The following properties are\nsupported:\n\n<dl>\n\n<dt>duration</dt>\n\n<dd>The duration of the animation in milliseconds.</dd>\n\n<dt>easing</dt>\n\n<dd>A string reference to an easing function set on the `Math` object.\nSee [the easing demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\nanimation-easing/).</dd>\n\n</dl>\n\nDue to poor performance, animation is disabled in old IE browsers for\ncolumn charts and polar charts."
              },
              "subtree": {}
            },
            "animationLimit": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "animationLimit",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "For some series, there is a limit that shuts down initial animation by\ndefault when the total number of points in the chart is too high. For\nexample, for a column chart and its derivatives, animation doesn't run\nif there is more than 250 points totally. To disable this cap, set `animationLimit`\nto `Infinity`."
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A class name to apply to the series' graphical elements."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The main color or the series. In line type series it applies to the line\nand the point markers unless otherwise specified. In bar type series it\napplies to the bars unless a color is specified per point. The default\nvalue is pulled from the `options.colors` array.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the series color can be set with the `.highcharts-series`, `.\nhighcharts-color-{n}`, `.highcharts-{type}-series` or `.highcharts-series-\n{n}` class, or individual classes given by the `className` option."
              },
              "subtree": {}
            },
            "connectEnds": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "connectEnds",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Polar charts only. Whether to connect the ends of a line series plot across\nthe extremes."
              },
              "subtree": {}
            },
            "connectNulls": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "connectNulls",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to connect a graph line across null points."
              },
              "subtree": {}
            },
            "cropThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "cropThreshold",
                "excludes": {},
                "default": "300",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When the series contains less points than the crop threshold, all points\nare drawn, even if the points fall outside the visible plot area at the\ncurrent zoom. The advantage of drawing all points (including markers and\ncolumns), is that animation is performed on updates. On the other hand,\nwhen the series contains more points than the crop threshold, the series\ndata is cropped to only contain points that fall within the plot area.\nThe advantage of cropping away invisible points is to increase performance\non large series."
              },
              "subtree": {}
            },
            "cursor": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "cursor",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "You can set the cursor to \"pointer\" if you have click events attached\nto the series, to signal to the user that the points and lines can be\nclicked.",
                "enumValues": [
                  null,
                  "default",
                  "none",
                  "help",
                  "pointer",
                  "crosshair"
                ]
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Solid",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A name for the dash style to use for the graph. Applies only to series\ntype having a graph, like `line`, `spline`, `area` and `scatter` in case\nit has a `lineWidth`. The value for the `dashStyle` include:\n\n*   Solid\n*   ShortDash\n*   ShortDot\n*   ShortDashDot\n*   ShortDashDotDot\n*   Dot\n*   Dash\n*   LongDash\n*   DashDot\n*   LongDashDot\n*   LongDashDotDot",
                "enumValues": [
                  "Solid",
                  "ShortDash",
                  "ShortDot",
                  "ShortDashDot",
                  "ShortDashDotDot",
                  "Dot",
                  "Dash",
                  "LongDash",
                  "DashDot",
                  "LongDashDot",
                  "LongDashDotDot"
                ]
              },
              "subtree": {}
            },
            "description": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "description",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "_Requires Accessibility module_\n\nA description of the series to add to the screen reader information about\nthe series."
              },
              "subtree": {}
            },
            "enableMouseTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enableMouseTracking",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Enable or disable the mouse tracking for a specific series. This includes\npoint tooltips and click events on graphs and points. For large datasets\nit improves performance."
              },
              "subtree": {}
            },
            "getExtremesFromAll": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "getExtremesFromAll",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to use the Y extremes of the total chart width or only the zoomed\narea when zooming in on parts of the X axis. By default, the Y axis adjusts\nto the min and max of the visible data. Cartesian series only."
              },
              "subtree": {}
            },
            "keys": {
              "meta": {
                "types": {
                  "array": "String"
                },
                "name": "keys",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An array specifying which option maps to which key in the data point array.\nThis makes it convenient to work with unstructured data arrays from different\nsources."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "2",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Pixel with of the graph line."
              },
              "subtree": {}
            },
            "linecap": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "linecap",
                "excludes": {},
                "default": "round",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The line cap used for line ends and line joins on the graph.",
                "enumValues": [
                  "round",
                  "square"
                ]
              },
              "subtree": {}
            },
            "linkedTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linkedTo",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The [id](#series.id) of another series to link to. Additionally, the value\ncan be \":previous\" to link to the previous series. When two series are\nlinked, only the first one appears in the legend. Toggling the visibility\nof this also toggles the linked series."
              },
              "subtree": {}
            },
            "negativeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The color for the parts of the graph or points that are below the [threshold](#plotOptions.\nseries.threshold)."
              },
              "subtree": {}
            },
            "pointInterval": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointInterval",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "If no x values are given for the points in a series, pointInterval defines\nthe interval of the x values. For example, if a series contains one value\nevery decade starting from year 0, set pointInterval to 10.\n\nSince Highcharts 4.1, it can be combined with `pointIntervalUnit` to draw\nirregular intervals."
              },
              "subtree": {}
            },
            "pointIntervalUnit": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "pointIntervalUnit",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "On datetime series, this allows for setting the [pointInterval](#plotOptions.\nseries.pointInterval) to irregular time units, `day`, `month` and `year`.\nA day is usually the same as 24 hours, but pointIntervalUnit also takes\nthe DST crossover into consideration when dealing with local time. Combine\nthis option with `pointInterval` to draw weeks, quarters, 6 months, 10\nyears etc.",
                "enumValues": [
                  null,
                  "day",
                  "month",
                  "year"
                ]
              },
              "subtree": {}
            },
            "pointPlacement": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1,
                  "enum": 1
                },
                "name": "pointPlacement",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Possible values: `null`, `\"on\"`, `\"between\"`.\n\nIn a column chart, when pointPlacement is `\"on\"`, the point will not create\nany padding of the X axis. In a polar column chart this means that the\nfirst column points directly north. If the pointPlacement is `\"between\"`,\nthe columns will be laid out between ticks. This is useful for example\nfor visualising an amount between two points in time or in a certain sector\nof a polar chart.\n\nSince Highcharts 3.0.2, the point placement can also be numeric, where\n0 is on the axis value, -0.5 is between this value and the previous, and\n0.5 is between this value and the next. Unlike the textual options, numeric\npoint placement options won't affect axis padding.\n\nNote that pointPlacement needs a [pointRange](#plotOptions.series.pointRange)\nto work. For column series this is computed, but for line-type series\nit needs to be set.\n\nDefaults to `null` in cartesian charts, `\"between\"` in polar charts.",
                "enumValues": [
                  null,
                  "on",
                  "between"
                ]
              },
              "subtree": {}
            },
            "pointStart": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointStart",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "If no x values are given for the points in a series, pointStart defines\non what value to start. For example, if a series contains one yearly value\nstarting from 1945, set pointStart to 1945."
              },
              "subtree": {}
            },
            "selected": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "selected",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether to select the series initially. If `showCheckbox` is true, the\ncheckbox next to the series name will be checked for a selected series."
              },
              "subtree": {}
            },
            "shadow": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "shadow",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether to apply a drop shadow to the graph line. Since 2.3 the shadow\ncan be an object configuration containing `color`, `offsetX`, `offsetY`,\n `opacity` and `width`."
              },
              "subtree": {}
            },
            "showCheckbox": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showCheckbox",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "If true, a checkbox is displayed next to the legend item to allow selecting\nthe series. The state of the checkbox is determined by the `selected`\noption."
              },
              "subtree": {}
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether to display this particular series or series type in the legend.\nThe default value is `true` for standalone series, `false` for linked\nseries."
              },
              "subtree": {}
            },
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross the zero\nplane (or [threshold](#plotOptions.series.threshold) option) unless the\ndata actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2, 3 will\nmake the Y axis show negative values according to the `minPadding` option.\n If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "stacking": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "stacking",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to stack the values of each series on top of each other. Possible\nvalues are null to disable, \"normal\" to stack by value or \"percent\". When\nstacking is enabled, data must be sorted in ascending X order.",
                "enumValues": [
                  null,
                  "normal",
                  "percent"
                ]
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "step",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to apply steps to the line. Possible values are `left`, `center`\nand `right`. Prior to 2.3.5, only `left` was supported.",
                "enumValues": [
                  null,
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Sticky tracking of mouse events. When true, the `mouseOut` event on a\nseries isn't triggered until the mouse moves over another series, or out\nof the plot area. When false, the `mouseOut` event on a series is triggered\nwhen the mouse leaves the area around the series' graph or markers. This\nalso implies the tooltip. When `stickyTracking` is false and `tooltip.\nshared` is false, the tooltip will be hidden when moving the mouse between\nseries. Defaults to true for line and area type series, but to false for\ncolumns, pies etc."
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The threshold, also called zero level or base level. For line type series\nthis is only used in conjunction with [negativeColor](#plotOptions.series.\nnegativeColor)."
              },
              "subtree": {}
            },
            "turboThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "turboThreshold",
                "excludes": {},
                "default": "1000",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When a series contains a data array that is longer than this, only one\ndimensional arrays of numbers, or two dimensional arrays with x and y\nvalues are allowed. Also, only the first point is tested, and the rest\nare assumed to be the same format. This saves expensive data checking\nand indexing in long series. Set it to `0` disable."
              },
              "subtree": {}
            },
            "visible": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "visible",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Set the initial visibility of the series."
              },
              "subtree": {}
            },
            "zoneAxis": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "zoneAxis",
                "excludes": {},
                "default": "y",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Defines the Axis on which the zones are applied."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {
                  "autoRotation": 1,
                  "autoRotationLimit": 1,
                  "distance": 1,
                  "maxStaggerLines": 1,
                  "reserveSpace": 1,
                  "staggerLines": 1,
                  "step": 1
                },
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Options for the series data labels, appearing next to each data point.\n\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the data labels can be styled wtih the `.highcharts-data-label-\nbox` and `.highcharts-data-label` class names ([see example](#http://jsfiddle.\nnet/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/series-\ndatalabels/\")).",
                "extends": "xAxis.labels"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "center",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The alignment of the data label compared to the point. If `right`, the\nright side of the label should be touching the point. For points with\nan extent, like columns, the alignments also dictates how to align it\ninside the box, as given with the [inside](#plotOptions.column.dataLabels.\ninside) option. Can be one of \"left\", \"center\" or \"right\".",
                    "enumValues": [
                      "left",
                      "center",
                      "right"
                    ]
                  },
                  "subtree": {}
                },
                "allowOverlap": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "allowOverlap",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Whether to allow data labels to overlap. To make the labels less sensitive\nfor overlapping, the [dataLabels.padding](#plotOptions.series.dataLabels.\npadding) can be set to 0."
                  },
                  "subtree": {}
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The background color or gradient for the data label. Defaults to `undefined`."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The border color for the data label. Defaults to `undefined`."
                  },
                  "subtree": {}
                },
                "borderRadius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderRadius",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The border radius in pixels for the data label."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The border width in pixels for the data label."
                  },
                  "subtree": {}
                },
                "className": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "className",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "A class name for the data label. Particularly in [styled mode](http://www.\nhighcharts.com/docs/chart-design-and-style/style-by-css), this can be\nused to give each series' or point's data label unique styling. In addition\nto this option, a default color class name is added so that we can give\nthe labels a [contrast text shadow](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/data-\nlabel-contrast/)."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The text color for the data labels. Defaults to `null`."
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Whether to hide data labels that are outside the plot area. By default,\nthe data label is moved inside the plot area according to the [overflow](#plotOptions.\nseries.dataLabels.overflow) option."
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Whether to defer displaying the data labels until the initial series animation\nhas finished."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "default": "{y}",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "A [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) for the data label. Available variables are the\nsame as for `formatter`."
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "For points with an extent, like columns, whether to align the data label\ninside the box or to the actual value point. Defaults to `false` in most\ncases, `true` in stacked columns."
                  },
                  "subtree": {}
                },
                "overflow": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "overflow",
                    "excludes": {},
                    "default": "justify",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "How to handle data labels that flow outside the plot area. The default\nis `justify`, which aligns them inside the plot area. For columns and\nbars, this means it will be moved inside the bar. To display data labels\noutside the plot area, set `crop` to `false` and `overflow` to `\"none\"`.",
                    "enumValues": [
                      "justify",
                      "none"
                    ]
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "When either the `borderWidth` or the `backgroundColor` is set, this is\nthe padding within the box."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Text rotation in degrees. Note that due to a more complex structure, backgrounds,\n borders and padding will be lost on a rotated data label."
                  },
                  "subtree": {}
                },
                "shadow": {
                  "meta": {
                    "types": {
                      "boolean": 1,
                      "object": 1
                    },
                    "name": "shadow",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The shadow of the box. Works best with `borderWidth` or `backgroundColor`.\nSince 2.3 the shadow can be an object configuration containing `color`,\n `offsetX`, `offsetY`, `opacity` and `width`."
                  },
                  "subtree": {}
                },
                "shape": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "shape",
                    "excludes": {},
                    "default": "square",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The name of a symbol to use for the border around the label. Symbols are\npredefined functions on the Renderer object."
                  },
                  "subtree": {}
                },
                "staggerLines": {
                  "meta": {
                    "types": {},
                    "name": "staggerLines",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "n/a for data labels"
                  },
                  "subtree": {}
                },
                "step": {
                  "meta": {
                    "types": {},
                    "name": "step",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "n/a for data labels"
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "cssobject": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "default": "{\"color\": \"contrast\", \"fontSize\": \"11px\", \"fontWeight\": \"bold\", \"textOutline\": \"1px 1px contrast\" }",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Styles for the label."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The vertical alignment of a data label. Can be one of `top`, `middle`\nor `bottom`. The default value depends on the data, for instance in a\ncolumn chart, the label is above positive values and below negative values.",
                    "enumValues": [
                      "top",
                      "middle",
                      "bottom"
                    ]
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The x position offset of the label relative to the point."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "-6",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The y position offset of the label relative to the point."
                  },
                  "subtree": {}
                },
                "zIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "zIndex",
                    "excludes": {},
                    "default": "6",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The Z index of the data labels. The default Z index puts it above the\nseries. Use a Z index of 2 to display it behind the series."
                  },
                  "subtree": {}
                }
              }
            },
            "events": {
              "meta": {
                "types": {},
                "name": "events",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                }
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Options for the point markers of line-like series. Properties like `fillColor`,\n`lineColor` and `lineWidth` define the visual appearance of the markers.\nOther series types, like column series, don't have markers, but have\nvisual options on the series level instead.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the markers can be styled with the `.highcharts-point`, `.highcharts-\npoint-hover` and `.highcharts-point-select` class names."
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "null",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Enable or disable the point marker. If `null`, the markers are hidden\nwhen the data is dense, and shown for more widespread data points."
                  },
                  "subtree": {}
                },
                "fillColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "fillColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The fill color of the point marker. When `null`, the series' or point's\ncolor is used."
                  },
                  "subtree": {}
                },
                "height": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "height",
                    "excludes": {},
                    "default": "null",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Image markers only. Set the image width explicitly. When using this option,\n a `width` must also be set."
                  },
                  "subtree": {}
                },
                "lineColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "lineColor",
                    "excludes": {},
                    "default": "#ffffff",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The color of the point marker's outline. When `null`, the series' or point's\ncolor is used."
                  },
                  "subtree": {}
                },
                "lineWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "lineWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The width of the point marker's outline."
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": "4",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The radius of the point marker."
                  },
                  "subtree": {}
                },
                "symbol": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "symbol",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "A predefined shape or symbol for the marker. When null, the symbol is\npulled from options.symbols. Other possible values are \"circle\", \"square\",\n\"diamond\", \"triangle\" and \"triangle-down\".\n\nAdditionally, the URL to a graphic can be given on this form: \"url(graphic.\npng)\". Note that for the image to be applied to exported charts, its URL\nneeds to be accessible by the export server.\n\nCustom callbacks for symbol path generation can also be added to `Highcharts.\nSVGRenderer.prototype.symbols`. The callback is then used by its method\nname, as shown in the demo.",
                    "enumValues": [
                      null,
                      "circle",
                      "square",
                      "diamond",
                      "triangle",
                      "triangle-down"
                    ]
                  },
                  "subtree": {}
                },
                "width": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "width",
                    "excludes": {},
                    "default": "null",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Image markers only. Set the image width explicitly. When using this option,\n a `height` must also be set."
                  },
                  "subtree": {}
                },
                "states": {
                  "meta": {
                    "types": {},
                    "name": "states",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    }
                  },
                  "subtree": {
                    "hover": {
                      "meta": {
                        "types": {},
                        "name": "hover",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        }
                      },
                      "subtree": {
                        "enabled": {
                          "meta": {
                            "types": {
                              "boolean": 1
                            },
                            "name": "enabled",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "Enable or disable the point marker."
                          },
                          "subtree": {}
                        },
                        "fillColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "fillColor",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The fill color of the marker in hover state."
                          },
                          "subtree": {}
                        },
                        "lineColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "lineColor",
                            "excludes": {},
                            "default": "#ffffff",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The color of the point marker's outline. When `null`, the series' or point's\ncolor is used."
                          },
                          "subtree": {}
                        },
                        "lineWidth": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "lineWidth",
                            "excludes": {},
                            "default": "0",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The width of the point marker's outline."
                          },
                          "subtree": {}
                        },
                        "lineWidthPlus": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "lineWidthPlus",
                            "excludes": {},
                            "default": "1",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The additional line width for a hovered point."
                          },
                          "subtree": {}
                        },
                        "radius": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radius",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The radius of the point marker. In hover state, it defaults to the normal\nstate's radius + 2 as per the [radiusPlus](#plotOptions.series.marker.\nstates.hover.radiusPlus) option."
                          },
                          "subtree": {}
                        },
                        "radiusPlus": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radiusPlus",
                            "excludes": {},
                            "default": "2",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The number of pixels to increase the radius of the hovered point."
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "select": {
                      "meta": {
                        "types": {},
                        "name": "select",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "The appearance of the point marker when selected. In order to allow a\npoint to be selected, set the `series.allowPointSelect` option to true."
                      },
                      "subtree": {
                        "enabled": {
                          "meta": {
                            "types": {
                              "boolean": 1
                            },
                            "name": "enabled",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "Enable or disable visible feedback for selection."
                          },
                          "subtree": {}
                        },
                        "fillColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "fillColor",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The fill color of the point marker."
                          },
                          "subtree": {}
                        },
                        "lineColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "lineColor",
                            "excludes": {},
                            "default": "#000000",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The color of the point marker's outline. When `null`, the series' or point's\ncolor is used."
                          },
                          "subtree": {}
                        },
                        "lineWidth": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "lineWidth",
                            "excludes": {},
                            "default": "0",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The width of the point marker's outline."
                          },
                          "subtree": {}
                        },
                        "radius": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radius",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The radius of the point marker. In hover state, it defaults to the normal\nstate's radius + 2."
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                }
              }
            },
            "point": {
              "meta": {
                "types": {},
                "name": "point",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Properties for each single point"
              },
              "subtree": {
                "events": {
                  "meta": {
                    "types": {},
                    "name": "events",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Events for each single point"
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {
                  "plotoptions.series.states": 1
                },
                "name": "states",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A wrapper object for all the series options in specific states."
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "Options for the hovered series"
                  },
                  "subtree": {
                    "enabled": {
                      "meta": {
                        "types": {
                          "boolean": 1
                        },
                        "name": "enabled",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1,
                          "highmaps": 1
                        },
                        "description": "Enable separate styles for the hovered series to visualize that the user\nhovers either the series itself or the legend. ."
                      },
                      "subtree": {}
                    },
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "2",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "Pixel with of the graph line."
                      },
                      "subtree": {}
                    },
                    "lineWidthPlus": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "The additional line width for the graph of a hovered series."
                      },
                      "subtree": {}
                    },
                    "halo": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "halo",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "Options for the halo appearing around the hovered point in line-type series\nas well as outside the hovered slice in pie charts. By default the halo\nis filled by the current point or series color with an opacity of 0.25\\.\nThe halo can be disabled by setting the `halo` option to `false`.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the halo is styled with the `.highcharts-halo` class, with colors\ninherited from `.highcharts-color-{n}`."
                      },
                      "subtree": {
                        "attributes": {
                          "meta": {
                            "types": {
                              "object": 1
                            },
                            "name": "attributes",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "A collection of SVG attributes to override the appearance of the halo,\n for example `fill`, `stroke` and `stroke-width`."
                          },
                          "subtree": {}
                        },
                        "opacity": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "opacity",
                            "excludes": {},
                            "default": "0.25",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "Opacity for the halo unless a specific fill is overridden using the `attributes`\nsetting. Note that Highcharts is only able to apply opacity to colors\nof hex or rgb(a) formats."
                          },
                          "subtree": {}
                        },
                        "size": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "size",
                            "excludes": {},
                            "default": "10",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The pixel size of the halo. For point markers this is the radius of the\nhalo. For pie slices it is the width of the halo outside the slice. For\nbubbles it defaults to 5 and is the width of the halo outside the bubble."
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "marker": {
                      "meta": {
                        "types": {},
                        "name": "marker",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "In Highcharts 1.0, the appearance of all markers belonging to the hovered\nseries. For settings on the hover state of the individual point, see [marker.\nstates.hover](#plotOptions.series.marker.states.hover).",
                        "extends": "plotOptions.series.marker"
                      },
                      "subtree": {
                        "states": {
                          "meta": {
                            "types": {},
                            "name": "states",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            }
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "borderColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The border color of the point in this state."
                      },
                      "subtree": {}
                    },
                    "borderWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "borderWidth",
                        "excludes": {},
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The border width of the point in this state"
                      },
                      "subtree": {}
                    },
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": "0.2",
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The relative brightness of the point when hovered, relative to the normal\npoint color."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The color of the shape in this state"
                      },
                      "subtree": {}
                    }
                  }
                },
                "normal": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "normal",
                    "excludes": {},
                    "products": {
                      "highmaps": 1
                    },
                    "description": "Overrides for the normal state"
                  },
                  "subtree": {
                    "animation": {
                      "meta": {
                        "types": {
                          "object": 1,
                          "boolean": 1
                        },
                        "name": "animation",
                        "excludes": {},
                        "default": "true",
                        "products": {
                          "highmaps": 1
                        },
                        "description": "Animation options for the fill color when returning from hover state to\nnormal state. The animation adds some latency in order to reduce the effect\nof flickering when hovering in and out of for example an uneven coastline."
                      },
                      "subtree": {}
                    }
                  }
                },
                "select": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "select",
                    "excludes": {
                      "brightness": 1
                    },
                    "products": {
                      "highmaps": 1
                    },
                    "description": "Specific options for point in selected states, after being selected by\n[allowPointSelect](#plotOptions.series.allowPointSelect) or programmatically.",
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {
                  "animation": 1,
                  "backgroundColor": 1,
                  "borderColor": 1,
                  "borderRadius": 1,
                  "borderWidth": 1,
                  "crosshairs": 1,
                  "enabled": 1,
                  "formatter": 1,
                  "positioner": 1,
                  "shadow": 1,
                  "shared": 1,
                  "shape": 1,
                  "snap": 1,
                  "style": 1,
                  "useHTML": 1
                },
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A configuration object for the tooltip rendering of each single series.\nProperties are inherited from [tooltip](#tooltip), but only the following\nproperties can be defined on a series level.",
                "extends": "tooltip"
              },
              "subtree": {}
            },
            "zones": {
              "meta": {
                "types": {
                  "array": "object"
                },
                "name": "zones",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An array defining zones within a series. Zones can be applied to the X\naxis, Y axis or Z axis for bubbles, according to the `zoneAxis` option.\n\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the color zones are styled with the `.highcharts-zone-{n}` class,\nor custom classed from the `className` option ([view live demo](http://jsfiddle.\nnet/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/color-\nzones/))."
              },
              "subtree": {
                "className": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "className",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "[Styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css) only. A custom class name for the zone."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Defines the color of the series."
                  },
                  "subtree": {}
                },
                "dashStyle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "dashStyle",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "A name for the dash style to use for the graph."
                  },
                  "subtree": {}
                },
                "fillColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "fillColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Defines the fill color for the series (in area type series)"
                  },
                  "subtree": {}
                },
                "value": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "value",
                    "excludes": {},
                    "default": "undefined",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The value up to where the zone extends, if undefined the zones stretches\nto the last value in the series."
                  },
                  "subtree": {}
                }
              }
            },
            "compare": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "compare",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "Compare the values of the series against the first non-null, non-zero\nvalue in the visible range. The y axis will show percentage or absolute\nchange depending on whether `compare` is set to `\"percent\"` or `\"value\"`.\nWhen this is applied to multiple series, it allows comparing the development\nof the series against each other."
              },
              "subtree": {}
            },
            "compareBase": {
              "meta": {
                "types": {
                  "number": 1,
                  "enum": 1
                },
                "name": "compareBase",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "When [compare](#plotOptions.series.compare) is `percent`, this option\ndictates whether to use 0 or 100 as the base of comparison.",
                "enumValues": [
                  0,
                  100
                ]
              },
              "subtree": {}
            },
            "gapSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "gapSize",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "Defines when to display a gap in the graph. A gap size of 5 means that\nif the distance between two points is greater than five times that of\nthe two closest points, the graph will be broken.\n\nIn practice, this option is most often used to visualize gaps in time\nseries. In a stock chart, intraday data is available for daytime hours,\n while gaps will appear in nights and weekends."
              },
              "subtree": {}
            },
            "legendIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "legendIndex",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "The sequential index of the series within the legend."
              },
              "subtree": {}
            },
            "navigatorOptions": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "navigatorOptions",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "Options for the corresponding navigator series if `showInNavigator` is\n`true` for this series. Available options are the same as any series,\ndocumented at [plotOptions](#plotOptions.series) and [series](#series).\n\n\nThese options are merged with options in [navigator.series](#navigator.\nseries), and will take precedence if the same option is defined both places."
              },
              "subtree": {}
            },
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "The width of each point on the x axis. For example in a column chart with\none value each day, the pointRange would be 1 day (= 24 * 3600 * 1000\nmilliseconds). This is normally computed automatically, but this option\ncan be used to override the automatic value."
              },
              "subtree": {}
            },
            "showInNavigator": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInNavigator",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "Whether or not to show the series in the navigator. Takes precedence over\n[navigator.baseSeries](#navigator.baseSeries) if defined."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {},
                "name": "dataGrouping",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Data grouping is the concept of sampling the data values into larger blocks\nin order to ease readability and increase performance of the JavaScript\ncharts. Highstock by default applies data grouping when the points become\ncloser than a certain pixel value, determined by the `groupPixelWidth`\noption.\n\nIf data grouping is applied, the grouping information of grouped points\ncan be read from the [Point.dataGroup](#Point.dataGroup)."
              },
              "subtree": {
                "dateTimeLabelFormats": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "dateTimeLabelFormats",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Datetime formats for the header of the tooltip in a stock chart. The format\ncan vary within a chart depending on the currently selected time range\nand the current data grouping.\n\nThe default formats are:\n\n<pre>{    millisecond: ['%A, %b %e, %H:%M:%S.%L', '%A, %b %e, %H:%M:%S.\n%L', '-%H:%M:%S.%L'],    second: ['%A, %b %e, %H:%M:%S', '%A, %b %e, %H:%M:%S',\n'-%H:%M:%S'],    minute: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],\nhour: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],    day:\n['%A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],    week: ['Week from\n%A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],    month: ['%B %Y', '%B',\n'-%B %Y'],    year: ['%Y', '%Y', '-%Y'] }</pre>\n\nFor each of these array definitions, the first item is the format used\nwhen the active time span is one unit. For instance, if the current data\napplies to one week, the first item of the week array is used. The second\nand third items are used when the active time span is more than two units.\nFor instance, if the current data applies to two weeks, the second and\nthird item of the week array are used, and applied to the start and end\ndate of the time span."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Enable or disable data grouping."
                  },
                  "subtree": {}
                },
                "forced": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "forced",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highstock": 1
                    },
                    "description": "When data grouping is forced, it runs no matter how small the intervals\nare. This can be handy for example when the sum should be calculated for\nvalues appearing at random times within each hour."
                  },
                  "subtree": {}
                },
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": "2",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The approximate pixel width of each group. If for example a series with\n30 points is displayed over a 600 pixel wide plot area, no grouping is\nperformed. If however the series contains so many points that the spacing\nis less than the groupPixelWidth, Highcharts will try to group it into\nappropriate groups so that each is more or less two pixels wide. If multiple\nseries with different group pixel widths are drawn on the same x axis,\nall series will take the greatest width. For example, line series have\n2px default group width, while column series have 10px. If combined, both\nthe line and the column will have 10px by default."
                  },
                  "subtree": {}
                },
                "smoothed": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "smoothed",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Normally, a group is indexed by the start of that group, so for example\nwhen 30 daily values are grouped into one month, that month's x value\nwill be the 1st of the month. This apparently shifts the data to the left.\nWhen the smoothed option is true, this is compensated for. The data is\nshifted to the middle of the group, and min and max values are preserved.\n Internally, this is used in the Navigator series."
                  },
                  "subtree": {}
                },
                "units": {
                  "meta": {
                    "types": {
                      "array": "object"
                    },
                    "name": "units",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "An array determining what time intervals the data is allowed to be grouped\nto. Each array item is an array where the first value is the time unit\nand the second value another array of allowed multiples. Defaults to:\n\n<pre>units: [[ \t'millisecond', // unit name \t[1, 2, 5, 10, 20, 25, 50,\n100, 200, 500] // allowed multiples ], [ \t'second', \t[1, 2, 5, 10, 15,\n30] ], [ \t'minute', \t[1, 2, 5, 10, 15, 30] ], [ \t'hour', \t[1, 2, 3, 4,\n6, 8, 12] ], [ \t'day', \t[1] ], [ \t'week', \t[1] ], [ \t'month', \t[1, 3,\n 6] ], [ \t'year', \tnull ]]</pre>"
                  },
                  "subtree": {}
                }
              }
            },
            "allAreas": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allAreas",
                "excludes": {},
                "default": "true",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether all areas of the map defined in `mapData` should be rendered.\nIf `true`, areas which don't correspond to a data point, are rendered\nas `null` points. If `false`, those areas are skipped."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#cccccc",
                "products": {
                  "highmaps": 1
                },
                "description": "The border color of the map areas.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the border stroke is given in the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highmaps": 1
                },
                "description": "The border width of each map area.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the border stroke width is given in the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "colorAxis": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorAxis",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highmaps": 1
                },
                "description": "Set this option to `false` to prevent a series from connecting to the\nglobal color axis. This will cause the series to have its own legend item."
              },
              "subtree": {}
            },
            "joinBy": {
              "meta": {
                "types": {
                  "string": 1,
                  "array": "String"
                },
                "name": "joinBy",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "What property to join the `mapData` to the value data. For example, if\njoinBy is \"code\", the mapData items with a specific code is merged into\nthe data with the same code. For maps loaded from GeoJSON, the keys may\nbe held in each point's `properties` object.\n\nThe joinBy option can also be an array of two values, where the first\npoints to a key in the `mapData`, and the second points to another key\nin the `data`.\n\nWhen joinBy is `null`, the map items are joined by their position in the\narray, which performs much better in maps with many data points. This\nis the recommended option if you are printing more than a thousand data\npoints and have a backend that can preprocess the data into a parallel\narray of the mapData."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Define the z index of the series."
              },
              "subtree": {}
            }
          }
        },
        "solidgauge": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "solidgauge",
            "excludes": {
              "color": 1,
              "dial": 1,
              "linkedTo": 1,
              "negativeColor": 1,
              "pivot": 1,
              "softThreshold": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "A gauge showing values using a filled arc with colors indicating the value.\nThe solid gauge plots values against the `yAxis`, which is extended with\nsome color options, [minColor](#yAxis.minColor), [maxColor](#yAxis.maxColor)\nand [stops](#yAxis.stops), to control the color of the gauge itself.",
            "extends": "plotOptions.gauge"
          },
          "subtree": {
            "colorByPoint": {
              "meta": {
                "types": {},
                "name": "colorByPoint",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "linecap": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "linecap",
                "excludes": {},
                "default": "round",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether the strokes of the solid gauge should be `round` or `square`.",
                "enumValues": [
                  "square",
                  "round"
                ]
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The threshold or base level for the gauge."
              },
              "subtree": {}
            }
          }
        },
        "treemap": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "treemap",
            "excludes": {
              "borderRadius": 1,
              "colsize": 1,
              "rowsize": 1,
              "pointIntervalUnit": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "The size of the point shape is determined by its value relative to its\nsiblings values. Requires the module `heatmap.js` as well, if functionality\nsuch as the [colorAxis](http://api.highcharts.com/highmaps#colorAxis)\nis to be used.",
            "extends": "plotOptions.heatmap"
          },
          "subtree": {
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display this series type or specific series item in the legend."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.heatmap.dataLabels"
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Whether to defer displaying the data labels until the initial series\nanimation has finished."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The vertical alignment of a data label. Can be one of top, middle or\nbottom. The default value depends on the data, for instance in a column\nchart, the label is above positive values and below negative values."
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Whether to align the data label inside the box or to the actual value\npoint."
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.heatmap.tooltip"
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "headerFormat",
                    "excludes": {},
                    "default": "\"\"",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The HTML of the tooltip header line. Variables are enclosed by curly\nbrackets. Available variables are point.key, series.name, series.color\nand other members from the point and series objects. The point.key variable\ncontains the category name, x value or datetime string depending on\nthe type of axis. For datetime axes, the point.key date format can be\nset using tooltip.xDateFormat."
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "\"&#60;b&#62;{point.name}&#60;/b&#62;: {point.value}&#60;/b&#62;&#60;br/&#62;\"",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The HTML of the point's line in the tooltip. Variables are enclosed\nby curly brackets. Available variables are point.x, point.y, series.\nname and series.color and other properties on the same form. Furthermore,\npoint.y can be extended by the tooltip.yPrefix and tooltip.ySuffix\nvariables. This can also be overridden for each series, which makes\nit a good hook for displaying units."
                  },
                  "subtree": {}
                }
              }
            },
            "layoutAlgorithm": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "layoutAlgorithm",
                "excludes": {},
                "default": "sliceAndDice",
                "products": {
                  "highcharts": 1
                },
                "description": "This option decides which algorithm is used for setting position and\ndimensions of the points. Can be one of `sliceAndDice`, `stripes`, `squarified`\nor `strip`.",
                "enumValues": [
                  "sliceAndDice",
                  "stripes",
                  "squarified",
                  "strip"
                ]
              },
              "subtree": {}
            },
            "layoutStartingDirection": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "layoutStartingDirection",
                "excludes": {},
                "default": "vertical",
                "products": {
                  "highcharts": 1
                },
                "description": "Defines which direction the layout algorithm will start drawing. Possible\nvalues are \"vertical\" and \"horizontal\".",
                "enumValues": [
                  "vertical",
                  "horizontal"
                ]
              },
              "subtree": {}
            },
            "alternateStartingDirection": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "alternateStartingDirection",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Enabling this option will make the treemap alternate the drawing direction\nbetween vertical and horizontal. The next levels starting direction will\nalways be the opposite of the previous."
              },
              "subtree": {}
            },
            "levelIsConstant": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "enum": 1
                },
                "name": "levelIsConstant",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Used together with the levels and allowDrillToNode options. When set\nto false the first level visible when drilling is considered to be level\none. Otherwise the level will be the same as the tree structure.",
                "enumValues": [
                  "true",
                  "false"
                ]
              },
              "subtree": {}
            },
            "drillUpButton": {
              "meta": {
                "types": {},
                "name": "drillUpButton",
                "excludes": {}
              },
              "subtree": {
                "position": {
                  "meta": {
                    "types": {},
                    "name": "position",
                    "excludes": {}
                  },
                  "subtree": {
                    "align": {
                      "meta": {
                        "types": {},
                        "name": "align",
                        "excludes": {},
                        "default": "right"
                      },
                      "subtree": {}
                    },
                    "x": {
                      "meta": {
                        "types": {},
                        "name": "x",
                        "excludes": {}
                      },
                      "subtree": {}
                    },
                    "y": {
                      "meta": {
                        "types": {},
                        "name": "y",
                        "excludes": {},
                        "default": 10
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#e6e6e6",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the border surrounding each tree map item."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {},
                "name": "borderWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "opacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "opacity",
                "excludes": {},
                "default": "0.15",
                "products": {
                  "highcharts": 1
                },
                "description": "The opacity of a point in treemap. When a point has children, the visibility\nof the children is determined by the opacity."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "A wrapper object for all the series options in specific states.",
                "extends": "plotOptions.heatmap.states"
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {
                      "halo": 1
                    },
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Options for the hovered series",
                    "extends": "plotOptions.heatmap.states.hover"
                  },
                  "subtree": {
                    "borderColor": {
                      "meta": {
                        "types": {},
                        "name": "borderColor",
                        "excludes": {},
                        "default": "${palette.neutralColor40}"
                      },
                      "subtree": {}
                    },
                    "brightness": {
                      "meta": {
                        "types": {},
                        "name": "brightness",
                        "excludes": {}
                      },
                      "subtree": {}
                    },
                    "opacity": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "opacity",
                        "excludes": {},
                        "default": "0.75",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The opacity of a point in treemap. When a point has children, the visibility\nof the children is determined by the opacity."
                      },
                      "subtree": {}
                    },
                    "shadow": {
                      "meta": {
                        "types": {},
                        "name": "shadow",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "allowDrillToNode": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "enum": 1
                },
                "name": "allowDrillToNode",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "When enabled the user can click on a point which is a parent and zoom\nin on its children.",
                "enumValues": [
                  "false",
                  "true"
                ]
              },
              "subtree": {}
            },
            "cropThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "cropThreshold",
                "excludes": {},
                "default": "300",
                "products": {
                  "highcharts": 1
                },
                "description": "When the series contains less points than the crop threshold, all points\nare drawn, event if the points fall outside the visible plot area at the\ncurrent zoom. The advantage of drawing all points (including markers and\ncolumns), is that animation is performed on updates. On the other hand,\nwhen the series contains more points than the crop threshold, the series\ndata is cropped to only contain points that fall within the plot area.\nThe advantage of cropping away invisible points is to increase performance\non large series."
              },
              "subtree": {}
            },
            "interactByLeaf": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "enum": 1
                },
                "name": "interactByLeaf",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "This option decides if the user can interact with the parent nodes or\njust the leaf nodes. When this option is undefined, it will be true by\ndefault. However when allowDrillToNode is true, then it will be false\nby default.",
                "enumValues": [
                  "false",
                  "true"
                ]
              },
              "subtree": {}
            },
            "sortIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "sortIndex",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The sort index of the point inside the treemap level."
              },
              "subtree": {}
            },
            "levels": {
              "meta": {
                "types": {
                  "array": "Object"
                },
                "name": "levels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Set options on specific levels. Takes precedence over series options,\nbut not point options."
              },
              "subtree": {
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set a `borderColor` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "borderDashStyle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "borderDashStyle",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Set the dash style of the border of all the point which lies on the level.\nSee <a href\"#plotoptions.scatter.dashstyle\"=\"\">plotOptions.scatter.dashStyle</a>\nfor possible options."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the borderWidth on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set a color on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "dataLabels": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "dataLabels",
                    "excludes": {},
                    "default": "undefined",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the options of dataLabels on each point which lies on the level.\n[plotOptions.treemap.dataLabels](#plotOptions.treemap.dataLabels) for\npossible values."
                  },
                  "subtree": {}
                },
                "layoutAlgorithm": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "layoutAlgorithm",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the layoutAlgorithm option on a specific level.",
                    "enumValues": [
                      "sliceAndDice",
                      "stripes",
                      "squarified",
                      "strip"
                    ]
                  },
                  "subtree": {}
                },
                "layoutStartingDirection": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "layoutStartingDirection",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the layoutStartingDirection option on a specific level.",
                    "enumValues": [
                      "vertical",
                      "horizontal"
                    ]
                  },
                  "subtree": {}
                },
                "level": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "level",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Decides which level takes effect from the options set in the levels object."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "area": {
          "meta": {
            "types": {},
            "name": "area",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.series"
          },
          "subtree": {
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross the\nzero plane (or [threshold](#plotOptions.series.threshold) option) unless\nthe data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2, 3 will\nmake the Y axis show negative values according to the `minPadding` option.\n If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The Y axis value to serve as the base for the area, for distinguishing\nbetween values above and below a threshold. If `null`, the area behaves\nlike a line series with fill between the graph and the Y axis minimum."
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Fill color or gradient for the area. When `null`, the series' `color`\nis used with the series' `fillOpacity`."
              },
              "subtree": {}
            },
            "fillOpacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "fillOpacity",
                "excludes": {},
                "default": "0.75",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Fill opacity for the area. Note that when you set an explicit `fillColor`,\nthe `fillOpacity` is not applied. Instead, you should define the opacity\nin the `fillColor` with an rgba color definition."
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A separate color for the graph line. By default the line takes the `color`\nof the series, but the lineColor setting allows setting a separate color\nfor the line without altering the `fillColor`."
              },
              "subtree": {}
            },
            "negativeFillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeFillColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "A separate color for the negative part of the area."
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "step",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to apply steps to the line. Possible values are `left`, `center`\nand `right`. Prior to 2.3.5, only `left` was supported.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "trackByArea": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "trackByArea",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether the whole area or just the line should respond to mouseover tooltips\nand other mouse or touch events."
              },
              "subtree": {}
            }
          }
        },
        "bar": {
          "meta": {
            "types": {},
            "name": "bar",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "extends": "plotOptions.column"
          },
          "subtree": {
            "inverted": {
              "meta": {
                "types": {},
                "name": "inverted",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.column.dataLabels"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "left",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Alignment of the data label relative to the data point."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The x position of the data label relative to the data point."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "candlestick": {
          "meta": {
            "types": {},
            "name": "candlestick",
            "excludes": {
              "borderColor": 1,
              "borderRadius": 1,
              "borderWidth": 1,
              "colorByPoint": 1,
              "compare": 1,
              "stacking": 1
            },
            "products": {
              "highstock": 1
            },
            "extends": "plotOptions.column"
          },
          "subtree": {
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "extends": "plotOptions.column.states.hover"
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "2",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The pixel width of the line/border around the candlestick. Defaults\nto `2`."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#000000",
                "products": {
                  "highstock": 1
                },
                "description": "The color of the line/border of the candlestick.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the line stroke can be set with the `.highcharts-candlestick-\nseries .highcahrts-point` rule."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "The pixel width of the candlestick line/border. Defaults to `1`.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the line stroke width can be set with the `.highcharts-candlestick-\nseries .highcahrts-point` rule."
              },
              "subtree": {}
            },
            "upColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highstock": 1
                },
                "description": "The fill color of the candlestick when values are rising.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the up color can be set with the `.highcharts-candlestick-series\n.highcharts-point-up` rule."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {},
                "name": "borderColor",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderRadius": {
              "meta": {
                "types": {},
                "name": "borderRadius",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {},
                "name": "borderWidth",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "upLineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upLineColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highstock": 1
                },
                "description": "The specific line color for up candle sticks. The default is to inherit\nthe general `lineColor` setting."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {},
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {}
            }
          }
        },
        "column": {
          "meta": {
            "types": {},
            "name": "column",
            "excludes": {
              "connectNulls": 1,
              "dashStyle": 1,
              "linecap": 1,
              "lineWidth": 1,
              "marker": 1,
              "connectEnds": 1,
              "step": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.series"
          },
          "subtree": {
            "borderRadius": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderRadius",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The corner radius of the border surrounding each column or bar."
              },
              "subtree": {}
            },
            "groupPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupPadding",
                "excludes": {},
                "default": "0.2",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Padding between each value groups, in x axis units."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": "0.1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Padding between each column or bar, in x axis units."
              },
              "subtree": {}
            },
            "minPointLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "minPointLength",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The minimal height for a column or width for a bar. By default, 0 values\nare not shown. To visualize a 0 (or close to zero) point, set the minimal\npoint length to a pixel value like 3\\. In stacked column charts, minPointLength\nmight not be respected for tightly packed values."
              },
              "subtree": {}
            },
            "cropThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "cropThreshold",
                "excludes": {},
                "default": "50",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When the series contains less points than the crop threshold, all points\nare drawn, event if the points fall outside the visible plot area at\nthe current zoom. The advantage of drawing all points (including markers\nand columns), is that animation is performed on updates. On the other\nhand, when the series contains more points than the crop threshold, the\nseries data is cropped to only contain points that fall within the plot\narea. The advantage of cropping away invisible points is to increase\nperformance on large series. ."
              },
              "subtree": {}
            },
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The X axis range that each point is valid for. This determines the width\nof the column. On a categorized axis, the range will be 1 by default\n(one category unit). On linear and datetime axes, the range will be computed\nas the distance between the two closest data points."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {
                      "lineWidth": 1,
                      "lineWidthPlus": 1,
                      "marker": 1
                    },
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {},
                        "name": "halo",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    },
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": "0.1",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "How much to brighten the point on interaction. Requires the main color\nto be defined in hex or rgb(a) format.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the hover brightening is by default replaced with a fill-opacity\nset in the `.highcharts-point:hover` rule."
                      },
                      "subtree": {}
                    },
                    "shadow": {
                      "meta": {
                        "types": {},
                        "name": "shadow",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "products": {
                          "highcharts": 1
                        },
                        "description": "A specific border color for the hovered point. Defaults to inherit the\nnormal state border color."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "undefined",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "A specific color for the hovered point."
                      },
                      "subtree": {}
                    }
                  }
                },
                "select": {
                  "meta": {
                    "types": {},
                    "name": "select",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {},
                        "name": "color",
                        "excludes": {},
                        "default": "${palette.neutralColor20}"
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {},
                        "name": "borderColor",
                        "excludes": {},
                        "default": "${palette.neutralColor100}"
                      },
                      "subtree": {}
                    },
                    "shadow": {
                      "meta": {
                        "types": {},
                        "name": "shadow",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {},
                    "name": "align",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {},
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {},
                    "name": "y",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {},
                    "name": "inside",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    }
                  },
                  "subtree": {}
                }
              }
            },
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross the\nzero plane (or [threshold](#plotOptions.series.threshold) option) unless\nthe data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2, 3 will\nmake the Y axis show negative values according to the `minPadding` option.\n If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "startFromThreshold": {
              "meta": {
                "types": {},
                "name": "startFromThreshold",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {},
                "name": "stickyTracking",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "distance": {
                  "meta": {
                    "types": {},
                    "name": "distance",
                    "excludes": {},
                    "default": 6
                  },
                  "subtree": {}
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The Y axis value to serve as the base for the columns, for distinguishing\nbetween values above and below a threshold. If `null`, the columns extend\nfrom the padding Y axis minimum."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The color of the border surrounding each column or bar.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the border stroke can be set with the `.highcharts-point` rule."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The width of the border surrounding each column or bar.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width can be set with the `.highcharts-point` rule."
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When using automatic point colors pulled from the `options.colors` collection,\nthis option determines whether the chart should receive one color per\nseries or one color per point."
              },
              "subtree": {}
            },
            "colors": {
              "meta": {
                "types": {
                  "array": "Color"
                },
                "name": "colors",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A series specific or series type specific color set to apply instead of\nthe global [colors](#colors) when [colorByPoint](#plotOptions.column.colorByPoint)\nis true."
              },
              "subtree": {}
            },
            "depth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "depth",
                "excludes": {},
                "default": "25",
                "products": {
                  "highcharts": 1
                },
                "description": "Depth of the columns in a 3D column chart. Requires `highcharts-3d.js`."
              },
              "subtree": {}
            },
            "edgeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "edgeColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "3D columns only. The color of the edges. Similar to `borderColor`, except\nit defaults to the same color as the column."
              },
              "subtree": {}
            },
            "edgeWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "edgeWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "3D columns only. The width of the colored edges."
              },
              "subtree": {}
            },
            "groupZPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupZPadding",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The spacing between columns on the Z Axis in a 3D chart. Requires `highcharts-\n3d.js`."
              },
              "subtree": {}
            },
            "grouping": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "grouping",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to group non-stacked columns or to let them render independent\nof each other. Non-grouped columns will be laid out individually and overlap\neach other."
              },
              "subtree": {}
            },
            "maxPointWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "maxPointWidth",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The maximum allowed pixel width for a column, translated to the height\nof a bar in a bar chart. This prevents the columns from becoming too wide\nwhen there is a small number of points in the chart."
              },
              "subtree": {}
            },
            "pointWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointWidth",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A pixel value specifying a fixed width for each column or bar. When `null`,\n the width is calculated from the `pointPadding` and `groupPadding`."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {},
                "name": "dataGrouping",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "extends": "plotOptions.series.dataGrouping"
              },
              "subtree": {
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": "10",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The approximate pixel width of each group. If for example a series with\n30 points is displayed over a 600 pixel wide plot area, no grouping is\nperformed. If however the series contains so many points that the spacing\nis less than the groupPixelWidth, Highcharts will try to group it into\nappropriate groups so that each is more or less two pixels wide. Defaults\nto `10`."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "flags": {
          "meta": {
            "types": {},
            "name": "flags",
            "excludes": {
              "animation": 1,
              "borderColor": 1,
              "borderRadius": 1,
              "borderWidth": 1,
              "colorByPoint": 1,
              "compare": 1,
              "dashStyle": 1,
              "dataGrouping": 1,
              "gapSize": 1,
              "grouping": 1,
              "groupPadding": 1,
              "marker": 1,
              "minPointLength": 1,
              "pointInterval": 1,
              "pointPadding": 1,
              "pointPlacement": 1,
              "pointRange": 1,
              "pointStart": 1,
              "pointWidth": 1,
              "stacking": 1,
              "turboThreshold": 1
            },
            "products": {
              "highstock": 1
            },
            "extends": "plotOptions.column"
          },
          "subtree": {
            "pointRange": {
              "meta": {
                "types": {},
                "name": "pointRange",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "shape": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "shape",
                "excludes": {},
                "default": "flag",
                "products": {
                  "highstock": 1
                },
                "description": "The shape of the marker. Can be one of \"flag\", \"circlepin\", \"squarepin\",\nor an image on the format `url(/path-to-image.jpg)`. Individual shapes\ncan also be set for each point.",
                "enumValues": [
                  "flag",
                  "circlepin",
                  "squarepin"
                ]
              },
              "subtree": {}
            },
            "stackDistance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "stackDistance",
                "excludes": {},
                "default": "12",
                "products": {
                  "highstock": 1
                },
                "description": "When multiple flags in the same series fall on the same value, this number\ndetermines the vertical offset between them."
              },
              "subtree": {}
            },
            "textAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "textAlign",
                "excludes": {},
                "default": "center",
                "products": {
                  "highstock": 1
                },
                "description": "Text alignment for the text inside the flag.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {
                  "changeDecimals": 1,
                  "valueDecimals": 1,
                  "valuePrefix": 1,
                  "valueSuffix": 1
                },
                "products": {
                  "highstock": 1
                },
                "description": "Specific tooltip options for flag series. Flag series tooltips are different\nfrom most other types in that a flag doesn't have a data value, so the\ntooltip rather displays the `text` option for each point.",
                "extends": "plotOptions.series.tooltip"
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "{point.text}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {},
                "name": "y",
                "excludes": {}
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {},
                "name": "fillColor",
                "excludes": {},
                "default": "${palette.backgroundColor}"
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "The pixel width of the candlestick line/border. Defaults to `1`."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "extends": "plotOptions.column.states.hover"
                  },
                  "subtree": {
                    "lineColor": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "default": "\"black\"",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The color of the line/border of the flag Defaults to `\"black\"`."
                      },
                      "subtree": {}
                    },
                    "fillColor": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "fillColor",
                        "excludes": {},
                        "default": "\"#FCFFC5\"",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The fill or background color of the flag Defaults to `\"#FCFFC5\"`."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{ \"fontSize\": \"11px\", \"fontWeight\": \"bold\" }",
                "products": {
                  "highstock": 1
                },
                "description": "The text styles of the flag.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the styles are set in the `.highcharts-flag-series .highcharts-\npoint` rule."
              },
              "subtree": {
                "fontSize": {
                  "meta": {
                    "types": {},
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {},
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                }
              }
            },
            "animation": {
              "meta": {
                "types": {},
                "name": "animation",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {},
                "name": "borderColor",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderRadius": {
              "meta": {
                "types": {},
                "name": "borderRadius",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {},
                "name": "borderWidth",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {},
                "name": "colorByPoint",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {},
                "name": "dashStyle",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {},
                "name": "dataGrouping",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#000000",
                "products": {
                  "highstock": 1
                },
                "description": "The color of the line/border of the flag.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke is set in the `.highcharts-flag-series .highcharts-\npoint` rule."
              },
              "subtree": {}
            },
            "onKey": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "onKey",
                "excludes": {},
                "default": "y",
                "products": {
                  "highstock": 1
                },
                "description": "In case the flag is placed on a series, on what point key to place it.\nLine and columns have one key, `y`. In range or OHLC-type series, however,\nthe flag can optionally be placed on the `open`, `high`, `low` or `close`\nkey.",
                "enumValues": [
                  "y",
                  "open",
                  "high",
                  "low",
                  "close"
                ]
              },
              "subtree": {}
            },
            "onSeries": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "onSeries",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "The id of the series that the flags should be drawn on. If no id is given,\n the flags are drawn on the x axis."
              },
              "subtree": {}
            },
            "pointPadding": {
              "meta": {
                "types": {},
                "name": "pointPadding",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "pointWidth": {
              "meta": {
                "types": {},
                "name": "pointWidth",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "title": {
              "meta": {
                "types": {
                  "text": 1
                },
                "name": "title",
                "excludes": {},
                "default": "\"A\"",
                "products": {
                  "highstock": 1
                },
                "description": "The text to display on each flag. This can be defined on series level,\n or individually for each point. Defaults to `\"A\"`."
              },
              "subtree": {}
            },
            "turboThreshold": {
              "meta": {
                "types": {},
                "name": "turboThreshold",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "products": {
                  "highstock": 1
                },
                "description": "Whether to use HTML to render the flag texts. Using HTML allows for advanced\nformatting, images and reliable bi-directional text rendering. Note that\nexported images won't respect the HTML, and that HTML won't respect Z-\nindex settings."
              },
              "subtree": {}
            }
          }
        },
        "ohlc": {
          "meta": {
            "types": {},
            "name": "ohlc",
            "excludes": {
              "borderColor": 1,
              "borderRadius": 1,
              "borderWidth": 1,
              "stacking": 1
            },
            "products": {
              "highstock": 1
            },
            "extends": "plotOptions.column"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "The pixel width of the line/border. Defaults to `1`."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "extends": "plotOptions.column.states.hover"
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "3",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The pixel width of the line representing the OHLC point. Defaults to\n`3`."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "borderColor": {
              "meta": {
                "types": {},
                "name": "borderColor",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderRadius": {
              "meta": {
                "types": {},
                "name": "borderRadius",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {},
                "name": "borderWidth",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "N/A"
              },
              "subtree": {}
            },
            "upColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upColor",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Line color for up points."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {},
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The approximate pixel width of each group. If for example a series with\n30 points is displayed over a 600 pixel wide plot area, no grouping is\nperformed. If however the series contains so many points that the spacing\nis less than the groupPixelWidth, Highcharts will try to group it into\nappropriate groups so that each is more or less two pixels wide. Defaults\nto `5`."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "pie": {
          "meta": {
            "types": {},
            "name": "pie",
            "excludes": {
              "color": 1,
              "connectEnds": 1,
              "connectNulls": 1,
              "dashStyle": 1,
              "linecap": 1,
              "lineWidth": 1,
              "marker": 1,
              "negativeColor": 1,
              "pointStart": 1,
              "pointInterval": 1,
              "pointPlacement": 1,
              "showCheckbox": 1,
              "softThreshold": 1,
              "stacking": 1,
              "turboThreshold": 1,
              "threshold": 1,
              "cropThreshold": 1,
              "pointIntervalUnit": 1,
              "step": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "A pie chart is a circular chart divided into sectors, illustrating numerical\nproportion.",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "center": {
              "meta": {
                "types": {},
                "name": "center",
                "excludes": {}
              },
              "subtree": {}
            },
            "clip": {
              "meta": {
                "types": {},
                "name": "clip",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {},
                "name": "colorByPoint",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {
                  "align": 1,
                  "allowOverlap": 1,
                  "staggerLines": 1,
                  "step": 1
                },
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "distance": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "distance",
                    "excludes": {},
                    "default": "30",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The distance of the data label from the pie's edge. Negative numbers\nput the data label on top of the pie slices. Connectors are only shown\nfor data labels outside the pie."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true,
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {},
                    "name": "x",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "N/A for pies."
                  },
                  "subtree": {}
                },
                "connectorColor": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "connectorColor",
                    "excludes": {},
                    "default": "{point.color}",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The color of the line connecting the data label to the pie slice. The\ndefault color is the same as the point's color.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the connector stroke is given in the `.highcharts-data-label-\nconnector` class."
                  },
                  "subtree": {}
                },
                "connectorPadding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "connectorPadding",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The distance from the data label to the connector."
                  },
                  "subtree": {}
                },
                "connectorWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "connectorWidth",
                    "excludes": {},
                    "default": "1",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the line connecting the data label to the pie slice.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the connector stroke width is given in the `.highcharts-data-\nlabel-connector` class."
                  },
                  "subtree": {}
                },
                "softConnector": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "softConnector",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Whether to render the connector as a soft arc or a line with sharp break."
                  },
                  "subtree": {}
                }
              }
            },
            "ignoreHiddenPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "ignoreHiddenPoint",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Equivalent to [chart.ignoreHiddenSeries](#chart.ignoreHiddenSeries),\nthis option tells whether the series shall be redrawn as if the hidden\npoint were `null`.\n\nThe default value changed from `false` to `true` with Highcharts 3.0."
              },
              "subtree": {}
            },
            "legendType": {
              "meta": {
                "types": {},
                "name": "legendType",
                "excludes": {},
                "default": "point"
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "size": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "size",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1
                },
                "description": "The diameter of the pie relative to the plot area. Can be a percentage\nor pixel value. Pixel values are given as integers. The default behaviour\n(as of 3.0) is to scale to the plot area and give room for data labels\nwithin the plot area. As a consequence, the size of the pie may vary\nwhen points are updated and data labels more around. In that case it\nis best to set a fixed value, for example `\"75%\"`."
              },
              "subtree": {}
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display this particular series or series type in the legend.\n Since 2.1, pies are not shown in the legend by default."
              },
              "subtree": {}
            },
            "slicedOffset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "slicedOffset",
                "excludes": {},
                "default": "10",
                "products": {
                  "highcharts": 1
                },
                "description": "If a point is sliced, moved out from the center, how many pixels should\nit be moved?."
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Sticky tracking of mouse events. When true, the `mouseOut` event on a\nseries isn't triggered until the mouse moves over another series, or\nout of the plot area. When false, the `mouseOut` event on a series is\ntriggered when the mouse leaves the area around the series' graph or\nmarkers. This also implies the tooltip. When `stickyTracking` is false\nand `tooltip.shared` is false, the tooltip will be hidden when moving\nthe mouse between series."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "followPointer": {
                  "meta": {
                    "types": {},
                    "name": "followPointer",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the border surrounding each slice. When `null`, the border\ntakes the same color as the slice fill. This can be used together with\na `borderWidth` to fill drawing gaps created by antialiazing artefacts\nin borderless pies.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the border stroke is given in the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the border surrounding each slice.\n\nWhen setting the border width to 0, there may be small gaps between the\nslices due to SVG antialiasing artefacts. To work around this, keep the\nborder width at 0.5 or 1, but set the `borderColor` to `null` instead.\n\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the border stroke width is given in the `.highcharts-point`\nclass."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": "0.1",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "How much to brighten the point on interaction. Requires the main color\nto be defined in hex or rgb(a) format.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the hover brightness is by default replaced by a fill-opacity\ngiven in the `.highcharts-point-hover` class."
                      },
                      "subtree": {}
                    },
                    "shadow": {
                      "meta": {
                        "types": {},
                        "name": "shadow",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "colors": {
              "meta": {
                "types": {
                  "array": "Color"
                },
                "name": "colors",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "A series specific or series type specific color set to use instead of\nthe global [colors](#colors)."
              },
              "subtree": {}
            },
            "depth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "depth",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The thickness of a 3D pie. Requires `highcharts-3d.js`"
              },
              "subtree": {}
            },
            "endAngle": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "endAngle",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The end angle of the pie in degrees where 0 is top and 90 is right. Defaults\nto `startAngle` plus 360."
              },
              "subtree": {}
            },
            "innerSize": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "innerSize",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The size of the inner diameter for the pie. A size greater than 0 renders\na donut chart. Can be a percentage or pixel value. Percentages are relative\nto the pie size. Pixel values are given as integers.\n\nNote: in Highcharts < 4.1.2, the percentage was relative to the plot area,\n not the pie size."
              },
              "subtree": {}
            },
            "minSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "minSize",
                "excludes": {},
                "default": "80",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum size for a pie in response to auto margins. The pie will try\nto shrink to make room for data labels in side the plot area, but only\nto this size."
              },
              "subtree": {}
            },
            "startAngle": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "startAngle",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The start angle of the pie slices in degrees where 0 is top and 90 right."
              },
              "subtree": {}
            },
            "events": {
              "meta": {
                "types": {},
                "name": "events",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.series.events"
              },
              "subtree": {}
            },
            "point": {
              "meta": {
                "types": {},
                "name": "point",
                "excludes": {}
              },
              "subtree": {
                "events": {
                  "meta": {
                    "types": {},
                    "name": "events",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "extends": "plotOptions.series.point.events"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "plotband": {
          "meta": {
            "types": {},
            "name": "plotband",
            "excludes": {},
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {},
                "name": "lineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            }
          }
        },
        "scatter": {
          "meta": {
            "types": {},
            "name": "scatter",
            "excludes": {
              "connectEnds": 1,
              "connectNulls": 1,
              "linecap": 1,
              "pointPlacement": 1,
              "stacking": 1,
              "step": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.series"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The width of the line connecting the data points."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {},
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {},
                "default": "{}",
                "products": {
                  "highstock": 1
                },
                "description": "A configuration object for the tooltip rendering of each single series.\nProperties are inherited from <a class=\"internal\">#tooltip</a>. Overridable\nproperties are `headerFormat`, `pointFormat`, `yDecimals`, `xDateFormat`,\n`yPrefix` and `ySuffix`. Unlike other series, in a scatter plot the\nseries.name by default shows in the headerFormat and poin.x and point.\ny in the pointFormat."
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {},
                    "name": "headerFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Sticky tracking of mouse events. When true, the `mouseOut` event on a\nseries isn't triggered until the mouse moves over another series, or out\nof the plot area. When false, the `mouseOut` event on a series is triggered\nwhen the mouse leaves the area around the series' graph or markers. This\nalso implies the tooltip. When `stickyTracking` is false and `tooltip.\nshared` is false, the tooltip will be hidden when moving the mouse between\nseries."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "0",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1,
                          "highmaps": 1
                        },
                        "description": "The width of the line connecting the data points."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {}
            }
          }
        },
        "line": {
          "meta": {
            "types": {},
            "name": "line",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The base function which all other series types inherit from. The data in the series is stored\nin various arrays.\n\n- First, series.options.data contains all the original config options for\neach point whether added by options or methods like series.addPoint.\n- Next, series.data contains those values converted to points, but in case the series data length\nexceeds the cropThreshold, or if the data is grouped, series.data doesn't contain all the points. It\nonly contains the points that have been created on demand.\n- Then there's series.points that contains all currently visible point objects. In case of cropping,\nthe cropped-away points are not part of this array. The series.points array starts at series.cropStart\ncompared to series.data and series.options.data. If however the series data is grouped, these can't\nbe correlated one to one.\n- series.xData and series.processedXData contain clean x values, equivalent to series.data and series.points.\n- series.yData and series.processedYData contain clean y values, equivalent to series.data and series.points.",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {},
                "name": "lineWidth",
                "excludes": {},
                "default": 2
              },
              "subtree": {}
            },
            "allowPointSelect": {
              "meta": {
                "types": {},
                "name": "allowPointSelect",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "showCheckbox": {
              "meta": {
                "types": {},
                "name": "showCheckbox",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "animation": {
              "meta": {
                "types": {},
                "name": "animation",
                "excludes": {}
              },
              "subtree": {
                "duration": {
                  "meta": {
                    "types": {},
                    "name": "duration",
                    "excludes": {},
                    "default": 1000
                  },
                  "subtree": {}
                }
              }
            },
            "events": {
              "meta": {
                "types": {},
                "name": "events",
                "excludes": {}
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "lineWidth": {
                  "meta": {
                    "types": {},
                    "name": "lineWidth",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "lineColor": {
                  "meta": {
                    "types": {},
                    "name": "lineColor",
                    "excludes": {},
                    "default": "${palette.backgroundColor}"
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {},
                    "name": "radius",
                    "excludes": {},
                    "default": 4
                  },
                  "subtree": {}
                },
                "states": {
                  "meta": {
                    "types": {},
                    "name": "states",
                    "excludes": {}
                  },
                  "subtree": {
                    "hover": {
                      "meta": {
                        "types": {},
                        "name": "hover",
                        "excludes": {}
                      },
                      "subtree": {
                        "animation": {
                          "meta": {
                            "types": {},
                            "name": "animation",
                            "excludes": {}
                          },
                          "subtree": {
                            "duration": {
                              "meta": {
                                "types": {},
                                "name": "duration",
                                "excludes": {},
                                "default": 50
                              },
                              "subtree": {}
                            }
                          }
                        },
                        "enabled": {
                          "meta": {
                            "types": {},
                            "name": "enabled",
                            "excludes": {},
                            "default": true
                          },
                          "subtree": {}
                        },
                        "radiusPlus": {
                          "meta": {
                            "types": {},
                            "name": "radiusPlus",
                            "excludes": {},
                            "default": 2
                          },
                          "subtree": {}
                        },
                        "lineWidthPlus": {
                          "meta": {
                            "types": {},
                            "name": "lineWidthPlus",
                            "excludes": {},
                            "default": 1
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "select": {
                      "meta": {
                        "types": {},
                        "name": "select",
                        "excludes": {}
                      },
                      "subtree": {
                        "fillColor": {
                          "meta": {
                            "types": {},
                            "name": "fillColor",
                            "excludes": {},
                            "default": "${palette.neutralColor20}"
                          },
                          "subtree": {}
                        },
                        "lineColor": {
                          "meta": {
                            "types": {},
                            "name": "lineColor",
                            "excludes": {},
                            "default": "${palette.neutralColor100}"
                          },
                          "subtree": {}
                        },
                        "lineWidth": {
                          "meta": {
                            "types": {},
                            "name": "lineWidth",
                            "excludes": {},
                            "default": 2
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                }
              }
            },
            "point": {
              "meta": {
                "types": {},
                "name": "point",
                "excludes": {}
              },
              "subtree": {
                "events": {
                  "meta": {
                    "types": {},
                    "name": "events",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {},
                    "name": "align",
                    "excludes": {},
                    "default": "center"
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {},
                    "name": "style",
                    "excludes": {}
                  },
                  "subtree": {
                    "fontSize": {
                      "meta": {
                        "types": {},
                        "name": "fontSize",
                        "excludes": {},
                        "default": "11px"
                      },
                      "subtree": {}
                    },
                    "fontWeight": {
                      "meta": {
                        "types": {},
                        "name": "fontWeight",
                        "excludes": {},
                        "default": "bold"
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {},
                        "name": "color",
                        "excludes": {},
                        "default": "contrast"
                      },
                      "subtree": {}
                    },
                    "textOutline": {
                      "meta": {
                        "types": {},
                        "name": "textOutline",
                        "excludes": {},
                        "default": "1px contrast"
                      },
                      "subtree": {}
                    }
                  }
                },
                "verticalAlign": {
                  "meta": {
                    "types": {},
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "bottom"
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {},
                    "name": "x",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {},
                    "name": "y",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {},
                    "name": "padding",
                    "excludes": {},
                    "default": 5
                  },
                  "subtree": {}
                }
              }
            },
            "cropThreshold": {
              "meta": {
                "types": {},
                "name": "cropThreshold",
                "excludes": {},
                "default": 300
              },
              "subtree": {}
            },
            "pointRange": {
              "meta": {
                "types": {},
                "name": "pointRange",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "softThreshold": {
              "meta": {
                "types": {},
                "name": "softThreshold",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "animation": {
                      "meta": {
                        "types": {},
                        "name": "animation",
                        "excludes": {}
                      },
                      "subtree": {
                        "duration": {
                          "meta": {
                            "types": {},
                            "name": "duration",
                            "excludes": {},
                            "default": 50
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "lineWidthPlus": {
                      "meta": {
                        "types": {},
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": 1
                      },
                      "subtree": {}
                    },
                    "marker": {
                      "meta": {
                        "types": {},
                        "name": "marker",
                        "excludes": {}
                      },
                      "subtree": {}
                    },
                    "halo": {
                      "meta": {
                        "types": {},
                        "name": "halo",
                        "excludes": {}
                      },
                      "subtree": {
                        "size": {
                          "meta": {
                            "types": {},
                            "name": "size",
                            "excludes": {},
                            "default": 10
                          },
                          "subtree": {}
                        },
                        "opacity": {
                          "meta": {
                            "types": {},
                            "name": "opacity",
                            "excludes": {},
                            "default": 0.25
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                },
                "select": {
                  "meta": {
                    "types": {},
                    "name": "select",
                    "excludes": {}
                  },
                  "subtree": {
                    "marker": {
                      "meta": {
                        "types": {},
                        "name": "marker",
                        "excludes": {}
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "stickyTracking": {
              "meta": {
                "types": {},
                "name": "stickyTracking",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "turboThreshold": {
              "meta": {
                "types": {},
                "name": "turboThreshold",
                "excludes": {},
                "default": 1000
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "step",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to apply steps to the line. Possible values are `left`, `center`\nand `right`. Prior to 2.3.5, only `left` was supported.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "linecap": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "linecap",
                "excludes": {},
                "default": "round",
                "products": {
                  "highstock": 1
                },
                "description": "The SVG value used for the `stroke-linecap` and `stroke-linejoin` of a\nline graph. Round means that lines are rounded in the ends and bends.",
                "enumValues": [
                  "round",
                  "butt",
                  "square"
                ]
              },
              "subtree": {}
            }
          }
        },
        "arearange": {
          "meta": {
            "types": {},
            "name": "arearange",
            "excludes": {
              "connectEnds": 1,
              "marker": 1,
              "softThreshold": 1,
              "threshold": 1,
              "stacking": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The area range is a cartesian series type with higher and lower Y values\nalong an X axis. Requires `highcharts-more.js`.",
            "extends": "plotOptions.area"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Pixel width of the arearange graph line."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "trackByArea": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "trackByArea",
                "excludes": {},
                "default": true,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether the whole area or just the line should respond to mouseover tooltips\nand other mouse or touch events."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {
                  "x": 1,
                  "y": 1
                },
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Extended data labels for range series types. Range series data labels\nhave no `x` and `y` options. Instead, they have `xLow`, `xHigh`, `yLow`\nand `yHigh` options to allow the higher and lower data label sets individually.",
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {},
                    "name": "align",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {},
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "xLow": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "xLow",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "X offset of the lower data labels relative to the point value."
                  },
                  "subtree": {}
                },
                "xHigh": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "xHigh",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "X offset of the higher data labels relative to the point value."
                  },
                  "subtree": {}
                },
                "yLow": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "yLow",
                    "excludes": {},
                    "default": "16",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Y offset of the lower data labels relative to the point value."
                  },
                  "subtree": {}
                },
                "yHigh": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "yHigh",
                    "excludes": {},
                    "default": "-6",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Y offset of the higher data labels relative to the point value."
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {},
                        "name": "halo",
                        "excludes": {},
                        "default": false
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "shadow": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "shadow",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to apply a drop shadow to the graph line. Since 2.3 the shadow\ncan be an object configuration containing `color`, `offsetX`, `offsetY`,\n `opacity` and `width`."
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "step",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to apply steps to the line. Possible values are `left`, `center`\nand `right`. Prior to 2.3.5, only `left` was supported.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            }
          }
        },
        "boxPlot": {
          "meta": {
            "types": {},
            "name": "boxPlot",
            "excludes": {},
            "description": "The boxplot series type.",
            "extends": "{column}"
          },
          "subtree": {
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "whiskerLength": {
              "meta": {
                "types": {},
                "name": "whiskerLength",
                "excludes": {},
                "default": "50%"
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {},
                "name": "fillColor",
                "excludes": {},
                "default": "${palette.backgroundColor}"
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {},
                "name": "lineWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "medianWidth": {
              "meta": {
                "types": {},
                "name": "medianWidth",
                "excludes": {},
                "default": 2
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "brightness": {
                      "meta": {
                        "types": {},
                        "name": "brightness",
                        "excludes": {}
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "whiskerWidth": {
              "meta": {
                "types": {},
                "name": "whiskerWidth",
                "excludes": {},
                "default": 2
              },
              "subtree": {}
            }
          }
        },
        "bubble": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "bubble",
            "excludes": {
              "turboThreshold": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "A bubble series is a three dimensional series type where each point renders\nan X, Y and Z value. Each points is drawn as a bubble where the position\nalong the X and Y axes mark the X and Y values, and the size of the bubble\nrelates to the Z value.",
            "extends": "plotOptions.scatter"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {},
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {},
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle"
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {
                  "radius": 1
                },
                "products": {
                  "highcharts": 1
                },
                "description": "Options for the point markers of line-like series. Properties like `fillColor`,\n`lineColor` and `lineWidth` define the visual appearance of the markers.\nOther series types, like column series, don't have markers, but have\nvisual options on the series level instead.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the markers can be styled with the `.highcharts-point`, `.highcharts-\npoint-hover` and `.highcharts-point-select` class names.",
                "extends": "plotOptions.series.marker"
              },
              "subtree": {
                "lineColor": {
                  "meta": {
                    "types": {},
                    "name": "lineColor",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "lineWidth": {
                  "meta": {
                    "types": {},
                    "name": "lineWidth",
                    "excludes": {},
                    "default": 1
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {},
                    "name": "radius",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "states": {
                  "meta": {
                    "types": {},
                    "name": "states",
                    "excludes": {}
                  },
                  "subtree": {
                    "hover": {
                      "meta": {
                        "types": {},
                        "name": "hover",
                        "excludes": {}
                      },
                      "subtree": {
                        "radiusPlus": {
                          "meta": {
                            "types": {},
                            "name": "radiusPlus",
                            "excludes": {},
                            "default": 0
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                },
                "symbol": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "symbol",
                    "excludes": {},
                    "default": "circle",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "A predefined shape or symbol for the marker. Possible values are \"circle\",\n\"square\", \"diamond\", \"triangle\" and \"triangle-down\".\n\nAdditionally, the URL to a graphic can be given on the form `url(graphic.\npng)`. Note that for the image to be applied to exported charts, its\nURL needs to be accessible by the export server.\n\nCustom callbacks for symbol path generation can also be added to `Highcharts.\nSVGRenderer.prototype.symbols`. The callback is then used by its method\nname, as shown in the demo.",
                    "enumValues": [
                      "circle",
                      "square",
                      "diamond",
                      "triangle",
                      "triangle-down"
                    ]
                  },
                  "subtree": {}
                }
              }
            },
            "minSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "minSize",
                "excludes": {},
                "default": "8",
                "products": {
                  "highcharts": 1
                },
                "description": "Minimum bubble size. Bubbles will automatically size between the `minSize`\nand `maxSize` to reflect the `z` value of each bubble. Can be either\npixels (when no unit is given), or a percentage of the smallest one of\nthe plot width and height."
              },
              "subtree": {}
            },
            "maxSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "maxSize",
                "excludes": {},
                "default": "20%",
                "products": {
                  "highcharts": 1
                },
                "description": "Maximum bubble size. Bubbles will automatically size between the `minSize`\nand `maxSize` to reflect the `z` value of each bubble. Can be either\npixels (when no unit is given), or a percentage of the smallest one of\nthe plot width and height."
              },
              "subtree": {}
            },
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross the\nzero plane (or [threshold](#plotOptions.series.threshold) option) unless\nthe data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2, 3 will\nmake the Y axis show negative values according to the `minPadding` option.\n If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {},
                        "name": "halo",
                        "excludes": {}
                      },
                      "subtree": {
                        "size": {
                          "meta": {
                            "types": {},
                            "name": "size",
                            "excludes": {},
                            "default": 5
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "({point.x}, {point.y}), Size: {point.z}"
                  },
                  "subtree": {}
                }
              }
            },
            "turboThreshold": {
              "meta": {
                "types": {},
                "name": "turboThreshold",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "zThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zThreshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "When [displayNegative](#plotOptions.bubble.displayNegative) is `false`,\nbubbles with lower Z values are skipped. When `displayNegative` is `true`\nand a [negativeColor](#plotOptions.bubble.negativeColor) is given, points\nwith lower Z is colored."
              },
              "subtree": {}
            },
            "zoneAxis": {
              "meta": {
                "types": {},
                "name": "zoneAxis",
                "excludes": {},
                "default": "z"
              },
              "subtree": {}
            },
            "displayNegative": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "displayNegative",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display negative sized bubbles. The threshold is given by the\n[zThreshold](#plotOptions.bubble.zThreshold) option, and negative bubbles\ncan be visualized by setting [negativeColor](#plotOptions.bubble.negativeColor)."
              },
              "subtree": {}
            },
            "negativeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "When a point's Z value is below the [zThreshold](#plotOptions.bubble.zThreshold)\nsetting, this color is used."
              },
              "subtree": {}
            },
            "sizeBy": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "sizeBy",
                "excludes": {},
                "default": "area",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether the bubble's value should be represented by the area or the width\nof the bubble. The default, `area`, corresponds best to the human perception\nof the size of each bubble.",
                "enumValues": [
                  "area",
                  "width"
                ]
              },
              "subtree": {}
            },
            "sizeByAbsoluteValue": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "sizeByAbsoluteValue",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "When this is true, the absolute value of z determines the size of the\nbubble. This means that with the default `zThreshold` of 0, a bubble of\nvalue -1 will have the same size as a bubble of value 1, while a bubble\nof value 0 will have a smaller size according to `minSize`."
              },
              "subtree": {}
            },
            "zMax": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMax",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum for the Z value range. Defaults to the highest Z value in\nthe data."
              },
              "subtree": {}
            },
            "zMin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMin",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum for the Z value range. Defaults to the lowest Z value in the\ndata."
              },
              "subtree": {}
            }
          }
        },
        "errorbar": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "errorbar",
            "excludes": {
              "fillColor": 1,
              "groupPadding": 1,
              "grouping": 1,
              "medianColor": 1,
              "medianWidth": 1,
              "showInLegend": 1,
              "showCheckbox": 1,
              "zIndex": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "Error bars are a graphical representation of the variability of data and\nare used on graphs to indicate the error, or uncertainty in a reported\nmeasurement.",
            "extends": "plotOptions.boxplot"
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#000000",
                "products": {
                  "highcharts": 1
                },
                "description": "The main color of the bars. This can be overridden by [stemColor](#plotOptions.\nerrorbar.stemColor) and [whiskerColor](#plotOptions.errorbar.whiskerColor)\nindividually."
              },
              "subtree": {}
            },
            "grouping": {
              "meta": {
                "types": {},
                "name": "grouping",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "linkedTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linkedTo",
                "excludes": {},
                "default": ":previous",
                "products": {
                  "highcharts": 1
                },
                "description": "The parent series of the error bar. The default value links it to the\nprevious series. Otherwise, use the id of the parent series."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "whiskerWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "whiskerWidth",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The line width of the whiskers, the horizontal lines marking low and\nhigh values. When `null`, the general [lineWidth](#plotOptions.errorbar.\nlineWidth) applies."
              },
              "subtree": {}
            }
          }
        },
        "gauge": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "gauge",
            "excludes": {
              "allowPointSelect": 1,
              "connectEnds": 1,
              "connectNulls": 1,
              "cropThreshold": 1,
              "dashStyle": 1,
              "linecap": 1,
              "lineWidth": 1,
              "marker": 1,
              "pointInterval": 1,
              "pointPlacement": 1,
              "pointStart": 1,
              "softThreshold": 1,
              "shadow": 1,
              "stacking": 1,
              "turboThreshold": 1,
              "pointIntervalUnit": 1,
              "states": 1,
              "step": 1,
              "zones": 1,
              "zoneAxis": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "General plotting options for the gauge series type. Requires `highcharts-\nmore.js`",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Data labels for the gauge. For gauges, the data labels are enabled by\ndefault and shown in a bordered box below the point.",
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true,
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {},
                    "name": "defer",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "15",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The y position offset of the label relative to the center of the gauge."
                  },
                  "subtree": {}
                },
                "borderRadius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderRadius",
                    "excludes": {},
                    "default": "3",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The border radius in pixels for the gauge's data label."
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {},
                    "name": "crop",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The vertical alignment of the data label."
                  },
                  "subtree": {}
                },
                "zIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "zIndex",
                    "excludes": {},
                    "default": "2",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The Z index of the data labels. A value of 2 display them behind the\ndial."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "1",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The border width in pixels for the gauge data label."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "#cccccc",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The border color for the data label."
                  },
                  "subtree": {}
                }
              }
            },
            "dial": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dial",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Options for the dial or arrow pointer of the gauge.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the dial is styled with the `.highcharts-gauge-series .highcharts-\ndial` rule."
              },
              "subtree": {
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "default": "#000000",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The background or fill color of the gauge's dial."
                  },
                  "subtree": {}
                },
                "baseLength": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "baseLength",
                    "excludes": {},
                    "default": "70%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The length of the dial's base part, relative to the total radius or length\nof the dial."
                  },
                  "subtree": {}
                },
                "baseWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "baseWidth",
                    "excludes": {},
                    "default": "3",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The pixel width of the base of the gauge dial. The base is the part closest\nto the pivot, defined by baseLength."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "#cccccc",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border color or stroke of the gauge's dial. By default, the borderWidth\nis 0, so this must be set in addition to a custom border color."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the gauge dial border in pixels."
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": "80%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The radius or length of the dial, in percentages relative to the radius\nof the gauge itself."
                  },
                  "subtree": {}
                },
                "rearLength": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "rearLength",
                    "excludes": {},
                    "default": "10%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The length of the dial's rear end, the part that extends out on the other\nside of the pivot. Relative to the dial's length."
                  },
                  "subtree": {}
                },
                "topWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "topWidth",
                    "excludes": {},
                    "default": "1",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the top of the dial, closest to the perimeter. The pivot\nnarrows in from the base to the top."
                  },
                  "subtree": {}
                }
              }
            },
            "pivot": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "pivot",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Options for the pivot or the center point of the gauge.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the pivot is styled with the `.highcharts-gauge-series .highcharts-\npivot` rule."
              },
              "subtree": {
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "default": "#000000",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The background color or fill of the pivot."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "#cccccc",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border or stroke color of the pivot. In able to change this, the borderWidth\nmust also be set to something other than the default 0."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border or stroke width of the pivot."
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The pixel radius of the pivot."
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {},
                    "name": "headerFormat",
                    "excludes": {},
                    "default": ""
                  },
                  "subtree": {}
                }
              }
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display this particular series or series type in the legend.\n Defaults to false for gauge series."
              },
              "subtree": {}
            },
            "overshoot": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "overshoot",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "Allow the dial to overshoot the end of the perimeter axis by this many\ndegrees. Say if the gauge axis goes from 0 to 60, a value of 100, or 1000,\n will show 5 degrees beyond the end of the axis."
              },
              "subtree": {}
            },
            "wrap": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "wrap",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "When this option is `true`, the dial will wrap around the axes. For instance,\nin a full-range gauge going from 0 to 360, a value of 400 will point\nto 40\\. When `wrap` is `false`, the dial stops at 360."
              },
              "subtree": {}
            }
          }
        },
        "waterfall": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "waterfall",
            "excludes": {
              "cropThreshold": 1,
              "negativeColor": 1,
              "stacking": 1,
              "turboThreshold": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "Options for the waterfall series type.",
            "extends": "plotOptions.column"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "inside": {
                  "meta": {
                    "types": {},
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the line connecting waterfall columns."
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#333333",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the line that connects columns in a waterfall series.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke can be set with the `.highcharts-graph` class."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Dot",
                "products": {
                  "highcharts": 1
                },
                "description": "A name for the dash style to use for the line connecting the columns\nof the waterfall series. Possible values:\n\n*   Solid\n*   ShortDash\n*   ShortDot\n*   ShortDashDot\n*   ShortDashDotDot\n*   Dot\n*   Dash\n*   LongDash\n*   DashDot\n*   LongDashDot\n*   LongDashDotDot\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke dash-array can be set with the `.highcharts-graph`\nclass."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#333333",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the border of each waterfall column.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the border stroke can be set with the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {},
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidthPlus": {
                      "meta": {
                        "types": {},
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "upColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The color used specifically for positive point columns. When not specified,\nthe general series color is used.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the waterfall colors can be set with the `.highcharts-point-negative`,\n `.highcharts-sum` and `.highcharts-intermediate-sum` classes."
              },
              "subtree": {}
            }
          }
        },
        "heatmap": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "heatmap",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The heatmap series type. This series type is available both in Highcharts\nand Highmaps.",
            "extends": "plotOptions.column"
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The main color of the series. In heat maps this color is rarely used,\nas we mostly use the color to denote the value of each point. Unless options\nare set in the [colorAxis](#colorAxis), the default value is pulled from\nthe [options.colors](#colors) array."
              },
              "subtree": {}
            },
            "colsize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "colsize",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The column size - how many X axis units each column in the heatmap should\nspan."
              },
              "subtree": {}
            },
            "rowsize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rowsize",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The row size - how many Y axis units each heatmap row should span."
              },
              "subtree": {}
            }
          }
        },
        "areaspline": {
          "meta": {
            "types": {},
            "name": "areaspline",
            "excludes": {
              "step": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.area"
          },
          "subtree": {}
        },
        "areasplinerange": {
          "meta": {
            "types": {},
            "name": "areasplinerange",
            "excludes": {
              "step": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The area spline range is a cartesian series type with higher and lower\nY values along an X axis. Requires `highcharts-more.js`.",
            "extends": "plotOptions.arearange"
          },
          "subtree": {}
        },
        "boxplot": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "boxplot",
            "excludes": {
              "animation": 1,
              "borderColor": 1,
              "borderRadius": 1,
              "borderWidth": 1,
              "cropThreshold": 1,
              "dataLabels": 1,
              "minPointLength": 1,
              "shadow": 1,
              "stacking": 1,
              "softThreshold": 1,
              "threshold": 1
            },
            "products": {
              "highcharts": 1
            },
            "description": "A box plot is a convenient way of depicting groups of data through their\nfive-number summaries: the smallest observation (sample minimum), lower\nquartile (Q1), median (Q2), upper quartile (Q3), and largest observation\n(sample maximum).",
            "extends": "plotOptions.column"
          },
          "subtree": {
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highcharts": 1
                },
                "description": "The fill color of the box."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the line surrounding the box. If any of [stemWidth](#plotOptions.\nboxplot.stemWidth), [medianWidth](#plotOptions.boxplot.medianWidth) or\n[whiskerWidth](#plotOptions.boxplot.whiskerWidth) are `null`, the lineWidth\nalso applies to these lines."
              },
              "subtree": {}
            },
            "medianColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "medianColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the median line. If `null`, the general series color applies."
              },
              "subtree": {}
            },
            "medianWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "medianWidth",
                "excludes": {},
                "default": "2",
                "products": {
                  "highcharts": 1
                },
                "description": "The pixel width of the median line. If `null`, the [lineWidth](#plotOptions.\nboxplot.lineWidth) is used."
              },
              "subtree": {}
            },
            "stemColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "stemColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the stem, the vertical line extending from the box to the\nwhiskers. If `null`, the series color is used."
              },
              "subtree": {}
            },
            "stemDashStyle": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "stemDashStyle",
                "excludes": {},
                "default": "Solid",
                "products": {
                  "highcharts": 1
                },
                "description": "The dash style of the stem, the vertical line extending from the box to\nthe whiskers.",
                "enumValues": [
                  "Solid",
                  "ShortDash",
                  "ShortDot",
                  "ShortDashDot",
                  "ShortDashDotDot",
                  "Dot",
                  "Dash",
                  "LongDash",
                  "DashDot",
                  "LongDashDot",
                  "LongDashDotDot"
                ]
              },
              "subtree": {}
            },
            "stemWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "stemWidth",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the stem, the vertical line extending from the box to the\nwhiskers. If `null`, the width is inherited from the [lineWidth](#plotOptions.\nboxplot.lineWidth) option."
              },
              "subtree": {}
            },
            "whiskerColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "whiskerColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the whiskers, the horizontal lines marking low and high values.\n When `null`, the general series color is used."
              },
              "subtree": {}
            },
            "whiskerLength": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "whiskerLength",
                "excludes": {},
                "default": "50%",
                "products": {
                  "highcharts": 1
                },
                "description": "The length of the whiskers, the horizontal lines marking low and high\nvalues. It can be a numerical pixel value, or a percentage value of the\nbox width. Set `0` to disable whiskers."
              },
              "subtree": {}
            },
            "whiskerWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "whiskerWidth",
                "excludes": {},
                "default": "2",
                "products": {
                  "highcharts": 1
                },
                "description": "The line width of the whiskers, the horizontal lines marking low and high\nvalues. When `null`, the general [lineWidth](#plotOptions.boxplot.lineWidth)\napplies."
              },
              "subtree": {}
            }
          }
        },
        "columnrange": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "columnrange",
            "excludes": {
              "negativeColor": 1,
              "stacking": 1,
              "softThreshold": 1,
              "threshold": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The column range is a cartesian series type with higher and lower Y values\nalong an X axis. Requires `highcharts-more.js`. To display horizontal\nbars, set [chart.inverted](#chart.inverted) to `true`.",
            "extends": "plotOptions.column"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Extended data labels for range series types. Range series data labels\nhave no `x` and `y` options. Instead, they have `xLow`, `xHigh`, `yLow`\nand `yHigh` options to allow the higher and lower data label sets individually.",
                "extends": "plotOptions.arearange.dataLabels"
              },
              "subtree": {}
            }
          }
        },
        "polygon": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "polygon",
            "excludes": {
              "softThreshold": 1,
              "threshold": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A polygon series can be used to draw any freeform shape in the cartesian\ncoordinate system. A fill is applied with the `color` option, and stroke\nis applied through `lineWidth` and `lineColor` options. Requires the `highcharts-\nmore.js` file.",
            "extends": "plotOptions.scatter"
          },
          "subtree": {}
        },
        "spline": {
          "meta": {
            "types": {},
            "name": "spline",
            "excludes": {
              "step": 1
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.series"
          },
          "subtree": {}
        },
        "map": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "map",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The map series type is the default series type of a Highcharts map, where\neach point is represented by an area given by its `path` option of the\npath option of its corresponding `mapData` point.",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "nullColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "nullColor",
                "excludes": {},
                "default": "#f7f7f7",
                "products": {
                  "highmaps": 1
                },
                "description": "The color to apply to null points.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the null point fill is set in the `.highcharts-null-point` class."
              },
              "subtree": {}
            },
            "nullInteraction": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "nullInteraction",
                "excludes": {},
                "default": "false",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether to allow pointer interaction like tooltips and mouse events on\nnull points."
              },
              "subtree": {}
            }
          }
        },
        "mapbubble": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mapbubble",
            "excludes": {
              "dashStyle": 1
            },
            "products": {
              "highmaps": 1
            },
            "description": "A bubble series is a three dimensional series type where each point renders\nan X, Y and Z value. Each points is drawn as a bubble where the position\nalong the X and Y axes mark the X and Y values, and the size of the bubble\nrelates to the Z value.",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The main color of the series. This color affects both the fill and the\nstroke of the bubble. For enhanced control, use `marker` options."
              },
              "subtree": {}
            },
            "displayNegative": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "displayNegative",
                "excludes": {},
                "default": "true",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether to display negative sized bubbles. The threshold is given by the\n[zThreshold](#plotOptions.bubble.zThreshold) option, and negative bubbles\ncan be visualized by setting [negativeColor](#plotOptions.bubble.negativeColor)."
              },
              "subtree": {}
            },
            "maxSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "maxSize",
                "excludes": {},
                "default": "20%",
                "products": {
                  "highmaps": 1
                },
                "description": "Maximum bubble size. Bubbles will automatically size between the `minSize`\nand `maxSize` to reflect the `z` value of each bubble. Can be either pixels\n(when no unit is given), or a percentage of the smallest one of the plot\nwidth and height."
              },
              "subtree": {}
            },
            "minSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "minSize",
                "excludes": {},
                "default": "8",
                "products": {
                  "highmaps": 1
                },
                "description": "Minimum bubble size. Bubbles will automatically size between the `minSize`\nand `maxSize` to reflect the `z` value of each bubble. Can be either pixels\n(when no unit is given), or a percentage of the smallest one of the plot\nwidth and height."
              },
              "subtree": {}
            },
            "negativeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highmaps": 1
                },
                "description": "When a point's Z value is below the [zThreshold](#plotOptions.bubble.zThreshold)\nsetting, this color is used."
              },
              "subtree": {}
            },
            "sizeBy": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "sizeBy",
                "excludes": {},
                "default": "area",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether the bubble's value should be represented by the area or the width\nof the bubble. The default, `area`, corresponds best to the human perception\nof the size of each bubble.",
                "enumValues": [
                  "area",
                  "width"
                ]
              },
              "subtree": {}
            },
            "sizeByAbsoluteValue": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "sizeByAbsoluteValue",
                "excludes": {},
                "default": "false",
                "products": {
                  "highmaps": 1
                },
                "description": "When this is true, the absolute value of z determines the size of the\nbubble. This means that with the default `zThreshold` of 0, a bubble of\nvalue -1 will have the same size as a bubble of value 1, while a bubble\nof value 0 will have a smaller size according to `minSize`."
              },
              "subtree": {}
            },
            "zMax": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMax",
                "excludes": {},
                "default": "null",
                "products": {
                  "highmaps": 1
                },
                "description": "The minimum for the Z value range. Defaults to the highest Z value in\nthe data."
              },
              "subtree": {}
            },
            "zMin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMin",
                "excludes": {},
                "default": "null",
                "products": {
                  "highmaps": 1
                },
                "description": "The minimum for the Z value range. Defaults to the lowest Z value in the\ndata."
              },
              "subtree": {}
            },
            "zThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zThreshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highmaps": 1
                },
                "description": "When [displayNegative](#plotOptions.bubble.displayNegative) is `false`,\nbubbles with lower Z values are skipped. When `displayNegative` is `true`\nand a [negativeColor](#plotOptions.bubble.negativeColor) is given, points\nwith lower Z is colored."
              },
              "subtree": {}
            }
          }
        },
        "mapline": {
          "meta": {
            "types": {},
            "name": "mapline",
            "excludes": {
              "borderColor": 1,
              "borderWidth": 1
            },
            "products": {
              "highmaps": 1
            },
            "description": "Mapline series represent paths or lines in a map, all features that don't\nhave an area. It can typically be used for rivers or roads, or for separator\nlines to distinguish overseas territories. For separator lines, set `enableMouseTracking`\nto false to turn off interactivity.",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "default": "none",
                "products": {
                  "highmaps": 1
                },
                "description": "Fill color for the map line shapes"
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highmaps": 1
                },
                "description": "The width of the map line."
              },
              "subtree": {}
            }
          }
        },
        "mappoint": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mappoint",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "A `mappoint` series is a scatter series laid on top of a map, where X\nand Y values relate to the coordinate system established by the paths\nused for the main map series. In Highmaps it is typically used to mark\ncities. The only difference from a Highcharts scatter series is that the\ndata labels are by default enabled and formatted to display the name of\nthe point.\n\nFor documentation on how to use the mappoint series, see [scatter series](http://api.\nhighcharts.com/highcharts#plotOptions.scatter) in the basic Highcharts\nAPI."
          },
          "subtree": {}
        }
      }
    },
    "noData": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "noData",
        "excludes": {},
        "description": "Options for displaying a message like \"No data to display\". \nThis feature requires the file no-data-to-display.js to be loaded in the page. \nThe actual text to display is set in the lang.noData option."
      },
      "subtree": {
        "position": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "position",
            "excludes": {},
            "default": "{ \"x\": 0, \"y\": 0, \"align\": \"center\", \"verticalAlign\": \"middle\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The position of the no-data label, relative to the plot area."
          },
          "subtree": {
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Horizontal offset of the label, in pixels."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Vertical offset of the label, in pixels."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "default": "center",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Horizontal alignment of the label.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "middle",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Vertical alignment of the label.",
                "enumValues": [
                  "top",
                  "middle",
                  "bottom"
                ]
              },
              "subtree": {}
            }
          }
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"fontSize\": \"12px\", \"fontWeight\": \"bold\", \"color\": \"#666666\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "CSS styles for the no-data label."
          },
          "subtree": {
            "fontWeight": {
              "meta": {
                "types": {},
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {},
                "name": "fontSize",
                "excludes": {},
                "default": "12px"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor60}"
              },
              "subtree": {}
            }
          }
        },
        "attr": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "attr",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An object of additional SVG attributes for the no-data label."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to insert the label as HTML, or as pseudo-HTML rendered with SVG."
          },
          "subtree": {}
        }
      }
    },
    "xAxis": {
      "meta": {
        "types": {
          "array": "xAxis"
        },
        "name": "xAxis",
        "excludes": {},
        "description": "Default options for the X axis - the Y axis has extended defaults"
      },
      "subtree": {
        "dateTimeLabelFormats": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "dateTimeLabelFormats",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "For a datetime axis, the scale will automatically adjust to the appropriate\nunit. This member gives the default string representations used for\neach unit. For intermediate values, different units may be used, for\nexample the `day` unit can be used on midnight and `hour` unit be used\nfor intermediate values on the same axis. For an overview of the replacement\ncodes, see [dateFormat](#Highcharts.dateFormat). Defaults to:\n\n<pre>{ \tmillisecond: '%H:%M:%S.%L', \tsecond: '%H:%M:%S', \tminute: '%H:%M',\nhour: '%H:%M', \tday: '%e. %b', \tweek: '%e. %b', \tmonth: '%b \\'%y',\n \tyear: '%Y' }</pre>"
          },
          "subtree": {
            "millisecond": {
              "meta": {
                "types": {},
                "name": "millisecond",
                "excludes": {},
                "default": "%H:%M:%S.%L"
              },
              "subtree": {}
            },
            "second": {
              "meta": {
                "types": {},
                "name": "second",
                "excludes": {},
                "default": "%H:%M:%S"
              },
              "subtree": {}
            },
            "minute": {
              "meta": {
                "types": {},
                "name": "minute",
                "excludes": {},
                "default": "%H:%M"
              },
              "subtree": {}
            },
            "hour": {
              "meta": {
                "types": {},
                "name": "hour",
                "excludes": {},
                "default": "%H:%M"
              },
              "subtree": {}
            },
            "day": {
              "meta": {
                "types": {},
                "name": "day",
                "excludes": {},
                "default": "%e. %b"
              },
              "subtree": {}
            },
            "week": {
              "meta": {
                "types": {},
                "name": "week",
                "excludes": {},
                "default": "%e. %b"
              },
              "subtree": {}
            },
            "month": {
              "meta": {
                "types": {},
                "name": "month",
                "excludes": {},
                "default": "%b '%y"
              },
              "subtree": {}
            },
            "year": {
              "meta": {
                "types": {},
                "name": "year",
                "excludes": {},
                "default": "%Y"
              },
              "subtree": {}
            }
          }
        },
        "endOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "endOnTick",
            "excludes": {},
            "default": false,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to force the axis to end on a tick. Use this option with the\n`maxPadding` option to control the axis end."
          },
          "subtree": {}
        },
        "labels": {
          "meta": {
            "types": {},
            "name": "labels",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The axis labels show the number or category for each tick."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": true,
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Enable or disable the axis labels."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{ \"color\": \"#666666\", \"cursor\": \"default\", \"fontSize\": \"11px\" }",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "CSS styles for the label. Use `whiteSpace: 'nowrap'` to prevent wrapping\nof category labels. Use `textOverflow: 'none'` to prevent ellipsis\n(dots).\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the labels are styled with the `.highcharts-axis-labels` class."
              },
              "subtree": {
                "color": {
                  "meta": {
                    "types": {},
                    "name": "color",
                    "excludes": {},
                    "default": "${palette.neutralColor60}"
                  },
                  "subtree": {}
                },
                "cursor": {
                  "meta": {
                    "types": {},
                    "name": "cursor",
                    "excludes": {},
                    "default": "default"
                  },
                  "subtree": {}
                },
                "fontSize": {
                  "meta": {
                    "types": {},
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                }
              }
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The x position offset of the label relative to the tick position on\nthe axis."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "What part of the string the given position is anchored to. If `left`,\nthe left side of the string is at the axis position. Can be one of `\"left\"`,\n`\"center\"` or `\"right\"`. Defaults to an intelligent guess based on which\nside of the chart the axis is on and the rotation of the label.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "autoRotation": {
              "meta": {
                "types": {
                  "array": "Number"
                },
                "name": "autoRotation",
                "excludes": {},
                "default": "[-45]",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "For horizontal axes, the allowed degrees of label rotation to prevent\noverlapping labels. If there is enough space, labels are not rotated.\nAs the chart gets narrower, it will start rotating the labels -45 degrees,\nthen remove every second label and try again with rotations 0 and -45\netc. Set it to `false` to disable rotation, which will cause the labels\nto word-wrap if possible."
              },
              "subtree": {}
            },
            "autoRotationLimit": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "autoRotationLimit",
                "excludes": {},
                "default": "80",
                "products": {
                  "highcharts": 1
                },
                "description": "When each category width is more than this many pixels, we don't apply\nauto rotation. Instead, we lay out the axis label with word wrap. A lower\nlimit makes sense when the label contains multiple short words that don't\nextend the available horizontal space for each label."
              },
              "subtree": {}
            },
            "distance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "distance",
                "excludes": {},
                "default": "15",
                "products": {
                  "highcharts": 1
                },
                "description": "Polar charts only. The label's pixel distance from the perimeter of the\nplot area."
              },
              "subtree": {}
            },
            "format": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "format",
                "excludes": {},
                "default": "{value}",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) for the axis label."
              },
              "subtree": {}
            },
            "maxStaggerLines": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "maxStaggerLines",
                "excludes": {},
                "default": "5",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Horizontal axis only. When `staggerLines` is not set, `maxStaggerLines`\ndefines how many lines the axis is allowed to add to automatically avoid\noverlapping X labels. Set to `1` to disable overlap detection."
              },
              "subtree": {}
            },
            "overflow": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "overflow",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "How to handle overflowing labels on horizontal axis. Can be undefined,\n`false` or `\"justify\"`. By default it aligns inside the chart area. If\n\"justify\", labels will not render outside the plot area. If `false`, it\nwill not be aligned at all. If there is room to move it, it will be aligned\nto the edge, else it will be removed.",
                "enumValues": [
                  null,
                  "justify"
                ]
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "padding",
                "excludes": {},
                "default": "5",
                "products": {
                  "highcharts": 1
                },
                "description": "The pixel padding for axis labels, to ensure white space between them."
              },
              "subtree": {}
            },
            "reserveSpace": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reserveSpace",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to reserve space for the labels. This can be turned off when for\nexample the labels are rendered inside the plot area instead of outside."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Rotation of the labels in degrees."
              },
              "subtree": {}
            },
            "staggerLines": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "staggerLines",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Horizontal axes only. The number of lines to spread the labels over to\nmake room or tighter labels. ."
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "step",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "To show only every _n_'th label on the axis, set the step to _n_. Setting\nthe step to 2 shows every other label.\n\nBy default, the step is calculated automatically to avoid overlap. To\nprevent this, set it to 1\\. This usually only happens on a category axis,\nand is often a sign that you have chosen the wrong axis type. Read more\nat [Axis docs](http://www.highcharts.com/docs/chart-concepts/axes) =>\nWhat axis should I use?"
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the labels."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The y position offset of the label relative to the tick position on the\naxis. The default makes it adapt to the font size on bottom axis."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "7",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The Z index for the axis labels."
              },
              "subtree": {}
            }
          }
        },
        "minPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minPadding",
            "excludes": {},
            "default": "0.01",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Padding of the min value relative to the length of the axis. A padding\nof 0.05 will make a 100px axis 5px longer. This is useful when you don't\nwant the lowest data value to appear on the edge of the plot area. When\nthe axis' `min` option is set or a min extreme is set using `axis.setExtremes()`,\n the minPadding will be ignored."
          },
          "subtree": {}
        },
        "maxPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxPadding",
            "excludes": {},
            "default": "0.01",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Padding of the max value relative to the length of the axis. A padding\nof 0.05 will make a 100px axis 5px longer. This is useful when you don't\nwant the highest data value to appear on the edge of the plot area.\nWhen the axis' `max` option is set or a max extreme is set using `axis.\nsetExtremes()`, the maxPadding will be ignored."
          },
          "subtree": {}
        },
        "minorTickLength": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minorTickLength",
            "excludes": {},
            "default": "2",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel length of the minor tick marks."
          },
          "subtree": {}
        },
        "minorTickPosition": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "minorTickPosition",
            "excludes": {},
            "default": "outside",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The position of the minor tick marks relative to the axis line. Can\nbe one of `inside` and `outside`.",
            "enumValues": [
              "inside",
              "outside"
            ]
          },
          "subtree": {}
        },
        "startOfWeek": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "startOfWeek",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "For datetime axes, this decides where to put the tick between weeks.\n 0 = Sunday, 1 = Monday."
          },
          "subtree": {}
        },
        "startOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "startOnTick",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to force the axis to start on a tick. Use this option with the\n`minPadding` option to control the axis start."
          },
          "subtree": {}
        },
        "tickLength": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickLength",
            "excludes": {},
            "default": "10",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel length of the main tick marks."
          },
          "subtree": {}
        },
        "tickmarkPlacement": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "tickmarkPlacement",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1
            },
            "description": "For categorized axes only. If `on` the tick mark is placed in the center\nof the category, if `between` the tick mark is placed between categories.\n The default is `between` if the `tickInterval` is 1, else `on`.",
            "enumValues": [
              null,
              "on",
              "between"
            ]
          },
          "subtree": {}
        },
        "tickPixelInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickPixelInterval",
            "excludes": {},
            "default": 100,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "If tickInterval is `null` this option sets the approximate pixel interval\nof the tick marks. Not applicable to categorized axis.\n\nThe tick interval is also influenced by the [minTickInterval](#xAxis.\nminTickInterval) option, that, by default prevents ticks from being\ndenser than the data points.\n\nDefaults to `72` for the Y axis and `100` for the X axis."
          },
          "subtree": {}
        },
        "tickPosition": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "tickPosition",
            "excludes": {},
            "default": "outside",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The position of the major tick marks relative to the axis line. Can\nbe one of `inside` and `outside`.",
            "enumValues": [
              "inside",
              "outside"
            ]
          },
          "subtree": {}
        },
        "title": {
          "meta": {
            "types": {},
            "name": "title",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The axis title, showing next to the axis line."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "default": "middle",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Alignment of the title relative to the axis values. Possible values\nare \"low\", \"middle\" or \"high\".",
                "enumValues": [
                  "low",
                  "middle",
                  "high"
                ]
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{ \"color\": \"#666666\" }",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "CSS styles for the title. When titles are rotated they are rendered\nusing vector graphic techniques and not all styles are applicable.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is given in the `.highcharts-axis-title`\nclass."
              },
              "subtree": {
                "color": {
                  "meta": {
                    "types": {},
                    "name": "color",
                    "excludes": {},
                    "default": "${palette.neutralColor60}"
                  },
                  "subtree": {}
                }
              }
            },
            "enabled": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "middle",
                "products": {
                  "highcharts": 1
                },
                "description": "Deprecated. Set the `text` to `null` to disable the title."
              },
              "subtree": {}
            },
            "margin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "margin",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel distance between the axis labels or line and the title. Defaults\nto 0 for horizontal axes, 10 for vertical"
              },
              "subtree": {}
            },
            "offset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "offset",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The distance of the axis title from the axis line. By default, this distance\nis computed from the offset width of the labels, the labels' distance\nfrom the axis and the title's margin. However when the offset option is\nset, it overrides all this."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The rotation of the text in degrees. 0 is horizontal, 270 is vertical\nreading from bottom to top."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The actual text of the axis title. It can contain basic HTML text markup\nlike <b>, <i> and spans with style."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Horizontal pixel offset of the title position."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Vertical pixel offset of the title position."
              },
              "subtree": {}
            }
          }
        },
        "type": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "type",
            "excludes": {},
            "default": "linear",
            "products": {
              "highcharts": 1
            },
            "description": "The type of axis. Can be one of `linear`, `logarithmic`, `datetime`\nor `category`. In a datetime axis, the numbers are given in milliseconds,\nand tick marks are placed on appropriate values like full hours or\ndays. In a category axis, the [point names](#series<line>.data.name)\nof the chart's series are used for categories, if not a [categories](#xAxis.\ncategories) array is defined.",
            "enumValues": [
              "linear",
              "logarithmic",
              "datetime",
              "category"
            ]
          },
          "subtree": {}
        },
        "minorGridLineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minorGridLineColor",
            "excludes": {},
            "default": "#f2f2f2",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Color of the minor, secondary grid lines.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is given in the `.highcharts-minor-grid-line`\nclass."
          },
          "subtree": {}
        },
        "minorGridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minorGridLineWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Width of the minor, secondary grid lines.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is given in the `.highcharts-grid-line` class."
          },
          "subtree": {}
        },
        "minorTickColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minorTickColor",
            "excludes": {},
            "default": "#999999",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Color for the minor tick marks."
          },
          "subtree": {}
        },
        "lineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "lineColor",
            "excludes": {},
            "default": "#ccd6eb",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The color of the line marking the axis itself.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the line stroke is given in the `.highcharts-axis-line` or\n`.highcharts-xaxis-line` class."
          },
          "subtree": {}
        },
        "lineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The width of the line marking the axis itself.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is given in the `.highcharts-axis-line` or\n`.highcharts-xaxis-line` class."
          },
          "subtree": {}
        },
        "gridLineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "gridLineColor",
            "excludes": {},
            "default": "#e6e6e6",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Color of the grid lines extending the ticks across the plot area.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke is given in the `.highcharts-grid-line` class."
          },
          "subtree": {}
        },
        "tickColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "tickColor",
            "excludes": {},
            "default": "#ccd6eb",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Color for the main tick marks.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke is given in the `.highcharts-tick` class."
          },
          "subtree": {}
        },
        "allowDecimals": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowDecimals",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to allow decimals in this axis' ticks. When counting integers,\nlike persons or hits on a web page, decimals should be avoided in the\nlabels."
          },
          "subtree": {}
        },
        "alternateGridColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "alternateGridColor",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When using an alternate grid color, a band is painted across the plot\narea between every other grid line."
          },
          "subtree": {}
        },
        "categories": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "categories",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "If categories are present for the xAxis, names are used instead of numbers\nfor that axis. Since Highcharts 3.0, categories can also be extracted\nby giving each point a [name](#series.data) and setting axis [type](#xAxis.\ntype) to `category`. However, if you have multiple series, best practice\nremains defining the `categories` array.\n\nExample:\n\n<pre>categories: ['Apples', 'Bananas', 'Oranges']</pre>\n\nDefaults to `null`"
          },
          "subtree": {}
        },
        "ceiling": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "ceiling",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The highest allowed value for automatically computed axis extremes."
          },
          "subtree": {}
        },
        "className": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "className",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A class name that opens for styling the axis by CSS, especially in Highcharts\n[styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css). The class name is applied to group elements for the grid, axis\nelements and labels."
          },
          "subtree": {}
        },
        "description": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "description",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "_Requires Accessibility module_\n\nDescription of the axis to screen reader users."
          },
          "subtree": {}
        },
        "floor": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "floor",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The lowest allowed value for automatically computed axis extremes."
          },
          "subtree": {}
        },
        "gridLineDashStyle": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "gridLineDashStyle",
            "excludes": {},
            "default": "Solid",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The dash or dot style of the grid lines. For possible values, see [this\ndemonstration](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\ndashstyle-all/).",
            "enumValues": [
              "Solid",
              "ShortDash",
              "ShortDot",
              "ShortDashDot",
              "ShortDashDotDot",
              "Dot",
              "Dash",
              "LongDash",
              "DashDot",
              "LongDashDot",
              "LongDashDotDot"
            ]
          },
          "subtree": {}
        },
        "gridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridLineWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The width of the grid lines extending the ticks across the plot area.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is given in the `.highcharts-grid-line` class."
          },
          "subtree": {}
        },
        "gridZIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridZIndex",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The Z index of the grid lines."
          },
          "subtree": {}
        },
        "id": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "id",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "An id for the axis. This can be used after render time to get a pointer\nto the axis object through `chart.get()`."
          },
          "subtree": {}
        },
        "linkedTo": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "linkedTo",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Index of another axis that this axis is linked to. When an axis is linked\nto a master axis, it will take the same extremes as the master, but as\nassigned by min or max or by setExtremes. It can be used to show additional\ninfo, or to ease reading the chart by duplicating the scales."
          },
          "subtree": {}
        },
        "max": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "max",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The maximum value of the axis. If `null`, the max value is automatically\ncalculated. If the `endOnTick` option is true, the `max` value might be\nrounded up.\n\nIf a [tickAmount](#yAxis.tickAmount) is set, the axis may be extended\nbeyond the set max in order to reach the given number of ticks. The same\nmay happen in a chart with multiple axes, determined by [chart.alignTicks](#chart),\n where a `tickAmount` is applied internally."
          },
          "subtree": {}
        },
        "maxZoom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxZoom",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Deprecated. Renamed to `minRange` as of Highcharts 2.2."
          },
          "subtree": {}
        },
        "min": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "min",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The minimum value of the axis. If `null` the min value is automatically\ncalculated. If the `startOnTick` option is true, the `min` value might\nbe rounded down."
          },
          "subtree": {}
        },
        "minRange": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minRange",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The minimum range to display on this axis. The entire axis will not be\nallowed to span over a smaller interval than this. For example, for a\ndatetime axis the main unit is milliseconds. If minRange is set to 3600000,\nyou can't zoom in more than to one hour.\n\nThe default minRange for the x axis is five times the smallest interval\nbetween any of the data points.\n\nOn a logarithmic axis, the unit for the minimum range is the power. So\na minRange of 1 means that the axis can be zoomed to 10-100, 100-1000,\n1000-10000 etc.\n\nNote that the `minPadding`, `maxPadding`, `startOnTick` and `endOnTick`\nsettings also affect how the extremes of the axis are computed."
          },
          "subtree": {}
        },
        "minTickInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minTickInterval",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The minimum tick interval allowed in axis values. For example on zooming\nin on an axis with daily data, this can be used to prevent the axis from\nshowing hours. Defaults to the closest distance between two points on\nthe axis."
          },
          "subtree": {}
        },
        "minorGridLineDashStyle": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "minorGridLineDashStyle",
            "excludes": {},
            "default": "Solid",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The dash or dot style of the minor grid lines. For possible values, see\n[this demonstration](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\ndashstyle-all/).",
            "enumValues": [
              "Solid",
              "ShortDash",
              "ShortDot",
              "ShortDashDot",
              "ShortDashDotDot",
              "Dot",
              "Dash",
              "LongDash",
              "DashDot",
              "LongDashDot",
              "LongDashDotDot"
            ]
          },
          "subtree": {}
        },
        "minorTickInterval": {
          "meta": {
            "types": {
              "string": 1,
              "number": 1
            },
            "name": "minorTickInterval",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Tick interval in scale units for the minor ticks. On a linear axis, if\n`\"auto\"`, the minor tick interval is calculated as a fifth of the tickInterval.\nIf `null`, minor ticks are not shown.\n\nOn logarithmic axes, the unit is the power of the value. For example,\nsetting the minorTickInterval to 1 puts one tick on each of 0.1, 1, 10,\n100 etc. Setting the minorTickInterval to 0.1 produces 9 ticks between\n1 and 10, 10 and 100 etc. A minorTickInterval of \"auto\" on a log axis\nresults in a best guess, attempting to enter approximately 5 minor ticks\nbetween each major tick.\n\nIf user settings dictate minor ticks to become too dense, they don't make\nsense, and will be ignored to prevent performance problems.\n\nOn axes using [categories](#xAxis.categories), minor ticks are not supported."
          },
          "subtree": {}
        },
        "minorTickWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minorTickWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of the minor tick mark."
          },
          "subtree": {}
        },
        "offset": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "offset",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The distance in pixels from the plot area to the axis line. A positive\noffset moves the axis with it's line, labels and ticks away from the plot\narea. This is typically used when two or more axes are displayed on the\nsame side of the plot. With multiple axes the offset is dynamically adjusted\nto avoid collision, this can be overridden by setting offset explicitly."
          },
          "subtree": {}
        },
        "opposite": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "opposite",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to display the axis on the opposite side of the normal. The normal\nis on the left side for vertical axes and bottom for horizontal, so the\nopposite sides will be right and top respectively. This is typically used\nwith dual or multiple axes."
          },
          "subtree": {}
        },
        "reversed": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversed",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to reverse the axis so that the highest number is closest to the\norigin. If the chart is inverted, the x axis is reversed by default."
          },
          "subtree": {}
        },
        "showEmpty": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showEmpty",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to show the axis line and title when the axis has no data."
          },
          "subtree": {}
        },
        "showFirstLabel": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showFirstLabel",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to show the first tick label."
          },
          "subtree": {}
        },
        "showLastLabel": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showLastLabel",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to show the last tick label."
          },
          "subtree": {}
        },
        "softMax": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMax",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A soft maximum for the axis. If the series data maximum is greater than\nthis, the axis will stay at this maximum, but if the series data maximum\nis higher, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "softMin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMin",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A soft minimum for the axis. If the series data minimum is greater than\nthis, the axis will stay at this minimum, but if the series data minimum\nis lower, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "tickAmount": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickAmount",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The amount of ticks to draw on the axis. This opens up for aligning the\nticks of multiple charts or panes within a chart. This option overrides\nthe `tickPixelInterval` option.\n\nThis option only has an effect on linear axes. Datetime, logarithmic or\ncategory axes are not affected."
          },
          "subtree": {}
        },
        "tickInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickInterval",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The interval of the tick marks in axis units. When `null`, the tick interval\nis computed to approximately follow the [tickPixelInterval](#xAxis.tickPixelInterval)\non linear and datetime axes. On categorized axes, a `null` tickInterval\nwill default to 1, one category. Note that datetime axes are based on\nmilliseconds, so for example an interval of one day is expressed as `24\n* 3600 * 1000`.\n\nOn logarithmic axes, the tickInterval is based on powers, so a tickInterval\nof 1 means one tick on each of 0.1, 1, 10, 100 etc. A tickInterval of\n2 means a tick of 0.1, 10, 1000 etc. A tickInterval of 0.2 puts a tick\non 0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40 etc.\n\nIf the tickInterval is too dense for labels to be drawn, Highcharts may\nremove ticks.\n\nIf the chart has multiple axes, the [alignTicks](#chart.alignTicks) option\nmay interfere with the `tickInterval` setting."
          },
          "subtree": {}
        },
        "tickPositions": {
          "meta": {
            "types": {
              "array": "Number"
            },
            "name": "tickPositions",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "An array defining where the ticks are laid out on the axis. This overrides\nthe default behaviour of [tickPixelInterval](#xAxis.tickPixelInterval)\nand [tickInterval](#xAxis.tickInterval)."
          },
          "subtree": {}
        },
        "tickWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of the major tick marks.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is given in the `.highcharts-tick` class."
          },
          "subtree": {}
        },
        "uniqueNames": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "uniqueNames",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1
            },
            "description": "Applies only when the axis `type` is `category`. When `nameToX` is true,\npoints are placed on the X axis according to their names. If the same\npoint name is repeated in the same or another series, the point is placed\non the same X position as other points of the same name. When `nameToX`\nis false, the points are laid out in increasing X positions regardless\nof their names, and the X axis category will take the name of the last\npoint in each position."
          },
          "subtree": {}
        },
        "units": {
          "meta": {
            "types": {
              "array": "object"
            },
            "name": "units",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Datetime axis only. An array determining what time intervals the ticks\nare allowed to fall on. Each array item is an array where the first value\nis the time unit and the second value another array of allowed multiples.\nDefaults to:\n\n<pre>units: [[ \t'millisecond', // unit name \t[1, 2, 5, 10, 20, 25, 50,\n100, 200, 500] // allowed multiples ], [ \t'second', \t[1, 2, 5, 10, 15,\n30] ], [ \t'minute', \t[1, 2, 5, 10, 15, 30] ], [ \t'hour', \t[1, 2, 3, 4,\n6, 8, 12] ], [ \t'day', \t[1] ], [ \t'week', \t[1] ], [ \t'month', \t[1, 3,\n 6] ], [ \t'year', \tnull ]]</pre>"
          },
          "subtree": {}
        },
        "visible": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "visible",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether axis, including axis title, line, ticks and labels, should be\nvisible."
          },
          "subtree": {}
        },
        "breaks": {
          "meta": {
            "types": {
              "array": "object"
            },
            "name": "breaks",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array defining breaks in the axis, the sections defined will be left\nout and all the points shifted closer to each other. Requires that the\nbroken-axis.js module is loaded."
          },
          "subtree": {
            "breakSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "breakSize",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A number indicating how much space should be left between the start and\nthe end of the break. The break size is given in axis units, so for instance\non a `datetime` axis, a break size of 3600000 would indicate the equivalent\nof an hour."
              },
              "subtree": {}
            },
            "from": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "from",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The point where the break starts."
              },
              "subtree": {}
            },
            "repeat": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "repeat",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Defines an interval after which the break appears again. By default the\nbreaks do not repeat."
              },
              "subtree": {}
            },
            "to": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "to",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The point where the break ends."
              },
              "subtree": {}
            }
          }
        },
        "crosshair": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "crosshair",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Configure a crosshair that follows either the mouse pointer or the hovered\npoint.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the crosshairs are styled in the `.highcharts-crosshair`, `.highcharts-\ncrosshair-thin` or `.highcharts-xaxis-category` classes."
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A class name for the crosshair, especially as a hook for styling."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The color of the crosshair. Defaults to `#cccccc` for numeric and datetime\naxes, and `rgba(204,214,235,0.25)` for category axes, where the crosshair\nby default highlights the whole category."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Solid",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The dash style for the crosshair. See [series.dashStyle](#plotOptions.\nseries.dashStyle) for possible values.",
                "enumValues": [
                  "Solid",
                  "ShortDash",
                  "ShortDot",
                  "ShortDashDot",
                  "ShortDashDotDot",
                  "Dot",
                  "Dash",
                  "LongDash",
                  "DashDot",
                  "LongDashDot",
                  "LongDashDotDot"
                ]
              },
              "subtree": {}
            },
            "snap": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "snap",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether the crosshair should snap to the point or follow the pointer independent\nof points."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel width of the crosshair. Defaults to 1 for numeric or datetime\naxes, and for one category width for category axes."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "2",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The Z index of the crosshair. Higher Z indices allow drawing the crosshair\non top of the series or behind the grid lines."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "label",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "A label on the axis next to the crosshair.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the label is styled with the `.highcharts-crosshair-label` class."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Alignment of the label compared to the axis. Defaults to `left` for right-\nside axes, `right` for left-side axes and `center` for horizontal axes."
                  },
                  "subtree": {}
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "The background color for the label. Defaults to the related series color,\n or `#666666` if that is not available."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "The border color for the crosshair label"
                  },
                  "subtree": {}
                },
                "borderRadius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderRadius",
                    "excludes": {},
                    "default": "3",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The border corner radius of the crosshair label."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The border width for the crosshair label."
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "A format string for the crosshair label. Defaults to `{value}` for numeric\naxes and `{value:%b %d, %Y}` for datetime axes."
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": "8",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Padding inside the crosshair label."
                  },
                  "subtree": {}
                },
                "shape": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "shape",
                    "excludes": {},
                    "default": "callout",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The shape to use for the label box."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "css": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "default": "{ \"color\": \"white\", \"fontWeight\": \"normal\", \"fontSize\": \"11px\", \"textAlign\": \"center\" }",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Text styles for the crosshair label."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "events": {
          "meta": {
            "types": {},
            "name": "events",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Event handlers for the axis."
          },
          "subtree": {}
        },
        "plotBands": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotBands",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of colored bands stretching across the plot area marking an interval\non the axis.\n\nIn a gauge, a plot band on the Y axis (value axis) will stretch along\nthe perimeter of the gauge.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the plot bands are styled by the `.highcharts-plot-band` class\nin addition to the `className` option."
          },
          "subtree": {
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Border color for the plot band. Also requires `borderWidth` to be set."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Border width for the plot band. Also requires `borderColor` to be set."
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A custom class name, in addition to the default `highcharts-plot-band`,\n to apply to each individual band."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The color of the plot band."
              },
              "subtree": {}
            },
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An object defining mouse events for the plot band. Supported properties\nare `click`, `mouseover`, `mouseout`, `mousemove`."
              },
              "subtree": {}
            },
            "from": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "from",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The start position of the plot band in axis units."
              },
              "subtree": {}
            },
            "id": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "id",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An id used for identifying the plot band in Axis.removePlotBand."
              },
              "subtree": {}
            },
            "to": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "to",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The end position of the plot band in axis units."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The z index of the plot band within the chart, relative to other elements.\nUsing the same z index as another element may give unpredictable results,\nas the last rendered element will be on top. Values from 0 to 20 make\nsense."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {},
                "name": "label",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Text labels for the plot bands"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "center",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal alignment of the label. Can be one of \"left\", \"center\" or \"right\"."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Rotation of the text label in degrees ."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "CSS styles for the text label.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the labels are styled by the `.highcharts-plot-band-label` class."
                  },
                  "subtree": {}
                },
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The string text itself. A subset of HTML is supported."
                  },
                  "subtree": {}
                },
                "textAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "textAlign",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The text alignment for the label. While `align` determines where the texts\nanchor point is placed within the plot band, `textAlign` determines how\nthe text is aligned against its anchor point. Possible values are \"left\",\n \"center\" and \"right\". Defaults to the same as the `align` option."
                  },
                  "subtree": {}
                },
                "useHTML": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "useHTML",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the labels."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical alignment of the label relative to the plot band. Can be one\nof \"top\", \"middle\" or \"bottom\"."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal position relative the alignment. Default varies by orientation."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical position of the text baseline relative to the alignment. Default\nvaries by orientation."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "plotLines": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotLines",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of lines stretching across the plot area, marking a specific\nvalue on one of the axes.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the plot lines are styled by the `.highcharts-plot-line` class\nin addition to the `className` option."
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A custom class name, in addition to the default `highcharts-plot-line`,\n to apply to each individual line."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The color of the line."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Solid",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The dashing or dot style for the plot line. For possible values see [this\noverview](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\ndashstyle-all/).",
                "enumValues": [
                  "Solid",
                  "ShortDash",
                  "ShortDot",
                  "ShortDashDot",
                  "ShortDashDotDot",
                  "Dot",
                  "Dash",
                  "LongDash",
                  "DashDot",
                  "LongDashDot",
                  "LongDashDotDot"
                ]
              },
              "subtree": {}
            },
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An object defining mouse events for the plot line. Supported properties\nare `click`, `mouseover`, `mouseout`, `mousemove`."
              },
              "subtree": {}
            },
            "id": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "id",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An id used for identifying the plot line in Axis.removePlotLine."
              },
              "subtree": {}
            },
            "value": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "value",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The position of the line in axis units."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The width or thickness of the plot line."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The z index of the plot line within the chart."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {},
                "name": "label",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Text labels for the plot bands"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "left",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal alignment of the label. Can be one of \"left\", \"center\" or \"right\"."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Rotation of the text label in degrees. Defaults to 0 for horizontal plot\nlines and 90 for vertical lines."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "CSS styles for the text label.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the labels are styled by the `.highcharts-plot-band-label` class."
                  },
                  "subtree": {}
                },
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The text itself. A subset of HTML is supported."
                  },
                  "subtree": {}
                },
                "textAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "textAlign",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The text alignment for the label. While `align` determines where the texts\nanchor point is placed within the plot band, `textAlign` determines how\nthe text is aligned against its anchor point. Possible values are \"left\",\n \"center\" and \"right\". Defaults to the same as the `align` option."
                  },
                  "subtree": {}
                },
                "useHTML": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "useHTML",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the labels."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical alignment of the label relative to the plot band. Can be one\nof \"top\", \"middle\" or \"bottom\".",
                    "enumValues": [
                      "top",
                      "middle",
                      "bottom"
                    ]
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal position relative the alignment. Default varies by orientation."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical position of the text baseline relative to the alignment. Default\nvaries by orientation."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "ordinal": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "ordinal",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "In an ordinal axis, the points are equally spaced in the chart regardless\nof the actual time or x distance between them. This means that missing\ndata for nights or weekends will not take up space in the chart."
          },
          "subtree": {}
        },
        "range": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "range",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highstock": 1
            },
            "description": "The zoomed range to display when only defining one or none of `min` or\n`max`. For example, to show the latest month, a range of one month can\nbe set."
          },
          "subtree": {}
        }
      }
    },
    "yAxis": {
      "meta": {
        "types": {
          "array": "yAxis"
        },
        "name": "yAxis",
        "excludes": {},
        "description": "This options set extends the defaultOptions for Y axes",
        "extends": "xAxis"
      },
      "subtree": {
        "endOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "endOnTick",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to force the axis to end on a tick. Use this option with the\n`maxPadding` option to control the axis end."
          },
          "subtree": {}
        },
        "tickPixelInterval": {
          "meta": {
            "types": {},
            "name": "tickPixelInterval",
            "excludes": {},
            "default": 72
          },
          "subtree": {}
        },
        "showLastLabel": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showLastLabel",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to show the last tick label. Defaults to `true` on cartesian\ncharts, and `false` on polar charts."
          },
          "subtree": {}
        },
        "labels": {
          "meta": {
            "types": {},
            "name": "labels",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "extends": "xAxis.labels"
          },
          "subtree": {
            "x": {
              "meta": {
                "types": {},
                "name": "x",
                "excludes": {}
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "default": "right",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "What part of the string the given position is anchored to. Can be one\nof `\"left\"`, `\"center\"` or `\"right\"`. The exact position also depends\non the `labels.x` setting. Angular gauges and solid gauges defaults to\n`center`.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "distance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "distance",
                "excludes": {},
                "default": "-25",
                "products": {
                  "highcharts": 1
                },
                "description": "Angular gauges and solid gauges only. The label's pixel distance from\nthe perimeter of the plot area."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "3",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The y position offset of the label relative to the tick position on the\naxis."
              },
              "subtree": {}
            }
          }
        },
        "maxPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxPadding",
            "excludes": {},
            "default": "0.05",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Padding of the max value relative to the length of the axis. A padding\nof 0.05 will make a 100px axis 5px longer. This is useful when you don't\nwant the highest data value to appear on the edge of the plot area."
          },
          "subtree": {}
        },
        "minPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minPadding",
            "excludes": {},
            "default": "0.05",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Padding of the min value relative to the length of the axis. A padding\nof 0.05 will make a 100px axis 5px longer. This is useful when you don't\nwant the lowest data value to appear on the edge of the plot area."
          },
          "subtree": {}
        },
        "startOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "startOnTick",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to force the axis to start on a tick. Use this option with the\n`maxPadding` option to control the axis start."
          },
          "subtree": {}
        },
        "title": {
          "meta": {
            "types": {},
            "name": "title",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "extends": "xAxis.title"
          },
          "subtree": {
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "270",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The rotation of the text in degrees. 0 is horizontal, 270 is vertical\nreading from bottom to top."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "Values",
                "products": {
                  "highcharts": 1
                },
                "description": "The actual text of the axis title. Horizontal texts can contain HTML,\nbut rotated texts are painted using vector techniques and must be\nclean text. The Y axis title is disabled by setting the `text` option\nto `null`."
              },
              "subtree": {}
            },
            "margin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "margin",
                "excludes": {},
                "default": "40",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel distance between the axis labels and the title. Positive values\nare outside the axis line, negative are inside."
              },
              "subtree": {}
            }
          }
        },
        "stackLabels": {
          "meta": {
            "types": {},
            "name": "stackLabels",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "The stack labels show the total value for each bar in a stacked column\nor bar chart. The label will be placed on top of positive columns and\nbelow negative columns. In case of an inverted column chart or a bar\nchart the label is placed to the right of positive bars and to the left\nof negative bars."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Enable or disable the stack total labels."
              },
              "subtree": {}
            },
            "formatter": {
              "meta": {
                "types": {},
                "name": "formatter",
                "excludes": {}
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{ \"color\": \"#000000\", \"fontSize\": \"11px\", \"fontWeight\": \"bold\", \"textShadow\": \"1px 1px contrast, -1px -1px contrast, -1px 1px contrast, 1px -1px contrast\" }",
                "products": {
                  "highcharts": 1
                },
                "description": "CSS styles for the label.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the styles are set in the `.highcharts-stack-label` class."
              },
              "subtree": {
                "fontSize": {
                  "meta": {
                    "types": {},
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {},
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {},
                    "name": "color",
                    "excludes": {},
                    "default": "${palette.neutralColor100}"
                  },
                  "subtree": {}
                },
                "textOutline": {
                  "meta": {
                    "types": {},
                    "name": "textOutline",
                    "excludes": {},
                    "default": "1px contrast"
                  },
                  "subtree": {}
                }
              }
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Defines the horizontal alignment of the stack total label. Can be one\nof `\"left\"`, `\"center\"` or `\"right\"`. The default value is calculated\nat runtime and depends on orientation and whether the stack is positive\nor negative.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "format": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "format",
                "excludes": {},
                "default": "{total}",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A [format string](http://docs.highcharts.com/#formatting) for the data\nlabel. Available variables are the same as for `formatter`."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "Rotation of the labels in degrees."
              },
              "subtree": {}
            },
            "textAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "textAlign",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The text alignment for the label. While `align` determines where the texts\nanchor point is placed with regards to the stack, `textAlign` determines\nhow the text is aligned against its anchor point. Possible values are\n`\"left\"`, `\"center\"` and `\"right\"`. The default value is calculated at\nruntime and depends on orientation and whether the stack is positive or\nnegative.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to [use HTML](http://docs.highcharts.com/#formatting$html) to\nrender the labels."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Defines the vertical alignment of the stack total label. Can be one of\n`\"top\"`, `\"middle\"` or `\"bottom\"`. The default value is calculated at\nruntime and depends on orientation and whether the stack is positive or\nnegative.",
                "enumValues": [
                  "top",
                  "middle",
                  "bottom"
                ]
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The x position offset of the label relative to the left of the stacked\nbar. The default value is calculated at runtime and depends on orientation\nand whether the stack is positive or negative."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The y position offset of the label relative to the tick position on the\naxis. The default value is calculated at runtime and depends on orientation\nand whether the stack is positive or negative."
              },
              "subtree": {}
            }
          }
        },
        "gridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridLineWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The width of the grid lines extending the ticks across the plot area."
          },
          "subtree": {}
        },
        "lineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The width of the line marking the axis itself."
          },
          "subtree": {}
        },
        "angle": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "angle",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1
            },
            "description": "In a polar chart, this is the angle of the Y axis in degrees, where 0\nis up and 90 is right. The angle determines the position of the axis line\nand the labels, though the coordinate system is unaffected."
          },
          "subtree": {}
        },
        "gridLineInterpolation": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "gridLineInterpolation",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1
            },
            "description": "Polar charts only. Whether the grid lines should draw as a polygon with\nstraight lines between categories, or as circles. Can be either `circle`\nor `polygon`.",
            "enumValues": [
              "circle",
              "polygon"
            ]
          },
          "subtree": {}
        },
        "maxColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "maxColor",
            "excludes": {},
            "default": "#003399",
            "products": {
              "highcharts": 1
            },
            "description": "Solid gauge only. Unless [stops](#yAxis.stops) are set, the color to represent\nthe maximum value of the Y axis."
          },
          "subtree": {}
        },
        "min": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "min",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The minimum value of the axis. If `null` the min value is automatically\ncalculated.\n\nIf the `startOnTick` option is true (default), the `min` value might be\nrounded down.\n\nThe automatically calculated minimum value is also affected by [floor](#yAxis.\nfloor), [softMin](#yAxis.softMin), [minPadding](#yAxis.minPadding), [minRange](#yAxis.\nminRange) as well as [series.threshold](#plotOptions.series.threshold)\nand [series.softThreshold](#plotOptions.series.softThreshold)."
          },
          "subtree": {}
        },
        "minColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minColor",
            "excludes": {},
            "default": "#e6ebf5",
            "products": {
              "highcharts": 1
            },
            "description": "Solid gauge only. Unless [stops](#yAxis.stops) are set, the color to represent\nthe minimum value of the Y axis."
          },
          "subtree": {}
        },
        "reversedStacks": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversedStacks",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "If `true`, the first series in a stack will be drawn on top in a positive,\nnon-reversed Y axis. If `false`, the first series is in the base of the\nstack."
          },
          "subtree": {}
        },
        "stops": {
          "meta": {
            "types": {
              "array": "Array"
            },
            "name": "stops",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Solid gauge series only. Color stops for the solid gauge. Use this in\ncases where a linear gradient between a `minColor` and `maxColor` is not\nsufficient. The stops is an array of tuples, where the first item is a\nfloat between 0 and 1 assigning the relative position in the gradient,\nand the second item is the color.\n\nFor solid gauges, the Y axis also inherits the concept of [data classes](http://api.\nhighcharts.com/highmaps#colorAxis.dataClasses) from the Highmaps color\naxis."
          },
          "subtree": {}
        },
        "tickWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The pixel width of the major tick marks."
          },
          "subtree": {}
        },
        "events": {
          "meta": {
            "types": {},
            "name": "events",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "xAxis.events"
          },
          "subtree": {}
        },
        "plotBands": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotBands",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of objects defining plot bands on the Y axis.",
            "extends": "xAxis.plotBands"
          },
          "subtree": {
            "innerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "innerRadius",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "In a gauge chart, this option determines the inner radius of the plot\nband that stretches along the perimeter. It can be given as a percentage\nstring, like `\"100%\"`, or as a pixel number, like `100`. By default, the\ninner radius is controlled by the [thickness](#yAxis.plotBands.thickness)\noption."
              },
              "subtree": {}
            },
            "outerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "outerRadius",
                "excludes": {},
                "default": "100%",
                "products": {
                  "highcharts": 1
                },
                "description": "In a gauge chart, this option determines the outer radius of the plot\nband that stretches along the perimeter. It can be given as a percentage\nstring, like `\"100%\"`, or as a pixel number, like `100`."
              },
              "subtree": {}
            },
            "thickness": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "thickness",
                "excludes": {},
                "default": "10",
                "products": {
                  "highcharts": 1
                },
                "description": "In a gauge chart, this option sets the width of the plot band stretching\nalong the perimeter. It can be given as a percentage string, like `\"10%\"`,\nor as a pixel number, like `10`. The default value 10 is the same as\nthe default [tickLength](#yAxis.tickLength), thus making the plot band\nact as a background for the tick markers."
              },
              "subtree": {}
            }
          }
        },
        "plotLines": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotLines",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "An array of objects representing plot lines on the X axis",
            "extends": "xAxis.plotLines"
          },
          "subtree": {}
        },
        "height": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "height",
            "excludes": {},
            "default": "null",
            "products": {
              "highstock": 1
            },
            "description": "The height of the Y axis. If it's a number, it is interpreted as pixels.\n\n\nSince Highstock 2: If it's a percentage string, it is interpreted as percentages\nof the total plot height."
          },
          "subtree": {}
        },
        "opposite": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "opposite",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether to display the axis on the opposite side of the normal. The normal\nis on the left side for vertical axes and bottom for horizontal, so the\nopposite sides will be right and top respectively. In Highstock 1.x, the\nY axis was placed on the left side by default."
          },
          "subtree": {}
        },
        "softMax": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMax",
            "excludes": {},
            "products": {
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A soft maximum for the axis. If the series data maximum is greater than\nthis, the axis will stay at this maximum, but if the series data maximum\nis higher, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "softMin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMin",
            "excludes": {},
            "products": {
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A soft minimum for the axis. If the series data minimum is greater than\nthis, the axis will stay at this minimum, but if the series data minimum\nis lower, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "top": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "top",
            "excludes": {},
            "default": "null",
            "products": {
              "highstock": 1
            },
            "description": "The top position of the Y axis. If it's a number, it is interpreted as\npixel position relative to the chart.\n\nSince Highstock 2: If it's a percentage string, it is interpreted as percentages\nof the plot height, offset from plot area top."
          },
          "subtree": {}
        },
        "scrollbar": {
          "meta": {
            "types": {},
            "name": "scrollbar",
            "excludes": {
              "height": 1
            },
            "products": {
              "highstock": 1
            },
            "description": "An optional scrollbar to display on the Y axis in response to limiting\nthe minimum an maximum of the axis values.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), all the presentational options for the scrollbar are replaced\nby the classes `.highcharts-scrollbar-thumb`, `.highcharts-scrollbar-arrow`,\n`.highcharts-scrollbar-button`, `.highcharts-scrollbar-rifles` and `.\nhighcharts-scrollbar-track`.",
            "extends": "scrollbar"
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "false",
                "products": {
                  "highstock": 1
                },
                "description": "Enable the scrollbar on the Y axis."
              },
              "subtree": {}
            },
            "margin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "margin",
                "excludes": {},
                "default": "10",
                "products": {
                  "highstock": 1
                },
                "description": "Pixel margin between the scrollbar and the axis elements."
              },
              "subtree": {}
            },
            "showFull": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showFull",
                "excludes": {},
                "default": "true",
                "products": {
                  "highstock": 1
                },
                "description": "Whether to show the scrollbar when it is fully zoomed out at max range.\nSetting it to `false` on the Y axis makes the scrollbar stay hidden until\nthe user zooms in, like common in browsers."
              },
              "subtree": {}
            },
            "size": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "size",
                "excludes": {},
                "default": "14",
                "products": {
                  "highstock": 1
                },
                "description": "The width of a vertical scrollbar or height of a horizontal scrollbar.\n Defaults to 20 on touch devices."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "3",
                "products": {
                  "highstock": 1
                },
                "description": "Z index of the scrollbar elements."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "navigator": {
      "meta": {
        "types": {},
        "name": "navigator",
        "excludes": {},
        "products": {
          "highstock": 1
        },
        "description": "The navigator is a small series below the main series, displaying a view\nof the entire data set. It provides tools to zoom in and out on parts\nof the data as well as panning across the dataset."
      },
      "subtree": {
        "height": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "height",
            "excludes": {},
            "default": "40",
            "products": {
              "highstock": 1
            },
            "description": "The height of the navigator."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": "25",
            "products": {
              "highstock": 1
            },
            "description": "The distance from the nearest element, the X axis or X axis labels."
          },
          "subtree": {}
        },
        "maskInside": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "maskInside",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether the mask should be inside the range marking the zoomed range,\n or outside. In Highstock 1.x it was always `false`."
          },
          "subtree": {}
        },
        "handles": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "handles",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the handles for dragging the zoomed area. Available options\nare `backgroundColor` (defaults to `#ebe7e8`) and `borderColor` (defaults\nto `#b2b1b6`)."
          },
          "subtree": {
            "backgroundColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "backgroundColor",
                "excludes": {},
                "default": "#f2f2f2",
                "products": {
                  "highstock": 1
                },
                "description": "The fill for the handle."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#999999",
                "products": {
                  "highstock": 1
                },
                "description": "The stroke for the handle border and the stripes inside."
              },
              "subtree": {}
            }
          }
        },
        "maskFill": {
          "meta": {
            "types": {},
            "name": "maskFill",
            "excludes": {}
          },
          "subtree": {}
        },
        "outlineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "outlineColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The color of the line marking the currently zoomed area in the navigator."
          },
          "subtree": {}
        },
        "outlineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "outlineWidth",
            "excludes": {},
            "default": "2",
            "products": {
              "highstock": 1
            },
            "description": "The width of the line marking the currently zoomed area in the navigator."
          },
          "subtree": {}
        },
        "series": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "series",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the navigator series. Available options are the same as\nany series, documented at [plotOptions](#plotOptions.series) and [series](#series).\n\n\nUnless data is explicitly defined on navigator.series, the data is borrowed\nfrom the first series in the chart.\n\nDefault series options for the navigator series are:\n\n<pre>series: { \ttype: 'areaspline', \tcolor: '#4572A7', \tfillOpacity:\n0.05, \tdataGrouping: { \t\tsmoothed: true \t}, \tlineWidth: 1, \tmarker:\n{ \t\tenabled: false \t} }</pre>"
          },
          "subtree": {
            "type": {
              "meta": {
                "types": {},
                "name": "type",
                "excludes": {}
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.highlightColor80}"
              },
              "subtree": {}
            },
            "fillOpacity": {
              "meta": {
                "types": {},
                "name": "fillOpacity",
                "excludes": {},
                "default": 0.05
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {},
                "name": "lineWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "compare": {
              "meta": {
                "types": {},
                "name": "compare",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {},
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {},
                    "name": "approximation",
                    "excludes": {},
                    "default": "average"
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {},
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "groupPixelWidth": {
                  "meta": {
                    "types": {},
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": 2
                  },
                  "subtree": {}
                },
                "smoothed": {
                  "meta": {
                    "types": {},
                    "name": "smoothed",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "units": {
                  "meta": {
                    "types": {},
                    "name": "units",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {},
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {},
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "zIndex": {
                  "meta": {
                    "types": {},
                    "name": "zIndex",
                    "excludes": {},
                    "default": 2
                  },
                  "subtree": {}
                }
              }
            },
            "id": {
              "meta": {
                "types": {},
                "name": "id",
                "excludes": {},
                "default": "highcharts-navigator-series"
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {},
                "name": "className",
                "excludes": {},
                "default": "highcharts-navigator-series"
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {},
                "name": "lineColor",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {},
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {},
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "pointRange": {
              "meta": {
                "types": {},
                "name": "pointRange",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "shadow": {
              "meta": {
                "types": {},
                "name": "shadow",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {},
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            }
          }
        },
        "xAxis": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "xAxis",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the navigator X axis. Available options are the same as\nany X axis, documented at [xAxis](#xAxis). Default series options for\nthe navigator xAxis are:\n\n<pre>xAxis: {     tickWidth: 0,     lineWidth: 0,     gridLineWidth:\n1,     tickPixelInterval: 200,     labels: {         align: 'left',\nstyle: {             color: '#888'         },         x: 3,\n        y: -4     } }</pre>"
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {},
                "name": "className",
                "excludes": {},
                "default": "highcharts-navigator-xaxis"
              },
              "subtree": {}
            },
            "tickLength": {
              "meta": {
                "types": {},
                "name": "tickLength",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {},
                "name": "lineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "gridLineColor": {
              "meta": {
                "types": {},
                "name": "gridLineColor",
                "excludes": {},
                "default": "${palette.neutralColor10}"
              },
              "subtree": {}
            },
            "gridLineWidth": {
              "meta": {
                "types": {},
                "name": "gridLineWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "tickPixelInterval": {
              "meta": {
                "types": {},
                "name": "tickPixelInterval",
                "excludes": {},
                "default": 200
              },
              "subtree": {}
            },
            "labels": {
              "meta": {
                "types": {},
                "name": "labels",
                "excludes": {}
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {},
                    "name": "align",
                    "excludes": {},
                    "default": "left"
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {},
                    "name": "style",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {},
                        "name": "color",
                        "excludes": {},
                        "default": "${palette.neutralColor40}"
                      },
                      "subtree": {}
                    }
                  }
                },
                "x": {
                  "meta": {
                    "types": {},
                    "name": "x",
                    "excludes": {},
                    "default": 3
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {},
                    "name": "y",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "crosshair": {
              "meta": {
                "types": {},
                "name": "crosshair",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            }
          }
        },
        "yAxis": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "yAxis",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the navigator Y axis. Available options are the same as\nany y axis, documented at [yAxis](#yAxis). Default series options for\nthe navigator yAxis are:\n\n<pre>yAxis: { \tgridLineWidth: 0, \tstartOnTick: false, \tendOnTick: false,\nminPadding: 0.1, \tmaxPadding: 0.1, \tlabels: { \t\tenabled: false \t},\n \ttitle: { \t\ttext: null \t}, \ttickWidth: 0 }</pre>"
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {},
                "name": "className",
                "excludes": {},
                "default": "highcharts-navigator-yaxis"
              },
              "subtree": {}
            },
            "gridLineWidth": {
              "meta": {
                "types": {},
                "name": "gridLineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "startOnTick": {
              "meta": {
                "types": {},
                "name": "startOnTick",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "endOnTick": {
              "meta": {
                "types": {},
                "name": "endOnTick",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "minPadding": {
              "meta": {
                "types": {},
                "name": "minPadding",
                "excludes": {},
                "default": 0.1
              },
              "subtree": {}
            },
            "maxPadding": {
              "meta": {
                "types": {},
                "name": "maxPadding",
                "excludes": {},
                "default": 0.1
              },
              "subtree": {}
            },
            "labels": {
              "meta": {
                "types": {},
                "name": "labels",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {},
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "crosshair": {
              "meta": {
                "types": {},
                "name": "crosshair",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "title": {
              "meta": {
                "types": {},
                "name": "title",
                "excludes": {}
              },
              "subtree": {
                "text": {
                  "meta": {
                    "types": {},
                    "name": "text",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                }
              }
            },
            "tickLength": {
              "meta": {
                "types": {},
                "name": "tickLength",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "tickWidth": {
              "meta": {
                "types": {},
                "name": "tickWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            }
          }
        },
        "adaptToUpdatedData": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "adaptToUpdatedData",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether the navigator and scrollbar should adapt to updated data in the\nbase X axis. When loading data async, as in the demo below, this should\nbe `false`. Otherwise new data will trigger navigator redraw, which will\ncause unwanted looping. In the demo below, the data in the navigator is\nset only once. On navigating, only the main chart content is updated."
          },
          "subtree": {}
        },
        "baseSeries": {
          "meta": {
            "types": {
              "mixed": 1
            },
            "name": "baseSeries",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "An integer identifying the index to use for the base series, or a string\nrepresenting the id of the series.\n\n**Note**: As of Highcharts 5.0, this is now a deprecated option. Prefer\n[series.showInNavigator](#plotOptions.series.showInNavigator)."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the navigator."
          },
          "subtree": {}
        }
      }
    },
    "colors": {
      "meta": {
        "types": {},
        "name": "colors",
        "excludes": {}
      },
      "subtree": {}
    },
    "symbols": {
      "meta": {
        "types": {},
        "name": "symbols",
        "excludes": {}
      },
      "subtree": {}
    },
    "lang": {
      "meta": {
        "types": {},
        "name": "lang",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Language object. The language object is global and it can't be set on\neach chart initiation. Instead, use `Highcharts.setOptions` to set it\nbefore any chart is initiated.\n\n<pre>Highcharts.setOptions({ \tlang: { \t\tmonths: ['Janvier', 'Février',\n'Mars', 'Avril', 'Mai', 'Juin',  'Juillet', 'Août', 'Septembre', 'Octobre',\n'Novembre', 'Décembre'], \t\tweekdays: ['Dimanche', 'Lundi', 'Mardi',\n'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] \t} });</pre>"
      },
      "subtree": {
        "loading": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "loading",
            "excludes": {},
            "default": "Loading...",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The loading text that appears when the chart is set into the loading\nstate following a call to `chart.showLoading`."
          },
          "subtree": {}
        },
        "months": {
          "meta": {
            "types": {},
            "name": "months",
            "excludes": {}
          },
          "subtree": {}
        },
        "shortMonths": {
          "meta": {
            "types": {},
            "name": "shortMonths",
            "excludes": {}
          },
          "subtree": {}
        },
        "weekdays": {
          "meta": {
            "types": {},
            "name": "weekdays",
            "excludes": {}
          },
          "subtree": {}
        },
        "decimalPoint": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "decimalPoint",
            "excludes": {},
            "default": ".",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The default decimal point used in the `Highcharts.numberFormat` method\nunless otherwise specified in the function arguments."
          },
          "subtree": {}
        },
        "numericSymbols": {
          "meta": {
            "types": {},
            "name": "numericSymbols",
            "excludes": {}
          },
          "subtree": {}
        },
        "resetZoom": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "resetZoom",
            "excludes": {},
            "default": "Reset zoom",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The text for the label appearing when a chart is zoomed."
          },
          "subtree": {}
        },
        "resetZoomTitle": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "resetZoomTitle",
            "excludes": {},
            "default": "Reset zoom level 1:1",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The tooltip title for the label appearing when a chart is zoomed."
          },
          "subtree": {}
        },
        "thousandsSep": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "thousandsSep",
            "excludes": {},
            "default": " ",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The default thousands separator used in the `Highcharts.numberFormat`\nmethod unless otherwise specified in the function arguments. Since Highcharts\n4.1 it defaults to a single space character, which is compatible with\nISO and works across Anglo-American and continental European languages.\n\n\nThe default is a single space."
          },
          "subtree": {}
        },
        "rangeSelectorZoom": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "rangeSelectorZoom",
            "excludes": {},
            "default": "Zoom",
            "products": {
              "highstock": 1
            },
            "description": "The text for the label for the range selector buttons."
          },
          "subtree": {}
        },
        "rangeSelectorFrom": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "rangeSelectorFrom",
            "excludes": {},
            "default": "From",
            "products": {
              "highstock": 1
            },
            "description": "The text for the label for the \"from\" input box in the range selector."
          },
          "subtree": {}
        },
        "rangeSelectorTo": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "rangeSelectorTo",
            "excludes": {},
            "default": "To",
            "products": {
              "highstock": 1
            },
            "description": "The text for the label for the \"to\" input box in the range selector."
          },
          "subtree": {}
        },
        "contextButtonTitle": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "contextButtonTitle",
            "excludes": {},
            "default": "Chart context menu",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Exporting module menu. The tooltip title for the context menu holding\nprint and export menu items."
          },
          "subtree": {}
        },
        "downloadJPEG": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadJPEG",
            "excludes": {},
            "default": "Download JPEG image",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Exporting module only. The text for the JPEG download menu item."
          },
          "subtree": {}
        },
        "downloadPDF": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadPDF",
            "excludes": {},
            "default": "Download PDF document",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Exporting module only. The text for the PDF download menu item."
          },
          "subtree": {}
        },
        "downloadPNG": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadPNG",
            "excludes": {},
            "default": "Download PNG image",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Exporting module only. The text for the PNG download menu item."
          },
          "subtree": {}
        },
        "downloadSVG": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadSVG",
            "excludes": {},
            "default": "Download SVG vector image",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Exporting module only. The text for the SVG download menu item."
          },
          "subtree": {}
        },
        "drillUpText": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "drillUpText",
            "excludes": {},
            "default": "Back to {series.name}",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The text for the button that appears when drilling down, linking back\nto the parent series. The parent series' name is inserted for `{series.\nname}`."
          },
          "subtree": {}
        },
        "invalidDate": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "invalidDate",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "What to show in a date field for invalid dates. Defaults to an empty string."
          },
          "subtree": {}
        },
        "noData": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "noData",
            "excludes": {},
            "default": "No data to display",
            "products": {
              "highcharts": 1
            },
            "description": "The text to display when the chart contains no data. Requires the no-data\nmodule, see [noData](#noData)."
          },
          "subtree": {}
        },
        "numericSymbolMagnitude": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "numericSymbolMagnitude",
            "excludes": {},
            "default": "1000",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The magnitude of [numericSymbols](#lang.numericSymbol) replacements. Use\n10000 for Japanese, Korean and various Chinese locales, which use symbols\nfor 10^4, 10^8 and 10^12."
          },
          "subtree": {}
        },
        "printChart": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "printChart",
            "excludes": {},
            "default": "Print chart",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Exporting module only. The text for the menu item to print the chart."
          },
          "subtree": {}
        },
        "shortWeekdays": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "shortWeekdays",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Short week days, starting Sunday. If not specified, Highcharts uses the\nfirst three letters of the `lang.weekdays` option."
          },
          "subtree": {}
        },
        "zoomIn": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "zoomIn",
            "excludes": {},
            "default": "Zoom in",
            "products": {
              "highmaps": 1
            },
            "description": "The title appearing on hovering the zoom in button. The text itself defaults\nto \"+\" and can be changed in the button options."
          },
          "subtree": {}
        },
        "zoomOut": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "zoomOut",
            "excludes": {},
            "default": "Zoom out",
            "products": {
              "highmaps": 1
            },
            "description": "The title appearing on hovering the zoom out button. The text itself defaults\nto \"-\" and can be changed in the button options."
          },
          "subtree": {}
        }
      }
    },
    "global": {
      "meta": {
        "types": {},
        "name": "global",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Global options that don't apply to each chart. These options, like the\n`lang` options, must be set using the `Highcharts.setOptions` method.\n\n\n<pre>Highcharts.setOptions({ \tglobal: { \t\tuseUTC: false \t} });</pre>"
      },
      "subtree": {
        "useUTC": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useUTC",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to use UTC time for axis scaling, tickmark placement and time\ndisplay in `Highcharts.dateFormat`. Advantages of using UTC is that\nthe time displays equally regardless of the user agent's time zone settings.\nLocal time can be used when the data is loaded in real time or when\ncorrect Daylight Saving Time transitions are required."
          },
          "subtree": {}
        },
        "VMLRadialGradientURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "VMLRadialGradientURL",
            "excludes": {},
            "default": "http://code.highcharts.com/{version}/gfx/vml-radial-gradient.png",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Path to the pattern image required by VML browsers in order to draw\nradial gradients."
          },
          "subtree": {}
        },
        "Date": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "Date",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A custom `Date` class for advanced date handling. For example, [JDate](https://github.\ncom/tahajahangir/jdate) can be hooked in to handle Jalali dates."
          },
          "subtree": {}
        },
        "canvasToolsURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "canvasToolsURL",
            "excludes": {},
            "default": "http://code.highcharts.com/{version}/modules/canvas-tools.js",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "_Canvg rendering for Android 2.x is removed as of Highcharts 5.0\\. Use\nthe [libURL](#exporting.libURL) option to configure exporting._\n\nThe URL to the additional file to lazy load for Android 2.x devices. These\ndevices don't support SVG, so we download a helper file that contains\n[canvg](http://code.google.com/p/canvg/), its dependency rbcolor, and\nour own CanVG Renderer class. To avoid hotlinking to our site, you can\ninstall canvas-tools.js on your own server and change this option accordingly."
          },
          "subtree": {}
        },
        "timezone": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "timezone",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Requires [moment.js](http://momentjs.com/). If the timezone option is\nspecified, it creates a default [getTimezoneOffset](#global.getTimezoneOffset)\nfunction that looks up the specified timezone in moment.js. If moment.\njs is not included, this throws a Highcharts error in the console, but\ndoes not crash the chart."
          },
          "subtree": {}
        },
        "timezoneOffset": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "timezoneOffset",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The timezone offset in minutes. Positive values are west, negative values\nare east of UTC, as in the ECMAScript [getTimezoneOffset](https://developer.\nmozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)\nmethod. Use this to display UTC based data in a predefined time zone."
          },
          "subtree": {}
        }
      }
    },
    "chart": {
      "meta": {
        "types": {},
        "name": "chart",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Options regarding the chart area and plot area as well as general chart\noptions."
      },
      "subtree": {
        "borderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The corner radius of the outer chart border."
          },
          "subtree": {}
        },
        "colorCount": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "colorCount",
            "excludes": {},
            "default": "10",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "In [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), this sets how many colors the class names should rotate between.\nWith ten colors, series (or points) are given class names like `highcharts-\ncolor-0`, `highcharts-color-0` [...] `highcharts-color-9`. The equivalent\nin non-styled mode is to set colors using the [colors](#colors) setting."
          },
          "subtree": {}
        },
        "defaultSeriesType": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "defaultSeriesType",
            "excludes": {},
            "default": "line",
            "products": {
              "highcharts": 1
            },
            "description": "Alias of `type`.",
            "enumValues": [
              "line",
              "spline",
              "column",
              "area",
              "areaspline",
              "pie"
            ]
          },
          "subtree": {}
        },
        "ignoreHiddenSeries": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "ignoreHiddenSeries",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "If true, the axes will scale to the remaining visible series once one\nseries is hidden. If false, hiding and showing a series will not affect\nthe axes or the other series. For stacks, once one series within the\nstack is hidden, the rest of the stack will close in around it even\nif the axis is not affected."
          },
          "subtree": {}
        },
        "spacing": {
          "meta": {
            "types": {},
            "name": "spacing",
            "excludes": {}
          },
          "subtree": {}
        },
        "resetZoomButton": {
          "meta": {
            "types": {},
            "name": "resetZoomButton",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The button that appears after a selection zoom, allowing the user to\nreset zoom."
          },
          "subtree": {
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A collection of attributes for the button. The object takes SVG attributes\nlike `fill`, `stroke`, `stroke-width` or `r`, the border radius. The\ntheme also supports `style`, a collection of CSS properties for the\ntext. Equivalent attributes for the hover state are given in `theme.\nstates.hover`."
              },
              "subtree": {
                "zIndex": {
                  "meta": {
                    "types": {},
                    "name": "zIndex",
                    "excludes": {},
                    "default": 20
                  },
                  "subtree": {}
                }
              }
            },
            "position": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "position",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The position of the button."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "right",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The heatmap series type. This series type is available both in Highcharts\nand Highmaps."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {},
                    "name": "x",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "10",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The vertical offset of the button."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "enum": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The vertical alignment of the button.",
                    "enumValues": [
                      "top",
                      "middle",
                      "bottom"
                    ]
                  },
                  "subtree": {}
                }
              }
            },
            "relativeTo": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "relativeTo",
                "excludes": {},
                "default": "plot",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "What frame the button should be placed related to. Can be either \"plot\"\nor \"chart\".",
                "enumValues": [
                  "plot",
                  "chart"
                ]
              },
              "subtree": {}
            }
          }
        },
        "width": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "width",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "An explicit width for the chart. By default (when `null`) the width\nis calculated from the offset width of the containing element."
          },
          "subtree": {}
        },
        "height": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "height",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "An explicit height for the chart. By default (when `null`) the height\nis calculated from the offset height of the containing element, or 400\npixels if the containing element's height is 0."
          },
          "subtree": {}
        },
        "borderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "borderColor",
            "excludes": {},
            "default": "#335cad",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The color of the outer chart border."
          },
          "subtree": {}
        },
        "backgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "backgroundColor",
            "excludes": {},
            "default": "#FFFFFF",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The background color or gradient for the outer chart area."
          },
          "subtree": {}
        },
        "plotBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "plotBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The color of the inner chart or plot area border."
          },
          "subtree": {}
        },
        "options3d": {
          "meta": {
            "types": {},
            "name": "options3d",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Options to render charts in 3 dimensions. This feature requires `highcharts-\n3d.js`, found in the download package or online at [code.highcharts.\ncom/highcharts-3d.js](http://code.highcharts.com/highcharts-3d.js)."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Wether to render the chart using the 3D functionality."
              },
              "subtree": {}
            },
            "alpha": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "alpha",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "One of the two rotation angles for the chart."
              },
              "subtree": {}
            },
            "beta": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "beta",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "One of the two rotation angles for the chart."
              },
              "subtree": {}
            },
            "depth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "depth",
                "excludes": {},
                "default": "100",
                "products": {
                  "highcharts": 1
                },
                "description": "The total depth of the chart."
              },
              "subtree": {}
            },
            "fitToPlot": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "fitToPlot",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether the 3d box should automatically adjust to the chart plot area."
              },
              "subtree": {}
            },
            "viewDistance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "viewDistance",
                "excludes": {},
                "default": "100",
                "products": {
                  "highcharts": 1
                },
                "description": "Defines the distance the viewer is standing in front of the chart,\nthis setting is important to calculate the perspective effect in column\nand scatter charts. It is not used for 3D pie charts."
              },
              "subtree": {}
            },
            "frame": {
              "meta": {
                "types": {},
                "name": "frame",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Provides the option to draw a frame around the charts by defining a\nbottom, front and back panel."
              },
              "subtree": {
                "bottom": {
                  "meta": {
                    "types": {},
                    "name": "bottom",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The bottom of the frame around a 3D chart."
                  },
                  "subtree": {
                    "size": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "size",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The thickness of the panel."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "transparent",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The color of the panel."
                      },
                      "subtree": {}
                    }
                  }
                },
                "side": {
                  "meta": {
                    "types": {},
                    "name": "side",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The side for the frame around a 3D chart."
                  },
                  "subtree": {
                    "size": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "size",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The thickness of the panel."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "transparent",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The color of the panel."
                      },
                      "subtree": {}
                    }
                  }
                },
                "back": {
                  "meta": {
                    "types": {},
                    "name": "back",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Defines the back panel of the frame around 3D charts."
                  },
                  "subtree": {
                    "size": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "size",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "Thickness of the panel."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "transparent",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The color of the panel."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            }
          }
        },
        "alignTicks": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "alignTicks",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using multiple axis, the ticks of two or more opposite axes will\nautomatically be aligned by adding ticks to the axis or axes with the\nleast ticks, as if `tickAmount` were specified.\n\nThis can be prevented by setting `alignTicks` to false. If the grid lines\nlook messy, it's a good idea to hide them for the secondary axis by setting\n`gridLineWidth` to 0."
          },
          "subtree": {}
        },
        "animation": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "animation",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Set the overall animation for all chart updating. Animation can be disabled\nthroughout the chart by setting it to false here. It can be overridden\nfor each individual API method as a function parameter. The only animation\nnot affected by this option is the initial series animation, see [plotOptions.\nseries.animation](#plotOptions.series.animation).\n\nThe animation can either be set as a boolean or a configuration object.\nIf `true`, it will use the 'swing' jQuery easing and a duration of 500\nms. If used as a configuration object, the following properties are supported:\n\n<dl>\n\n<dt>duration</dt>\n\n<dd>The duration of the animation in milliseconds.</dd>\n\n<dt>easing</dt>\n\n<dd>A string reference to an easing function set on the `Math` object.\nSee [the easing demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\nanimation-easing/).</dd>\n\n</dl>"
          },
          "subtree": {}
        },
        "borderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of the outer chart border."
          },
          "subtree": {}
        },
        "className": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "className",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A CSS class name to apply to the charts container `div`, allowing unique\nCSS styling for each chart."
          },
          "subtree": {}
        },
        "description": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "description",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A text description of the chart.\n\nIf the Accessibility module is loaded, this is included by default as\na long description of the chart and its contents in the hidden screen\nreader information region."
          },
          "subtree": {}
        },
        "inverted": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "inverted",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to invert the axes so that the x axis is vertical and y axis is\nhorizontal. When true, the x axis is [reversed](#xAxis.reversed) by default.\nIf a bar series is present in the chart, it will be inverted automatically.\n\n\nInverting the chart doesn't have an effect if there are no cartesian series\nin the chart, or if the chart is [polar](#chart.polar)."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "array": "object"
            },
            "name": "margin",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The margin between the outer edge of the chart and the plot area. The\nnumbers in the array designate top, right, bottom and left respectively.\nUse the options `marginTop`, `marginRight`, `marginBottom` and `marginLeft`\nfor shorthand setting of one option.\n\nSince version 2.1, the margin is 0 by default. The actual space is dynamically\ncalculated from the offset of axis labels, axis title, title, subtitle\nand legend in addition to the `spacingTop`, `spacingRight`, `spacingBottom`\nand `spacingLeft` options.\n\nDefaults to `[null]`."
          },
          "subtree": {}
        },
        "marginBottom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginBottom",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The margin between the bottom outer edge of the chart and the plot area.\nUse this to set a fixed pixel value for the margin as opposed to the\ndefault dynamic margin. See also `spacingBottom`."
          },
          "subtree": {}
        },
        "marginLeft": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginLeft",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The margin between the left outer edge of the chart and the plot area.\nUse this to set a fixed pixel value for the margin as opposed to the\ndefault dynamic margin. See also `spacingLeft`."
          },
          "subtree": {}
        },
        "marginRight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginRight",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The margin between the right outer edge of the chart and the plot area.\nUse this to set a fixed pixel value for the margin as opposed to the\ndefault dynamic margin. See also `spacingRight`."
          },
          "subtree": {}
        },
        "marginTop": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginTop",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The margin between the top outer edge of the chart and the plot area.\nUse this to set a fixed pixel value for the margin as opposed to the default\ndynamic margin. See also `spacingTop`."
          },
          "subtree": {}
        },
        "panKey": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "panKey",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Allows setting a key to switch between zooming and panning. Can be one\nof `alt`, `ctrl`, `meta` (the command key on Mac and Windows key on Windows)\nor `shift`. The keys are mapped directly to the key properties of the\nclick event argument (`event.altKey`, `event.ctrlKey`, `event.metaKey`\nand `event.shiftKey`).",
            "enumValues": [
              null,
              "alt",
              "ctrl",
              "meta",
              "shift"
            ]
          },
          "subtree": {}
        },
        "panning": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "panning",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Allow panning in a chart. Best used with [panKey](#chart.panKey) to combine\nzooming and panning.\n\nOn touch devices, when the [tooltip.followTouchMove](#tooltip.followTouchMove)\noption is `true` (default), panning requires two fingers. To allow panning\nwith one finger, set `followTouchMove` to `false`."
          },
          "subtree": {}
        },
        "pinchType": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "pinchType",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Equivalent to [zoomType](#chart.zoomType), but for multitouch gestures\nonly. By default, the `pinchType` is the same as the `zoomType` setting.\nHowever, pinching can be enabled separately in some cases, for example\nin stock charts where a mouse drag pans the chart, while pinching is enabled.\nWhen [tooltip.followTouchMove](#tooltip.followTouchMove) is true, pinchType\nonly applies to two-finger touches.",
            "enumValues": [
              "x",
              "y",
              "xy"
            ]
          },
          "subtree": {}
        },
        "plotBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "plotBackgroundColor",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The background color or gradient for the plot area."
          },
          "subtree": {}
        },
        "plotBackgroundImage": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "plotBackgroundImage",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The URL for an image to use as the plot background. To set an image as\nthe background for the entire chart, set a CSS background image to the\ncontainer element. Note that for the image to be applied to exported charts,\n its URL needs to be accessible by the export server."
          },
          "subtree": {}
        },
        "plotBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "plotBorderWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of the plot area border."
          },
          "subtree": {}
        },
        "plotShadow": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "plotShadow",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to apply a drop shadow to the plot area. Requires that plotBackgroundColor\nbe set. Since 2.3 the shadow can be an object configuration containing\n`color`, `offsetX`, `offsetY`, `opacity` and `width`."
          },
          "subtree": {}
        },
        "polar": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "polar",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1
            },
            "description": "When true, cartesian charts like line, spline, area and column are transformed\ninto the polar coordinate system. Requires `highcharts-more.js`."
          },
          "subtree": {}
        },
        "reflow": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reflow",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to reflow the chart to fit the width of the container div on resizing\nthe window."
          },
          "subtree": {}
        },
        "renderTo": {
          "meta": {
            "types": {
              "string": 1,
              "object": 1
            },
            "name": "renderTo",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The HTML element where the chart will be rendered. If it is a string,\nthe element by that id is used. The HTML element can also be passed by\ndirect reference.\n\nWhen using the [Highcharts.chart](#Highcharts.chart) constructor, the\n`renderTo` is given as a parameter, and can be skipped in the options\nset."
          },
          "subtree": {}
        },
        "selectionMarkerFill": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "selectionMarkerFill",
            "excludes": {},
            "default": "rgba(51,92,173,0.25)",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The background color of the marker square when selecting (zooming in on)\nan area of the chart."
          },
          "subtree": {}
        },
        "shadow": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "shadow",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to apply a drop shadow to the outer chart area. Requires that\nbackgroundColor be set. Since 2.3 the shadow can be an object configuration\ncontaining `color`, `offsetX`, `offsetY`, `opacity` and `width`."
          },
          "subtree": {}
        },
        "showAxes": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showAxes",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Whether to show the axes initially. This only applies to empty charts\nwhere series are added dynamically, as axes are automatically added to\ncartesian series."
          },
          "subtree": {}
        },
        "spacingBottom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingBottom",
            "excludes": {},
            "default": "15",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The space between the bottom edge of the chart and the content (plot area,\n axis title and labels, title, subtitle or legend in top position)."
          },
          "subtree": {}
        },
        "spacingLeft": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingLeft",
            "excludes": {},
            "default": "10",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The space between the left edge of the chart and the content (plot area,\n axis title and labels, title, subtitle or legend in top position)."
          },
          "subtree": {}
        },
        "spacingRight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingRight",
            "excludes": {},
            "default": "10",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The space between the right edge of the chart and the content (plot area,\n axis title and labels, title, subtitle or legend in top position)."
          },
          "subtree": {}
        },
        "spacingTop": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingTop",
            "excludes": {},
            "default": "10",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The space between the top edge of the chart and the content (plot area,\n axis title and labels, title, subtitle or legend in top position)."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{\"fontFamily\":\"\\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Verdana, Arial, Helvetica, sans-serif\",\"fontSize\":\"12px\"}",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Additional CSS styles to apply inline to the container `div`. Note that\nsince the default font styles are applied in the renderer, it is ignorant\nof the individual chart options and must be set globally."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "type",
            "excludes": {},
            "default": "line",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The default series type for the chart. Can be any of the chart types listed\nunder [plotOptions](#plotOptions).",
            "enumValues": [
              "line",
              "spline",
              "column",
              "bar",
              "area",
              "areaspline",
              "pie",
              "arearange",
              "areasplinerange",
              "boxplot",
              "bubble",
              "columnrange",
              "errorbar",
              "funnel",
              "gauge",
              "heatmap",
              "polygon",
              "pyramid",
              "scatter",
              "solidgauge",
              "treemap",
              "waterfall"
            ]
          },
          "subtree": {}
        },
        "typeDescription": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "typeDescription",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A text description of the chart type.\n\nIf the Accessibility module is loaded, this will be included in the description\nof the chart in the screen reader information region.\n\nHighcharts will by default attempt to guess the chart type, but for more\ncomplex charts it is recommended to specify this property for clarity."
          },
          "subtree": {}
        },
        "zoomType": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "zoomType",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Decides in what dimensions the user can zoom by dragging the mouse. Can\nbe one of `x`, `y` or `xy`.",
            "enumValues": [
              null,
              "x",
              "y",
              "xy"
            ]
          },
          "subtree": {}
        },
        "events": {
          "meta": {
            "types": {},
            "name": "events",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Event listeners for the chart."
          },
          "subtree": {}
        },
        "map": {
          "meta": {
            "types": {
              "string": 1,
              "object": 1,
              "array": "Object"
            },
            "name": "map",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highmaps": 1
            },
            "description": "Default `mapData` for all series. If set to a string, it functions as\nan index into the `Highcharts.maps` array. Otherwise it is interpreted\nas map data."
          },
          "subtree": {}
        },
        "mapTransforms": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mapTransforms",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highmaps": 1
            },
            "description": "Set lat/lon transformation definitions for the chart. If not defined,\nthese are extracted from the map data."
          },
          "subtree": {}
        }
      }
    },
    "title": {
      "meta": {
        "types": {},
        "name": "title",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "The chart's main title."
      },
      "subtree": {
        "text": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "text",
            "excludes": {},
            "default": "Chart title",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The title of the chart. To disable the title, set the `text` to `null`."
          },
          "subtree": {}
        },
        "align": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "align",
            "excludes": {},
            "default": "center",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The horizontal alignment of the title. Can be one of \"left\", \"center\"\nand \"right\".",
            "enumValues": [
              "left",
              "center",
              "right"
            ]
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": "15",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The margin between the title and the plot area, or if a subtitle is\npresent, the margin between the subtitle and the plot area."
          },
          "subtree": {}
        },
        "widthAdjust": {
          "meta": {
            "types": {},
            "name": "widthAdjust",
            "excludes": {}
          },
          "subtree": {}
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When the title is floating, the plot area will not move to make space\nfor it."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#333333\", \"fontSize\": \"18px\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the title. Use this for font styling, but use `align`,\n`x` and `y` for text alignment.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the title style is given in the `.highcharts-title` class."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the text."
          },
          "subtree": {}
        },
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The vertical alignment of the title. Can be one of `\"top\"`, `\"middle\"`\nand `\"bottom\"`. When a value is given, the title behaves as if [floating](#title.\nfloating) were `true`.",
            "enumValues": [
              "top",
              "middle",
              "bottom"
            ]
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The x position of the title relative to the alignment within chart.spacingLeft\nand chart.spacingRight."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The y position of the title relative to the alignment within [chart.spacingTop](#chart.\nspacingTop) and [chart.spacingBottom](#chart.spacingBottom). By default\nit depends on the font size."
          },
          "subtree": {}
        }
      }
    },
    "subtitle": {
      "meta": {
        "types": {},
        "name": "subtitle",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "The chart's subtitle"
      },
      "subtree": {
        "text": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "text",
            "excludes": {},
            "default": "",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The subtitle of the chart."
          },
          "subtree": {}
        },
        "align": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "align",
            "excludes": {},
            "default": "center",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The horizontal alignment of the subtitle. Can be one of \"left\", \"center\"\nand \"right\".",
            "enumValues": [
              "left",
              "center",
              "right"
            ]
          },
          "subtree": {}
        },
        "widthAdjust": {
          "meta": {
            "types": {},
            "name": "widthAdjust",
            "excludes": {}
          },
          "subtree": {}
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When the subtitle is floating, the plot area will not move to make space\nfor it."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#666666\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the title.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the subtitle style is given in the `.highcharts-subtitle` class."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the text."
          },
          "subtree": {}
        },
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The vertical alignment of the title. Can be one of \"top\", \"middle\" and\n\"bottom\". When a value is given, the title behaves as floating.",
            "enumValues": [
              "top",
              "middle",
              "bottom"
            ]
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The x position of the subtitle relative to the alignment within chart.\nspacingLeft and chart.spacingRight."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The y position of the subtitle relative to the alignment within chart.\nspacingTop and chart.spacingBottom. By default the subtitle is laid out\nbelow the title unless the title is floating."
          },
          "subtree": {}
        }
      }
    },
    "labels": {
      "meta": {
        "types": {},
        "name": "labels",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "HTML labels that can be positioned anywhere in the chart area."
      },
      "subtree": {
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#333333\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Shared CSS styles for all labels."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {},
                "name": "position",
                "excludes": {},
                "default": "absolute"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor80}"
              },
              "subtree": {}
            }
          }
        },
        "items": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "items",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A HTML label that can be positioned anywhere in the chart area."
          },
          "subtree": {
            "html": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "html",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Inner HTML or text for the label."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "CSS styles for each label. To position the label, use left and top like\nthis:\n\n<pre>style: { \tleft: '100px', \ttop: '100px' }</pre>"
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "legend": {
      "meta": {
        "types": {},
        "name": "legend",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "The legend is a box containing a symbol and name for each series item\nor point item in the chart. Each series (or points in case of pie charts)\nis represented by a symbol and its name in the legend.\n\nIt is also possible to override the symbol creator function and create\n[custom legend symbols](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/studies/legend-\ncustom-symbol/)."
      },
      "subtree": {
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Enable or disable the legend."
          },
          "subtree": {}
        },
        "align": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "align",
            "excludes": {},
            "default": "center",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The horizontal alignment of the legend box within the chart area. Valid\nvalues are `left`, `center` and `right`.\n\nIn the case that the legend is aligned in a corner position, the `layout`\noption will determine whether to place it above/below or on the side\nof the plot area.",
            "enumValues": [
              "left",
              "center",
              "right"
            ]
          },
          "subtree": {}
        },
        "layout": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "layout",
            "excludes": {},
            "default": "horizontal",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The layout of the legend items. Can be one of \"horizontal\" or \"vertical\".",
            "enumValues": [
              "horizontal",
              "vertical"
            ]
          },
          "subtree": {}
        },
        "labelFormatter": {
          "meta": {
            "types": {},
            "name": "labelFormatter",
            "excludes": {}
          },
          "subtree": {}
        },
        "borderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "borderColor",
            "excludes": {},
            "default": "#999999",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The color of the drawn border around the legend."
          },
          "subtree": {}
        },
        "borderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The border corner radius of the legend."
          },
          "subtree": {}
        },
        "navigation": {
          "meta": {
            "types": {},
            "name": "navigation",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Options for the paging or navigation appearing when the legend is overflown.\nNavigation works well on screen, but not in static exported images.\nOne way of working around that is to [increase the chart height in\nexport](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/legend/navigation-\nenabled-false/)."
          },
          "subtree": {
            "activeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "activeColor",
                "excludes": {},
                "default": "#003399",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The color for the active up or down arrow in the legend page navigation."
              },
              "subtree": {}
            },
            "inactiveColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "inactiveColor",
                "excludes": {},
                "default": "#cccccc",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The color of the inactive up or down arrow in the legend page navigation.\n ."
              },
              "subtree": {}
            },
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "animation",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "How to animate the pages when navigating up or down. A value of `true`\napplies the default navigation given in the chart.animation option. Additional\noptions can be given as an object containing values for easing and duration.\n ."
              },
              "subtree": {}
            },
            "arrowSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "arrowSize",
                "excludes": {},
                "default": "12",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The pixel size of the up and down arrows in the legend paging navigation.\n ."
              },
              "subtree": {}
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Whether to enable the legend navigation. In most cases, disabling the\nnavigation results in an unwanted overflow.\n\nSee also the [adapt chart to legend](http://www.highcharts.com/plugin-\nregistry/single/8/Adapt-Chart-To-Legend) plugin for a solution to extend\nthe chart height to make room for the legend, optionally in exported charts\nonly."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Text styles for the legend page navigation."
              },
              "subtree": {}
            }
          }
        },
        "itemStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "itemStyle",
            "excludes": {},
            "default": "{ \"color\": \"#333333\", \"cursor\": \"pointer\", \"fontSize\": \"12px\", \"fontWeight\": \"bold\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for each legend item. Only a subset of CSS is supported,\nnotably those options related to text."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor80}"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {},
                "name": "fontSize",
                "excludes": {},
                "default": "12px"
              },
              "subtree": {}
            },
            "fontWeight": {
              "meta": {
                "types": {},
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            }
          }
        },
        "itemHoverStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "itemHoverStyle",
            "excludes": {},
            "default": "{ \"color\": \"#000000\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for each legend item in hover mode. Only a subset of CSS\nis supported, notably those options related to text. Properties are\ninherited from `style` unless overridden here."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor100}"
              },
              "subtree": {}
            }
          }
        },
        "itemHiddenStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "itemHiddenStyle",
            "excludes": {},
            "default": "{ \"color\": \"#cccccc\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for each legend item when the corresponding series or point\nis hidden. Only a subset of CSS is supported, notably those options\nrelated to text. Properties are inherited from `style` unless overridden\nhere."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor20}"
              },
              "subtree": {}
            }
          }
        },
        "shadow": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "shadow",
            "excludes": {},
            "default": false,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to apply a drop shadow to the legend. A `backgroundColor` also\nneeds to be applied for this to take effect. Since 2.3 the shadow can\nbe an object configuration containing `color`, `offsetX`, `offsetY`,\n `opacity` and `width`."
          },
          "subtree": {}
        },
        "itemCheckboxStyle": {
          "meta": {
            "types": {},
            "name": "itemCheckboxStyle",
            "excludes": {}
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {},
                "name": "position",
                "excludes": {},
                "default": "absolute"
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {},
                "name": "width",
                "excludes": {},
                "default": "13px"
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {},
                "name": "height",
                "excludes": {},
                "default": "13px"
              },
              "subtree": {}
            }
          }
        },
        "squareSymbol": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "squareSymbol",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When this is true, the legend symbol width will be the same as the symbol\nheight, which in turn defaults to the font size of the legend items."
          },
          "subtree": {}
        },
        "symbolPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolPadding",
            "excludes": {},
            "default": "5",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel padding between the legend item symbol and the legend item\ntext."
          },
          "subtree": {}
        },
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "default": "bottom",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The vertical alignment of the legend box. Can be one of `top`, `middle`\nor `bottom`. Vertical position can be further determined by the `y`\noption.\n\nIn the case that the legend is aligned in a corner position, the `layout`\noption will determine whether to place it above/below or on the side\nof the plot area.",
            "enumValues": [
              "top",
              "middle",
              "bottom"
            ]
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The x offset of the legend relative to its horizontal alignment `align`\nwithin chart.spacingLeft and chart.spacingRight. Negative x moves it\nto the left, positive x moves it to the right."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The vertical offset of the legend relative to it's vertical alignment\n`verticalAlign` within chart.spacingTop and chart.spacingBottom. Negative\ny moves it up, positive y moves it down."
          },
          "subtree": {}
        },
        "title": {
          "meta": {
            "types": {},
            "name": "title",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A title to be added on top of the legend."
          },
          "subtree": {
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{\"fontWeight\":\"bold\"}",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Generic CSS styles for the legend title."
              },
              "subtree": {
                "fontWeight": {
                  "meta": {
                    "types": {},
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                }
              }
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A text or HTML string for the title."
              },
              "subtree": {}
            }
          }
        },
        "backgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "backgroundColor",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The background color of the legend."
          },
          "subtree": {}
        },
        "borderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The width of the drawn border around the legend."
          },
          "subtree": {}
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "When the legend is floating, the plot area ignores it and is allowed to\nbe placed below it."
          },
          "subtree": {}
        },
        "itemDistance": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemDistance",
            "excludes": {},
            "default": "20",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "In a legend with horizontal layout, the itemDistance defines the pixel\ndistance between each item."
          },
          "subtree": {}
        },
        "itemMarginBottom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemMarginBottom",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel bottom margin for each legend item."
          },
          "subtree": {}
        },
        "itemMarginTop": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemMarginTop",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel top margin for each legend item."
          },
          "subtree": {}
        },
        "itemWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemWidth",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The width for each legend item. This is useful in a horizontal layout\nwith many items when you want the items to align vertically. ."
          },
          "subtree": {}
        },
        "labelFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "labelFormat",
            "excludes": {},
            "default": "{name}",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) for each legend label. Available variables relates\nto properties on the series, or the point in case of pies."
          },
          "subtree": {}
        },
        "lineHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineHeight",
            "excludes": {},
            "default": "16",
            "products": {
              "highcharts": 1
            },
            "description": "Line height for the legend items. Deprecated as of 2.1\\. Instead, the\nline height for each item can be set using itemStyle.lineHeight, and the\npadding between items using itemMarginTop and itemMarginBottom."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": "12",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "If the plot area sized is calculated automatically and the legend is not\nfloating, the legend margin is the space between the legend and the axis\nlabels or plot area."
          },
          "subtree": {}
        },
        "maxHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxHeight",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Maximum pixel height for the legend. When the maximum height is extended,\n navigation will show."
          },
          "subtree": {}
        },
        "padding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "padding",
            "excludes": {},
            "default": "8",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The inner padding of the legend box."
          },
          "subtree": {}
        },
        "reversed": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversed",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to reverse the order of the legend items compared to the order\nof the series or points as defined in the configuration object."
          },
          "subtree": {}
        },
        "rtl": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "rtl",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Whether to show the symbol on the right side of the text rather than the\nleft side. This is common in Arabic and Hebraic."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "CSS styles for the legend area. In the 1.x versions the position of the\nlegend area was determined by CSS. In 2.x, the position is determined\nby properties like `align`, `verticalAlign`, `x` and `y`, but the styles\nare still parsed for backwards compatibility."
          },
          "subtree": {}
        },
        "symbolHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolHeight",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel height of the symbol for series types that use a rectangle in\nthe legend. Defaults to the font size of legend items."
          },
          "subtree": {}
        },
        "symbolRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolRadius",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The border radius of the symbol for series types that use a rectangle\nin the legend. Defaults to half the `symbolHeight`."
          },
          "subtree": {}
        },
        "symbolWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolWidth",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of the legend item symbol. When the `squareSymbol` option\nis set, this defaults to the `symbolHeight`, otherwise 16."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the legend item texts. Prior to\n4.1.7, when using HTML, [legend.navigation](#legend.navigation) was disabled."
          },
          "subtree": {}
        },
        "width": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "width",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The width of the legend box."
          },
          "subtree": {}
        }
      }
    },
    "loading": {
      "meta": {
        "types": {},
        "name": "loading",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "The loading options control the appearance of the loading screen that\ncovers the plot area on chart operations. This screen only appears after\nan explicit call to `chart.showLoading()`. It is a utility for developers\nto communicate to the end user that something is going on, for example\nwhile retrieving new data via an XHR connection. The \"Loading...\" text\nitself is not part of this configuration object, but part of the `lang`\nobject."
      },
      "subtree": {
        "labelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "labelStyle",
            "excludes": {},
            "default": "{ \"fontWeight\": \"bold\", \"position\": \"relative\", \"top\": \"45%\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the loading label `span`."
          },
          "subtree": {
            "fontWeight": {
              "meta": {
                "types": {},
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "position": {
              "meta": {
                "types": {},
                "name": "position",
                "excludes": {},
                "default": "relative"
              },
              "subtree": {}
            },
            "top": {
              "meta": {
                "types": {},
                "name": "top",
                "excludes": {},
                "default": "45%"
              },
              "subtree": {}
            }
          }
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"position\": \"absolute\", \"backgroundColor\": \"#ffffff\", \"opacity\": 0.5, \"textAlign\": \"center\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the loading screen that covers the plot area."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {},
                "name": "position",
                "excludes": {},
                "default": "absolute"
              },
              "subtree": {}
            },
            "backgroundColor": {
              "meta": {
                "types": {},
                "name": "backgroundColor",
                "excludes": {},
                "default": "${palette.backgroundColor}"
              },
              "subtree": {}
            },
            "opacity": {
              "meta": {
                "types": {},
                "name": "opacity",
                "excludes": {},
                "default": 0.5
              },
              "subtree": {}
            },
            "textAlign": {
              "meta": {
                "types": {},
                "name": "textAlign",
                "excludes": {},
                "default": "center"
              },
              "subtree": {}
            }
          }
        },
        "hideDuration": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "hideDuration",
            "excludes": {},
            "default": "100",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The duration in milliseconds of the fade out effect."
          },
          "subtree": {}
        },
        "showDuration": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "showDuration",
            "excludes": {},
            "default": "100",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The duration in milliseconds of the fade in effect."
          },
          "subtree": {}
        }
      }
    },
    "tooltip": {
      "meta": {
        "types": {},
        "name": "tooltip",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Options for the tooltip that appears when the user hovers over a series\nor point."
      },
      "subtree": {
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Enable or disable the tooltip."
          },
          "subtree": {}
        },
        "animation": {
          "meta": {
            "types": {},
            "name": "animation",
            "excludes": {}
          },
          "subtree": {}
        },
        "borderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderRadius",
            "excludes": {},
            "default": "3",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The radius of the rounded border corners."
          },
          "subtree": {}
        },
        "dateTimeLabelFormats": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "dateTimeLabelFormats",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "For series on a datetime axes, the date format in the tooltip's header\nwill by default be guessed based on the closest data points. This member\ngives the default string representations used for each unit. For an\noverview of the replacement codes, see [dateFormat](#Highcharts.dateFormat).\n\n\nDefaults to:\n\n<pre>{     millisecond:\"%A, %b %e, %H:%M:%S.%L\",     second:\"%A, %b\n%e, %H:%M:%S\",     minute:\"%A, %b %e, %H:%M\",     hour:\"%A, %b %e, %H:%M\",\nday:\"%A, %b %e, %Y\",     week:\"Week from %A, %b %e, %Y\",     month:\"%B\n%Y\",     year:\"%Y\" }</pre>"
          },
          "subtree": {
            "millisecond": {
              "meta": {
                "types": {},
                "name": "millisecond",
                "excludes": {},
                "default": "%A, %b %e, %H:%M:%S.%L"
              },
              "subtree": {}
            },
            "second": {
              "meta": {
                "types": {},
                "name": "second",
                "excludes": {},
                "default": "%A, %b %e, %H:%M:%S"
              },
              "subtree": {}
            },
            "minute": {
              "meta": {
                "types": {},
                "name": "minute",
                "excludes": {},
                "default": "%A, %b %e, %H:%M"
              },
              "subtree": {}
            },
            "hour": {
              "meta": {
                "types": {},
                "name": "hour",
                "excludes": {},
                "default": "%A, %b %e, %H:%M"
              },
              "subtree": {}
            },
            "day": {
              "meta": {
                "types": {},
                "name": "day",
                "excludes": {},
                "default": "%A, %b %e, %Y"
              },
              "subtree": {}
            },
            "week": {
              "meta": {
                "types": {},
                "name": "week",
                "excludes": {},
                "default": "Week from %A, %b %e, %Y"
              },
              "subtree": {}
            },
            "month": {
              "meta": {
                "types": {},
                "name": "month",
                "excludes": {},
                "default": "%B %Y"
              },
              "subtree": {}
            },
            "year": {
              "meta": {
                "types": {},
                "name": "year",
                "excludes": {},
                "default": "%Y"
              },
              "subtree": {}
            }
          }
        },
        "footerFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "footerFormat",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "A string to append to the tooltip format."
          },
          "subtree": {}
        },
        "padding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "padding",
            "excludes": {},
            "default": "8",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Padding inside the tooltip, in pixels."
          },
          "subtree": {}
        },
        "snap": {
          "meta": {
            "types": {},
            "name": "snap",
            "excludes": {}
          },
          "subtree": {}
        },
        "headerFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "headerFormat",
            "excludes": {},
            "default": "<span style=\"font-size: 10px\">{point.key}</span><br/>",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The HTML of the tooltip header line. Variables are enclosed by curly\nbrackets. Available variables are `point.key`, `series.name`, `series.\ncolor` and other members from the `point` and `series` objects. The\n`point.key` variable contains the category name, x value or datetime\nstring depending on the type of axis. For datetime axes, the `point.\nkey` date format can be set using tooltip.xDateFormat.\n\nDefaults to `<span style=\"font-size: 10px\">{point.key}</span><br/>`"
          },
          "subtree": {}
        },
        "pointFormat": {
          "meta": {
            "types": {},
            "name": "pointFormat",
            "excludes": {},
            "default": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>"
          },
          "subtree": {}
        },
        "backgroundColor": {
          "meta": {
            "types": {},
            "name": "backgroundColor",
            "excludes": {}
          },
          "subtree": {}
        },
        "borderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The pixel width of the tooltip border.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the stroke width is set in the `.highcharts-tooltip-box` class."
          },
          "subtree": {}
        },
        "shadow": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "shadow",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to apply a drop shadow to the tooltip."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#333333\", \"cursor\": \"default\", \"fontSize\": \"12px\", \"pointerEvents\": \"none\", \"whiteSpace\": \"nowrap\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the tooltip. The tooltip can also be styled through the\nCSS class `.highcharts-tooltip`."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor80}"
              },
              "subtree": {}
            },
            "cursor": {
              "meta": {
                "types": {},
                "name": "cursor",
                "excludes": {},
                "default": "default"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {},
                "name": "fontSize",
                "excludes": {},
                "default": "12px"
              },
              "subtree": {}
            },
            "pointerEvents": {
              "meta": {
                "types": {},
                "name": "pointerEvents",
                "excludes": {},
                "default": "none"
              },
              "subtree": {}
            },
            "whiteSpace": {
              "meta": {
                "types": {},
                "name": "whiteSpace",
                "excludes": {},
                "default": "nowrap"
              },
              "subtree": {}
            }
          }
        },
        "borderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "borderColor",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The color of the tooltip border. When `null`, the border takes the color\nof the corresponding series or point."
          },
          "subtree": {}
        },
        "crosshairs": {
          "meta": {
            "types": {
              "mixed": 1
            },
            "name": "crosshairs",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Since 4.1, the crosshair definitions are moved to the Axis object in order\nfor a better separation from the tooltip. See [xAxis.crosshair](#xAxis.\ncrosshair)<a>.</a>"
          },
          "subtree": {}
        },
        "followPointer": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "followPointer",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether the tooltip should follow the mouse as it moves across columns,\npie slices and other point types with an extent. By default it behaves\nthis way for scatter, bubble and pie series by override in the `plotOptions`\nfor those series types.\n\nFor touch moves to behave the same way, [followTouchMove](#tooltip.followTouchMove)\nmust be `true` also."
          },
          "subtree": {}
        },
        "followTouchMove": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "followTouchMove",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether the tooltip should follow the finger as it moves on a touch device.\nIf this is `true` and [chart.panning](#chart.panning) is set,`followTouchMove`\nwill take over one-finger touches, so the user needs to use two fingers\nfor zooming and panning."
          },
          "subtree": {}
        },
        "hideDelay": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "hideDelay",
            "excludes": {},
            "default": "500",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The number of milliseconds to wait until the tooltip is hidden when mouse\nout from a point or chart."
          },
          "subtree": {}
        },
        "shape": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "shape",
            "excludes": {},
            "default": "callout",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The name of a symbol to use for the border around the tooltip. In Highcharts\n3.x and less, the shape was `square`."
          },
          "subtree": {}
        },
        "shared": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "shared",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When the tooltip is shared, the entire plot area will capture mouse movement\nor touch events. Tooltip texts for series types with ordered data (not\npie, scatter, flags etc) will be shown in a single bubble. This is recommended\nfor single series charts and for tablet/mobile optimized charts.\n\nSee also [tooltip.split](#tooltip.split), that is better suited for charts\nwith many series, especially line-type series."
          },
          "subtree": {}
        },
        "split": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "split",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Split the tooltip into one label per series, with the header close to\nthe axis. This is recommended over [shared](#tooltip.shared) tooltips\nfor charts with multiple line series, generally making them easier to\nread."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Use HTML to render the contents of the tooltip instead of SVG. Using HTML\nallows advanced formatting like tables and images in the tooltip. It is\nalso recommended for rtl languages as it works around rtl bugs in early\nFirefox."
          },
          "subtree": {}
        },
        "valueDecimals": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "valueDecimals",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "How many decimals to show in each series' y value. This is overridable\nin each series' tooltip options object. The default is to preserve all\ndecimals."
          },
          "subtree": {}
        },
        "valuePrefix": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "valuePrefix",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A string to prepend to each series' y value. Overridable in each series'\ntooltip options object."
          },
          "subtree": {}
        },
        "valueSuffix": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "valueSuffix",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A string to append to each series' y value. Overridable in each series'\ntooltip options object."
          },
          "subtree": {}
        },
        "xDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "xDateFormat",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The format for the date in the tooltip header if the X axis is a datetime\naxis. The default is a best guess based on the smallest distance between\npoints in the chart."
          },
          "subtree": {}
        },
        "changeDecimals": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "changeDecimals",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "How many decimals to show for the `point.change` value when the `series.\ncompare` option is set. This is overridable in each series' tooltip options\nobject. The default is to preserve all decimals."
          },
          "subtree": {}
        }
      }
    },
    "credits": {
      "meta": {
        "types": {},
        "name": "credits",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Highchart by default puts a credits label in the lower right corner of\nthe chart. This can be changed using these options."
      },
      "subtree": {
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Whether to show the credits text."
          },
          "subtree": {}
        },
        "href": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "href",
            "excludes": {},
            "default": "http://www.highcharts.com",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The URL for the credits label."
          },
          "subtree": {}
        },
        "position": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "position",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "Position configuration for the credits label."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "default": "right",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Horizontal alignment of the credits.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {},
                "name": "x",
                "excludes": {}
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "bottom",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Vertical alignment of the credits.",
                "enumValues": [
                  "top",
                  "middle",
                  "bottom"
                ]
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {},
                "name": "y",
                "excludes": {}
              },
              "subtree": {}
            }
          }
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"cursor\": \"pointer\", \"color\": \"#999999\", \"fontSize\": \"10px\" }",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "CSS styles for the credits label."
          },
          "subtree": {
            "cursor": {
              "meta": {
                "types": {},
                "name": "cursor",
                "excludes": {},
                "default": "pointer"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor40}"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {},
                "name": "fontSize",
                "excludes": {},
                "default": "9px"
              },
              "subtree": {}
            }
          }
        },
        "text": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "text",
            "excludes": {},
            "default": "Highcharts.com",
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The text for the credits label."
          },
          "subtree": {}
        },
        "mapText": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "mapText",
            "excludes": {},
            "default": "\\u00a9 <a href=\"{geojson.copyrightUrl}\">{geojson.copyrightShort}</a>",
            "products": {
              "highmaps": 1
            },
            "description": "Credits for map source to be concatenated with conventional credit text.\nBy default this is a format string that collects copyright information\nfrom the map if available."
          },
          "subtree": {}
        },
        "mapTextFull": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "mapTextFull",
            "excludes": {},
            "default": "{geojson.copyright}",
            "products": {
              "highmaps": 1
            },
            "description": "Detailed credits for map source to be displayed on hover of credits text.\nBy default this is a format string that collects copyright information\nfrom the map if available."
          },
          "subtree": {}
        }
      }
    },
    "rangeSelector": {
      "meta": {
        "types": {},
        "name": "rangeSelector",
        "excludes": {},
        "products": {
          "highstock": 1
        },
        "description": "The range selector is a tool for selecting ranges to display within the\nchart. It provides buttons to select preconfigured ranges in the chart,\nlike 1 day, 1 week, 1 month etc. It also provides input boxes where\nmin and max dates can be manually input."
      },
      "subtree": {
        "buttonTheme": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonTheme",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "A collection of attributes for the buttons. The object takes SVG attributes\nlike `fill`, `stroke`, `stroke-width`, as well as `style`, a collection\nof CSS properties for the text.\n\nThe object can also be extended with states, so you can set presentational\noptions for `hover`, `select` or `disabled` button states.\n\nCSS styles for the text label.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the buttons are styled by the `.highcharts-range-selector-buttons\n.highcharts-button` rule with its different states."
          },
          "subtree": {
            "undefined": {
              "meta": {
                "types": {},
                "name": "undefined",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {},
                "name": "width",
                "excludes": {},
                "default": 28
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {},
                "name": "height",
                "excludes": {},
                "default": 18
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {},
                "name": "padding",
                "excludes": {},
                "default": 2
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {},
                "name": "zIndex",
                "excludes": {},
                "default": 7
              },
              "subtree": {}
            }
          }
        },
        "height": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "height",
            "excludes": {},
            "default": "35",
            "products": {
              "highstock": 1
            },
            "description": "The height of the range selector, used to reserve space for buttons\nand input."
          },
          "subtree": {}
        },
        "inputPosition": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "inputPosition",
            "excludes": {},
            "default": "{ align: \"right\" }",
            "products": {
              "highstock": 1
            },
            "description": "Positioning for the input boxes. Allowed properties are `align`, `verticalAlign`,\n `x` and `y`."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {},
                "name": "align",
                "excludes": {},
                "default": "right"
              },
              "subtree": {}
            }
          }
        },
        "labelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "labelStyle",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "CSS styles for the labels - the Zoom, From and To texts.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the labels are styled by the `.highcharts-range-label` class."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {},
                "name": "color",
                "excludes": {},
                "default": "${palette.neutralColor60}"
              },
              "subtree": {}
            }
          }
        },
        "allButtonsEnabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allButtonsEnabled",
            "excludes": {},
            "default": "false",
            "products": {
              "highstock": 1
            },
            "description": "Whether to enable all buttons from the start. By default buttons are only\nenabled if the corresponding time range exists on the X axis, but enabling\nall buttons allows for dynamically loading different time ranges."
          },
          "subtree": {}
        },
        "buttonPosition": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonPosition",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "A fixed pixel position for the buttons. Supports two properties, `x` and\n`y`.``"
          },
          "subtree": {}
        },
        "buttonSpacing": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "buttonSpacing",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The space in pixels between the buttons in the range selector."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the range selector."
          },
          "subtree": {}
        },
        "inputBoxBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "inputBoxBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The border color of the date input boxes."
          },
          "subtree": {}
        },
        "inputBoxHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "inputBoxHeight",
            "excludes": {},
            "default": "17",
            "products": {
              "highstock": 1
            },
            "description": "The pixel height of the date input boxes."
          },
          "subtree": {}
        },
        "inputBoxStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "inputBoxStyle",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "CSS for the container DIV holding the input boxes. Deprecated as of 1.\n2.5\\. Use [inputPosition](#rangeSelector.inputPosition) instead."
          },
          "subtree": {}
        },
        "inputBoxWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "inputBoxWidth",
            "excludes": {},
            "default": "90",
            "products": {
              "highstock": 1
            },
            "description": "The pixel width of the date input boxes."
          },
          "subtree": {}
        },
        "inputDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "inputDateFormat",
            "excludes": {},
            "default": "%b %e %Y,",
            "products": {
              "highstock": 1
            },
            "description": "The date format in the input boxes when not selected for editing. Defaults\nto `%b %e, %Y`."
          },
          "subtree": {}
        },
        "inputEditDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "inputEditDateFormat",
            "excludes": {},
            "default": "%Y-%m-%d",
            "products": {
              "highstock": 1
            },
            "description": "The date format in the input boxes when they are selected for editing.\n This must be a format that is recognized by JavaScript Date.parse."
          },
          "subtree": {}
        },
        "inputEnabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "inputEnabled",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the date input boxes. Defaults to enabled when there\nis enough space, disabled if not (typically mobile)."
          },
          "subtree": {}
        },
        "inputStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "inputStyle",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "CSS for the HTML inputs in the range selector.\n\nIn [styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css), the inputs are styled by the `.highcharts-range-input text` rule\nin SVG mode, and `input.highcharts-range-selector` when active."
          },
          "subtree": {}
        },
        "selected": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "selected",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highstock": 1
            },
            "description": "The index of the button to appear pre-selected."
          },
          "subtree": {}
        },
        "buttons": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "buttons",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "An array of configuration objects for the buttons.\n\nDefaults to\n\n<pre>buttons: [{ \ttype: 'month', \tcount: 1, \ttext: '1m' }, { \ttype: 'month',\ncount: 3, \ttext: '3m' }, { \ttype: 'month', \tcount: 6, \ttext: '6m' },\n{ \ttype: 'ytd', \ttext: 'YTD' }, { \ttype: 'year', \tcount: 1, \ttext: '1y'\n}, { \ttype: 'all', \ttext: 'All' }]</pre>"
          },
          "subtree": {
            "count": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "count",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "How many units of the defined type the button should span. If `type` is\n\"month\" and `count` is 3, the button spans three months."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "A custom data grouping object for each button."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The text for the button itself."
              },
              "subtree": {}
            },
            "type": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "type",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Defined the time span for the button. Can be one of `\"millisecond\", \"second\",\n \"minute\", \"hour\", \"day\", \"week\", \"month\", \"ytd\", \"all\"`.",
                "enumValues": [
                  "millisecond",
                  "second",
                  "minute",
                  "day",
                  "week",
                  "month",
                  "ytd",
                  "all"
                ]
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "scrollbar": {
      "meta": {
        "types": {},
        "name": "scrollbar",
        "excludes": {}
      },
      "subtree": {
        "height": {
          "meta": {
            "types": {},
            "name": "height",
            "excludes": {}
          },
          "subtree": {}
        },
        "barBorderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "barBorderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The border rounding radius of the bar."
          },
          "subtree": {}
        },
        "buttonBorderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "buttonBorderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The corner radius of the scrollbar buttons."
          },
          "subtree": {}
        },
        "liveRedraw": {
          "meta": {
            "types": {},
            "name": "liveRedraw",
            "excludes": {}
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {},
            "name": "margin",
            "excludes": {},
            "default": 10
          },
          "subtree": {}
        },
        "minWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minWidth",
            "excludes": {},
            "default": "6",
            "products": {
              "highstock": 1
            },
            "description": "The minimum width of the scrollbar."
          },
          "subtree": {}
        },
        "step": {
          "meta": {
            "types": {},
            "name": "step",
            "excludes": {},
            "default": 0.2
          },
          "subtree": {}
        },
        "zIndex": {
          "meta": {
            "types": {},
            "name": "zIndex",
            "excludes": {},
            "default": 3
          },
          "subtree": {}
        },
        "barBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "barBackgroundColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The background color of the scrollbar itself."
          },
          "subtree": {}
        },
        "barBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "barBorderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highstock": 1
            },
            "description": "The width of the bar's border."
          },
          "subtree": {}
        },
        "barBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "barBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The color of the scrollbar's border."
          },
          "subtree": {}
        },
        "buttonArrowColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "buttonArrowColor",
            "excludes": {},
            "default": "#333333",
            "products": {
              "highstock": 1
            },
            "description": "The color of the small arrow inside the scrollbar buttons."
          },
          "subtree": {}
        },
        "buttonBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "buttonBackgroundColor",
            "excludes": {},
            "default": "#e6e6e6",
            "products": {
              "highstock": 1
            },
            "description": "The color of scrollbar buttons."
          },
          "subtree": {}
        },
        "buttonBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "buttonBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The color of the border of the scrollbar buttons."
          },
          "subtree": {}
        },
        "buttonBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "buttonBorderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highstock": 1
            },
            "description": "The border width of the scrollbar buttons."
          },
          "subtree": {}
        },
        "rifleColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "rifleColor",
            "excludes": {},
            "default": "#333333",
            "products": {
              "highstock": 1
            },
            "description": "The color of the small rifles in the middle of the scrollbar."
          },
          "subtree": {}
        },
        "trackBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "trackBackgroundColor",
            "excludes": {},
            "default": "#f2f2f2",
            "products": {
              "highstock": 1
            },
            "description": "The color of the track background."
          },
          "subtree": {}
        },
        "trackBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "trackBorderColor",
            "excludes": {},
            "default": "#f2f2f2",
            "products": {
              "highstock": 1
            },
            "description": "The color of the border of the scrollbar track."
          },
          "subtree": {}
        },
        "trackBorderWidth": {
          "meta": {
            "types": {},
            "name": "trackBorderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highstock": 1
            },
            "description": "The width of the border of the scrollbar track."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the scrollbar."
          },
          "subtree": {}
        },
        "showFull": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showFull",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether to show or hide the scrollbar when the scrolled content is zoomed\nout to it full extent."
          },
          "subtree": {}
        },
        "trackBorderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "trackBorderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The corner radius of the border of the scrollbar track."
          },
          "subtree": {}
        }
      }
    },
    "defs": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "defs",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "[Styled mode](http://www.highcharts.com/docs/chart-design-and-style/style-\nby-css) only. Configuration object for adding SVG definitions for reusable\nelements. See [gradients, shadows and patterns](http://www.highcharts.\ncom/docs/chart-design-and-style/gradients-shadows-and-patterns) for more\ninformation and code examples."
      },
      "subtree": {}
    },
    "pane": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "pane",
        "excludes": {},
        "products": {
          "highcharts": 1
        },
        "description": "Applies only to polar charts and angular gauges. This configuration object\nholds general options for the combined X and Y axes set. Each xAxis or\nyAxis can reference the pane by index."
      },
      "subtree": {
        "background": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "background",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "An object, or array of objects, for backgrounds. Sub options include `backgroundColor`\n(can be solid or gradient), `shape` (\"solid\" or \"arc\"), `innerWidth`,\n`outerWidth`, `borderWidth`, `borderColor`."
          },
          "subtree": {
            "backgroundColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "backgroundColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The background color or gradient for the pane."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#cccccc",
                "products": {
                  "highcharts": 1
                },
                "description": "The pane background border color."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The pixel border width of the pane background."
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "default": "highcharts-pane",
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "The class name for this background."
              },
              "subtree": {}
            },
            "innerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "innerRadius",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The inner radius of the pane background. Can be either numeric (pixels)\nor a percentage string."
              },
              "subtree": {}
            },
            "outerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "outerRadius",
                "excludes": {},
                "default": "105%",
                "products": {
                  "highcharts": 1
                },
                "description": "The outer radius of the circular pane background. Can be either numeric\n(pixels) or a percentage string."
              },
              "subtree": {}
            },
            "shape": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "shape",
                "excludes": {},
                "default": "solid",
                "products": {
                  "highcharts": 1
                },
                "description": "Tha shape of the pane background. When `solid`, the background is circular.\nWhen `arc`, the background extends only from the min to the max of the\nvalue axis.",
                "enumValues": [
                  "solid",
                  "arc"
                ]
              },
              "subtree": {}
            }
          }
        },
        "center": {
          "meta": {
            "types": {
              "array": "(String|Number)"
            },
            "name": "center",
            "excludes": {},
            "default": "[\"50%\", \"50%\"]",
            "products": {
              "highcharts": 1
            },
            "description": "The center of a polar chart or angular gauge, given as an array of [x,\ny] positions. Positions can be given as integers that transform to pixels,\n or as percentages of the plot area size."
          },
          "subtree": {}
        },
        "endAngle": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "endAngle",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "The end angle of the polar X axis or gauge value axis, given in degrees\nwhere 0 is north. Defaults to [startAngle](#pane.startAngle) + 360."
          },
          "subtree": {}
        },
        "size": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "size",
            "excludes": {},
            "default": "85%",
            "products": {
              "highcharts": 1
            },
            "description": "The size of the pane, either as a number defining pixels, or a percentage\ndefining a percentage of the plot are."
          },
          "subtree": {}
        },
        "startAngle": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "startAngle",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "The start angle of the polar X axis or gauge axis, given in degrees where\n0 is north. Defaults to 0."
          },
          "subtree": {}
        }
      }
    },
    "responsive": {
      "meta": {
        "types": {},
        "name": "responsive",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "Allows setting a set of rules to apply for different screen or chart sizes.\n Each rule specifies additional chart options."
      },
      "subtree": {
        "rules": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "rules",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "A set of rules for responsive settings. The rules are executed from the\ntop down."
          },
          "subtree": {
            "chartOptions": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "chartOptions",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "A full set of chart options to apply as overrides to the general chart\noptions. The chart options are applied when the given rule is active.\n\nA special case is configuration objects that take arrays, for example\n[xAxis](#xAxis), [yAxis](#yAxis) or [series](#series). For these collections,\nan `id` option is used to map the new option set to an existing object.\nIf an existing object of the same id is not found, the item of the same\nindexupdated. So for example, setting `chartOptions` with two series items\nwithout an `id`, will cause the existing chart's two series to be updated\nwith respective options."
              },
              "subtree": {}
            },
            "condition": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "condition",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Under which conditions the rule applies."
              },
              "subtree": {
                "maxHeight": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "maxHeight",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The responsive rule applies if the chart height is less than this."
                  },
                  "subtree": {}
                },
                "maxWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "maxWidth",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The responsive rule applies if the chart width is less than this."
                  },
                  "subtree": {}
                },
                "minHeight": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "minHeight",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The responsive rule applies if the chart height is greater than this."
                  },
                  "subtree": {}
                },
                "minWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "minWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1,
                      "highmaps": 1
                    },
                    "description": "The responsive rule applies if the chart width is greater than this."
                  },
                  "subtree": {}
                }
              }
            }
          }
        }
      }
    },
    "series": {
      "meta": {
        "types": {
          "array": "series"
        },
        "name": "series",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1,
          "highmaps": 1
        },
        "description": "The actual series to append to the chart. In addition to the members listed\nbelow, any member of the `plotOptions` for that specific type of plot\ncan be added to a series individually. For example, even though a general\n`lineWidth` is specified in `plotOptions.series`, an individual `lineWidth`\ncan be specified for each series.",
        "extends": ",plotOptions.series,plotOptions.area,plotOptions.arearange,plotOptions.areaspline,plotOptions.areasplinerange,plotOptions.bar,plotOptions.boxplot,plotOptions.bubble,plotOptions.column,plotOptions.columnrange,plotOptions.errorbar,plotOptions.funnel,plotOptions.gauge,plotOptions.heatmap,plotOptions.polygon,plotOptions.pyramid,plotOptions.scatter,plotOptions.solidgauge,plotOptions.spline,plotOptions.candlestick,plotOptions.flags,plotOptions.ohlc,plotOptions.mapline"
      },
      "subtree": {
        "dataURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "dataURL",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "This method is deprecated as of version 2.0\\. Instead, load the data using\njQuery.ajax and use options preprocessing as described in [the docs](http://docs.\nhighcharts.com/#preprocessing)."
          },
          "subtree": {}
        },
        "id": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "id",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "An id for the series. This can be used after render time to get a pointer\nto the series object through `chart.get()`."
          },
          "subtree": {}
        },
        "index": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "index",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The index of the series in the chart, affecting the internal index in\nthe `chart.series` array, the visible Z index as well as the order in\nthe legend."
          },
          "subtree": {}
        },
        "legendIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "legendIndex",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The sequential index of the series in the legend.\n\n<div class=\"demo\">Try it: [Legend in opposite order](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series/legendindex/)</div>\n\n."
          },
          "subtree": {}
        },
        "name": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "name",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The name of the series as shown in the legend, tooltip etc."
          },
          "subtree": {}
        },
        "stack": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "stack",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "This option allows grouping series in a stacked chart. The stack option\ncan be a string or a number or anything else, as long as the grouped series'\nstack options match each other."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "type",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1,
              "highmaps": 1
            },
            "description": "The type of series. Can be one of `area`, `areaspline`, `bar`, `column`,\n`line`, `pie`, `scatter` or `spline`. From version 2.3, `arearange`,\n`areasplinerange` and `columnrange` are supported with the highcharts-\nmore.js component.",
            "enumValues": [
              null,
              "line",
              "spline",
              "column",
              "area",
              "areaspline",
              "pie",
              "arearange",
              "areasplinerange",
              "boxplot",
              "bubble",
              "columnrange",
              "errorbar",
              "funnel",
              "gauge",
              "scatter",
              "waterfall"
            ]
          },
          "subtree": {}
        },
        "xAxis": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "xAxis",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using dual or multiple x axes, this number defines which xAxis the\nparticular series is connected to. It refers to either the [axis id](#xAxis.\nid) or the index of the axis in the xAxis array, with 0 being the first."
          },
          "subtree": {}
        },
        "yAxis": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "yAxis",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using dual or multiple y axes, this number defines which yAxis the\nparticular series is connected to. It refers to either the [axis id](#yAxis.\nid) or the index of the axis in the yAxis array, with 0 being the first."
          },
          "subtree": {}
        },
        "zIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "zIndex",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Define the visual z index of the series."
          },
          "subtree": {}
        },
        "mapData": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "mapData",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "An array of objects containing a `path` definition and optionally a code\nor property to join in the data as per the `joinBy` option."
          },
          "subtree": {}
        },
        "dataLabels": {
          "meta": {
            "types": {},
            "name": "dataLabels",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.dataLabels"
          },
          "subtree": {}
        },
        "events": {
          "meta": {
            "types": {},
            "name": "events",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.events"
          },
          "subtree": {}
        },
        "marker": {
          "meta": {
            "types": {},
            "name": "marker",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.marker"
          },
          "subtree": {}
        },
        "point": {
          "meta": {
            "types": {},
            "name": "point",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.point"
          },
          "subtree": {}
        },
        "states": {
          "meta": {
            "types": {},
            "name": "states",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.states"
          },
          "subtree": {}
        },
        "tooltip": {
          "meta": {
            "types": {},
            "name": "tooltip",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.tooltip"
          },
          "subtree": {}
        },
        "zones": {
          "meta": {
            "types": {},
            "name": "zones",
            "excludes": {},
            "validFor": {
              "line": true,
              "treemap": true,
              "waterfall": true,
              "pie": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "bar": true,
              "boxplot": true,
              "bubble": true,
              "column": true,
              "columnrange": true,
              "errorbar": true,
              "funnel": true,
              "gauge": true,
              "heatmap": true,
              "polygon": true,
              "pyramid": true,
              "scatter": true,
              "solidgauge": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true,
              "map": true,
              "mappoint": true,
              "mapbubble": true,
              "mapline": true
            },
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "extends": "plotOptions.line.zones"
          },
          "subtree": {}
        },
        "dataGrouping": {
          "meta": {
            "types": {},
            "name": "dataGrouping",
            "excludes": {},
            "validFor": {
              "line": true,
              "area": true,
              "arearange": true,
              "areaspline": true,
              "areasplinerange": true,
              "column": true,
              "columnrange": true,
              "polygon": true,
              "scatter": true,
              "spline": true,
              "candlestick": true,
              "flags": true,
              "ohlc": true
            },
            "products": {
              "highstock": 1
            },
            "extends": "plotOptions.line.dataGrouping"
          },
          "subtree": {}
        },
        "rounded": {
          "meta": {
            "types": {
              "boolean": 1,
              "enum": 1
            },
            "name": "rounded",
            "excludes": {},
            "default": "false",
            "validFor": {
              "solidgauge": true
            },
            "products": {
              "highcharts": 1
            },
            "description": "Wether to draw rounded edges on the gauge.",
            "enumValues": [
              "true",
              "false"
            ]
          },
          "subtree": {}
        }
      }
    },
    "zAxis": {
      "meta": {
        "types": {
          "array": "zAxis"
        },
        "name": "zAxis",
        "excludes": {
          "breaks": 1,
          "crosshair": 1,
          "lineColor": 1,
          "lineWidth": 1,
          "nameToX": 1,
          "showEmpty": 1
        },
        "products": {
          "highcharts": 1
        },
        "description": "The Z axis or depth axis for 3D plots.\n\nSee [the Axis object](#Axis) for programmatic access to the axis.",
        "extends": "xAxis"
      },
      "subtree": {}
    },
    "colorAxis": {
      "meta": {
        "types": {},
        "name": "colorAxis",
        "excludes": {
          "allowDecimals": 1,
          "alternateGridColor": 1,
          "crosshair": 1,
          "minRange": 1,
          "minTickInterval": 1,
          "offset": 1,
          "opposite": 1,
          "showEmpty": 1,
          "title": 1
        },
        "products": {
          "highmaps": 1
        },
        "description": "A color axis for choropleth mapping. Visually, the color axis will appear\nas a gradient or as separate items inside the legend, depending on whether\nthe axis is scalar or based on data classes.\n\nFor supported color formats, see the [docs article about colors](http://www.\nhighcharts.com/docs/chart-design-and-style/colors).\n\nA scalar color axis is represented by a gradient. The colors either range\nbetween the [minColor](#colorAxis.minColor) and the [maxColor](#colorAxis.\nmaxColor), or for more fine grained control the colors can be defined\nin [stops](#colorAxis.stops). Often times, the color axis needs to be\nadjusted to get the right color spread for the data. In addition to stops,\nconsider using a logarithmic [axis type](#colorAxis.type), or setting\n[min](#colorAxis.min) and [max](#colorAxis.max) to avoid the colors being\ndetermined by outliers.\n\nWhen [dataClasses](#colorAxis.dataClasses) are used, the ranges are subdivided\ninto separate classes like categories based on their values. This can\nbe used for ranges between two values, but also for a true category. However,\nwhen your data is categorized, it may be as convenient to add each category\nto a separate series.\n\nSee [the Axis object](#Axis) for programmatic access to the axis.",
        "extends": "xAxis"
      },
      "subtree": {
        "allowDecimals": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowDecimals",
            "excludes": {},
            "default": "true",
            "products": {
              "highmaps": 1
            }
          },
          "subtree": {}
        },
        "dataClassColor": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "dataClassColor",
            "excludes": {},
            "default": "tween",
            "products": {
              "highmaps": 1
            },
            "description": "Determines how to set each data class' color if no individual color is\nset. The default value, `tween`, computes intermediate colors between\n`minColor` and `maxColor`. The other possible value, `category`, pulls\ncolors from the global or chart specific [colors](#colors) array.",
            "enumValues": [
              "tween",
              "category"
            ]
          },
          "subtree": {}
        },
        "endOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "endOnTick",
            "excludes": {},
            "default": "true",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to force the axis to end on a tick. Use this option with the [maxPadding](#colorAxis.\nmaxPadding) option to control the axis end."
          },
          "subtree": {}
        },
        "gridLineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "gridLineColor",
            "excludes": {},
            "default": "#e6e6e6",
            "products": {
              "highmaps": 1
            },
            "description": "Color of the grid lines extending from the axis across the gradient."
          },
          "subtree": {}
        },
        "gridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridLineWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highmaps": 1
            },
            "description": "The width of the grid lines extending from the axis across the gradient\nof a scalar color axis."
          },
          "subtree": {}
        },
        "max": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "max",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The maximum value of the axis in terms of map point values. If `null`,\nthe max value is automatically calculated. If the `endOnTick` option\nis true, the max value might be rounded up."
          },
          "subtree": {}
        },
        "maxColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "maxColor",
            "excludes": {},
            "default": "#003399",
            "products": {
              "highmaps": 1
            },
            "description": "The color to represent the maximum of the color axis. Unless [dataClasses](#colorAxis.\ndataClasses) or [stops](#colorAxis.stops) are set, the gradient ends at\nthis value.\n\nIf dataClasses are set, the color is based on minColor and maxColor unless\na color is set for each data class, or the [dataClassColor](#colorAxis.\ndataClassColor) is set."
          },
          "subtree": {}
        },
        "maxPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxPadding",
            "excludes": {},
            "default": "0.05",
            "products": {
              "highmaps": 1
            },
            "description": "Padding of the max value relative to the length of the axis. A padding\nof 0.05 will make a 100px axis 5px longer."
          },
          "subtree": {}
        },
        "min": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "min",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The minimum value of the axis in terms of map point values. If `null`,\nthe min value is automatically calculated. If the `startOnTick` option\nis true, the min value might be rounded down."
          },
          "subtree": {}
        },
        "minColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minColor",
            "excludes": {},
            "default": "#e6ebf5",
            "products": {
              "highmaps": 1
            },
            "description": "The color to represent the minimum of the color axis. Unless [dataClasses](#colorAxis.\ndataClasses) or [stops](#colorAxis.stops) are set, the gradient starts\nat this value.\n\nIf dataClasses are set, the color is based on minColor and maxColor unless\na color is set for each data class, or the [dataClassColor](#colorAxis.\ndataClassColor) is set."
          },
          "subtree": {}
        },
        "minPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minPadding",
            "excludes": {},
            "default": "0.05",
            "products": {
              "highmaps": 1
            },
            "description": "Padding of the min value relative to the length of the axis. A padding\nof 0.05 will make a 100px axis 5px longer."
          },
          "subtree": {}
        },
        "reversed": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversed",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Whether to reverse the axis so that the highest number is closest to the\norigin. Defaults to `false` in a horizontal legend and `true` in a vertical\nlegend, where the smallest value starts on top."
          },
          "subtree": {}
        },
        "showInLegend": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showInLegend",
            "excludes": {},
            "default": "true",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to display the colorAxis in the legend."
          },
          "subtree": {}
        },
        "startOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "startOnTick",
            "excludes": {},
            "default": "true",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to force the axis to start on a tick. Use this option with the\n`maxPadding` option to control the axis start."
          },
          "subtree": {}
        },
        "stops": {
          "meta": {
            "types": {
              "array": "Array"
            },
            "name": "stops",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Color stops for the gradient of a scalar color axis. Use this in cases\nwhere a linear gradient between a `minColor` and `maxColor` is not sufficient.\nThe stops is an array of tuples, where the first item is a float between\n0 and 1 assigning the relative position in the gradient, and the second\nitem is the color."
          },
          "subtree": {}
        },
        "tickInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickInterval",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The interval of the tick marks in axis units. When `null`, the tick interval\nis computed to approximately follow the `tickPixelInterval`."
          },
          "subtree": {}
        },
        "tickPixelInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickPixelInterval",
            "excludes": {},
            "default": "72",
            "products": {
              "highmaps": 1
            },
            "description": "If [tickInterval](#colorAxis.tickInterval) is `null` this option sets\nthe approximate pixel interval of the tick marks."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1,
              "enum": 1
            },
            "name": "type",
            "excludes": {},
            "default": "linear",
            "products": {
              "highmaps": 1
            },
            "description": "The type of interpolation to use for the color axis. Can be `linear` or\n`logarithmic`.",
            "enumValues": [
              "linear",
              "logarithmic"
            ]
          },
          "subtree": {}
        },
        "dataClasses": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "dataClasses",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "An array of data classes or ranges for the choropleth map. If none given,\nthe color axis is scalar and values are distributed as a gradient between\nthe minimum and maximum colors."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The color of each data class. If not set, the color is pulled from the\nglobal or chart-specific [colors](#colors) array."
              },
              "subtree": {}
            },
            "from": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "from",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The start of the value range that the data class represents, relating\nto the point value."
              },
              "subtree": {}
            },
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The name of the data class as it appears in the legend. If no name is\ngiven, it is automatically created based on the `from` and `to` values.\nFor full programmatic control, [legend.labelFormatter](#legend.labelFormatter)\ncan be used. In the formatter, `this.from` and `this.to` can be accessed."
              },
              "subtree": {}
            },
            "to": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "to",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The end of the value range that the data class represents, relating to\nthe point value."
              },
              "subtree": {}
            }
          }
        },
        "labels": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "labels",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The axis labels show the number for each tick.\n\nFor more live examples on label options, see [xAxis.labels in the Highcharts\nAPI.](/highcharts#xAxis.labels)",
            "extends": "xAxis.labels"
          },
          "subtree": {
            "overflow": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "overflow",
                "excludes": {},
                "default": "justify",
                "products": {
                  "highmaps": 1
                },
                "description": "How to handle overflowing labels on horizontal axis. Can be undefined\nor \"justify\". If \"justify\", labels will not render outside the plot area.\nIf there is room to move it, it will be aligned to the edge, else it\nwill be removed.",
                "enumValues": [
                  null,
                  "justify"
                ]
              },
              "subtree": {}
            }
          }
        },
        "marker": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "marker",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The triangular marker on a scalar color axis that points to the value\nof the hovered area. To disable the marker, set `marker: null`."
          },
          "subtree": {
            "animation": {
              "meta": {
                "types": {
                  "object": 1,
                  "boolean": 1
                },
                "name": "animation",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Animation for the marker as it moves between values. Set to `false` to\ndisable animation. Defaults to `{ duration: 50 }`."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#999999",
                "products": {
                  "highmaps": 1
                },
                "description": "The color of the marker."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "mapNavigation": {
      "meta": {
        "types": {},
        "name": "mapNavigation",
        "excludes": {},
        "products": {
          "highmaps": 1
        },
        "description": "A collection of options for zooming and panning in a map."
      },
      "subtree": {
        "buttons": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttons",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The individual buttons for the map navigation. This usually includes the\nzoom in and zoom out buttons. Properties for each button is inherited\nfrom [mapNavigation.buttonOptions](#mapNavigation.buttonOptions), while\nindividual options can be overridden. But default, the `onclick`, `text`\nand `y` options are individual."
          },
          "subtree": {
            "zoomIn": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "zoomIn",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Options for the zoom in button. Properties for the zoom in and zoom out\nbuttons are inherited from [mapNavigation.buttonOptions](#mapNavigation.\nbuttonOptions), while individual options can be overridden. By default,\n the `onclick`, `text` and `y` options are individual.",
                "extends": "mapNavigation.buttonOptions"
              },
              "subtree": {
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "default": "+",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The text for the button. The tooltip (title) is a language option given\nby [lang.zoomIn](#lang.zoomIn)."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The position of the zoomIn button relative to the vertical alignment."
                  },
                  "subtree": {}
                }
              }
            },
            "zoomOut": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "zoomOut",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Options for the zoom out button. Properties for the zoom in and zoom out\nbuttons are inherited from [mapNavigation.buttonOptions](#mapNavigation.\nbuttonOptions), while individual options can be overridden. By default,\n the `onclick`, `text` and `y` options are individual.",
                "extends": "mapNavigation.buttonOptions"
              },
              "subtree": {
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "default": "-",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The text for the button. The tooltip (title) is a language option given\nby [lang.zoomOut](#lang.zoomIn)."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "28",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The position of the zoomOut button relative to the vertical alignment."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "enableButtons": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableButtons",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Whether to enable navigation buttons. By default it inherits the [enabled](#mapNavigation.\nenabled) setting."
          },
          "subtree": {}
        },
        "enableDoubleClickZoom": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableDoubleClickZoom",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Enables zooming in on an area on double clicking in the map. By default\nit inherits the [enabled](#mapNavigation.enabled) setting."
          },
          "subtree": {}
        },
        "enableDoubleClickZoomTo": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableDoubleClickZoomTo",
            "excludes": {},
            "default": "false",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to zoom in on an area when that area is double clicked."
          },
          "subtree": {}
        },
        "enableMouseWheelZoom": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableMouseWheelZoom",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Enables zooming by mouse wheel. By default it inherits the [enabled](#mapNavigation.\nenabled) setting."
          },
          "subtree": {}
        },
        "enableTouchZoom": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableTouchZoom",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Whether to enable multitouch zooming. Note that if the chart covers the\nviewport, this prevents the user from using multitouch and touchdrag on\nthe web page, so you should make sure the user is not trapped inside the\nchart. By default it inherits the [enabled](#mapNavigation.enabled) setting."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "false",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to enable map navigation. The default is not to enable navigation,\nas many choropleth maps are simple and don't need it. Additionally, when\ntouch zoom and mousewheel zoom is enabled, it breaks the default behaviour\nof these interactions in the website, and the implementer should be aware\nof this.\n\nIndividual interactions can be enabled separately, namely buttons, multitouch\nzoom, double click zoom, double click zoom to element and mousewheel zoom."
          },
          "subtree": {}
        },
        "mouseWheelSensitivity": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "mouseWheelSensitivity",
            "excludes": {},
            "default": "1.1",
            "products": {
              "highmaps": 1
            },
            "description": "Sensitivity of mouse wheel or trackpad scrolling. 1 is no sensitivity,\n while with 2, one mousewheel delta will zoom in 50%."
          },
          "subtree": {}
        },
        "buttonOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonOptions",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "General options for the map navigation buttons. Individual options can\nbe given from the [mapNavigation.buttons](#mapNavigation.buttons) option\nset."
          },
          "subtree": {
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highmaps": 1
                },
                "description": "The X offset of the buttons relative to its `align` setting."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "align",
                "excludes": {},
                "default": "left",
                "products": {
                  "highmaps": 1
                },
                "description": "The alignment of the navigation buttons.",
                "enumValues": [
                  "left",
                  "center",
                  "right"
                ]
              },
              "subtree": {}
            },
            "alignTo": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "alignTo",
                "excludes": {},
                "default": "plotBox",
                "products": {
                  "highmaps": 1
                },
                "description": "What box to align the buttons to. Possible values are `plotBox` and `spacingBox`.",
                "enumValues": [
                  "plotBox",
                  "spacingBox"
                ]
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "default": "18",
                "products": {
                  "highmaps": 1
                },
                "description": "The pixel height of the map navigation buttons."
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "padding",
                "excludes": {},
                "default": "5",
                "products": {
                  "highmaps": 1
                },
                "description": "Padding for the navigation buttons."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Text styles for the map navigation buttons. Defaults to\n\n<pre>{    fontSize: '15px',    fontWeight: 'bold',    textAlign: 'center'\n}</pre>"
              },
              "subtree": {}
            },
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "A configuration object for the button theme. The object accepts SVG properties\nlike `stroke-width`, `stroke` and `fill`. Tri-state button styles are\nsupported by the `states.hover` and `states.select` objects."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1,
                  "enum": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "bottom",
                "products": {
                  "highmaps": 1
                },
                "description": "The vertical alignment of the buttons. Individual alignment can be adjusted\nby each button's `y` offset.",
                "enumValues": [
                  "top",
                  "middle",
                  "bottom"
                ]
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "18",
                "products": {
                  "highmaps": 1
                },
                "description": "The width of the map navigation buttons."
              },
              "subtree": {}
            }
          }
        }
      }
    }
  }
});
