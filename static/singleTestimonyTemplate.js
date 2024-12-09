(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['singleTestimony'] = template({
    "1": function(container, depth0, helpers, partials, data) {
      var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}),
          alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression,
          lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return "<div class=\"testimonial-post\">\r\n    <div class=\"testimonial-content\">\r\n        <div class=\"testimony-text-col\">\r\n            <div class=\"testimony-text\">\r\n                <h2>" +
        alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":28}}}) : helper))) +
        "</h2>\r\n                <p class=\"testimony-desc\">" +
        alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":50}}}) : helper))) +
        "</p>\r\n            </div>\r\n            <button type=\"button\" class=\"button readMore\" data-name=\"" +
        alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":28},"end":{"line":7,"column":36}}}) : helper))) +
        "\" data-desc=\"" +
        alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":44}}}) : helper))) +
        "\" data-url=\"" +
        alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":51}}}) : helper))) +
        "\" data-alt=\"" +
        alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":7,"column":51},"end":{"line":7,"column":58}}}) : helper))) +
        "\">Read More</button>\r\n        </div>\r\n        <div class=\"testimony-pic\">\r\n            <img src=\"" +
        alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":13,"column":22},"end":{"line":13,"column":29}}}) : helper))) +
        "\" alt=\"" +
        alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":43}}}) : helper))) +
        "\">\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
      var helper,
        alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

      return "<div class=\"testimonial-post\">\r\n    <div class=\"testimonial-content column\">\r\n        <div class=\"testimony-text\">\r\n            <h2>" +
        alias4(
          ((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data, "loc": { "start": { "line": 21, "column": 16 }, "end": { "line": 21, "column": 24 } } }) : helper))) +
        "</h2>\r\n            <p class=\"testimony-desc\">" +
        alias4(
          ((helper = (helper = lookupProperty(helpers, "desc") || (depth0 != null ? lookupProperty(depth0, "desc") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "desc", "hash": {}, "data": data, "loc": { "start": { "line": 22, "column": 38 }, "end": { "line": 22, "column": 46 } } }) : helper))) +
        "</p>\r\n        </div>\r\n        <button type=\"button\" class=\"button readMore\" data-name=\"" +
        alias4(
          ((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data, "loc": { "start": { "line": 21, "column": 24 }, "end": { "line": 21, "column": 32 } } }) : helper))) +
        "\" data-desc=\"" +
        alias4(
          ((helper = (helper = lookupProperty(helpers, "desc") || (depth0 != null ? lookupProperty(depth0, "desc") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "desc", "hash": {}, "data": data, "loc": { "start": { "line": 21, "column": 32 }, "end": { "line": 21, "column": 40 } } }) : helper))) +
        "\" data-url=\"" +
        alias4(
          ((helper = (helper = lookupProperty(helpers, "url") || (depth0 != null ? lookupProperty(depth0, "url") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "url", "hash": {}, "data": data, "loc": { "start": { "line": 21, "column": 40 }, "end": { "line": 21, "column": 48 } } }) : helper))) +
        "\" data-alt=\"" +
        alias4(
          ((helper = (helper = lookupProperty(helpers, "alt") || (depth0 != null ? lookupProperty(depth0, "alt") : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "alt", "hash": {}, "data": data, "loc": { "start": { "line": 21, "column": 48 }, "end": { "line": 21, "column": 56 } } }) : helper))) +
        "\">Read More</button>\r\n    </div>\r\n</div>\r\n";
    },
    "compiler": [8, ">= 4.3.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };

      return "\r\n" +
        ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "url") : depth0), { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(3, data, 0), "data": data, "loc": { "start": { "line": 2, "column": 0 }, "end": { "line": 27, "column": 7 } } })) != null ? stack1 : "") +
        "\r\n\r\n\r\n\r\n";
    },
    "useData": true
  });
})();
