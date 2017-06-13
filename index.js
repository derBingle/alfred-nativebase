const alfy = require('alfy');

const components = [
  { name: "ActionSheet",   hash: "ActionSheet" },
  { name: "Advanced Tabs", hash: "advanced-tabs-headref" },
  { name: "Anatomy",       hash: "anatomy-headref" },
  { name: "Badge",         hash: "Badge" },
  { name: "Button",        hash: "button-headref" },
  { name: "Card",          hash: "card-def-headref" },
  { name: "Check Box",     hash: "checkbox-headref" },
  { name: "Deck Swiper",   hash: "deckswiper-headref" },
  { name: "Drawer",        hash: "Drawer" },
  { name: "FABs",          hash: "fabs-def-headref" },
  { name: "Footer Tabs",   hash: "footer-tabs-headref" },
  { name: "Form",          hash: "Form" },
  { name: "Header",        hash: "header-def-headref" },
  { name: "Icon",          hash: "icon-def-headref" },
  { name: "Layout",        hash: "Layout" },
  { name: "List",          hash: "list-def-headref" },
  { name: "Muliple Fabs",  hash: "fabs-multiple-headref" },
  { name: "Picker",        hash: "Picker" },
  { name: "Radio Button",  hash: "radio-button-headref" },
  { name: "Ref",           hash: "ref-components-headref" },
  { name: "Search Bar",    hash: "search-bar-headref" },
  { name: "Segment",       hash: "Segment" },
  { name: "Spinner",       hash: "Spinner" },
  { name: "Tabs",          hash: "tabs-def-headref" },
  { name: "Thumbnail",     hash: "Thumbnail" },
  { name: "Toast",         hash: "Toast" },
  { name: "Typography",    hash: "Typography" },
]

const items = alfy.inputMatches(components, 'name')
              .map(component => ({
                    uuid: component.name.toLowerCase,
			              title: component.name.toLowerCase,
		              	subtitle: `Open NativeBase docs for ${ component.name }`,
		              	arg: component.hash
          		})) 

alfy.output(items)
