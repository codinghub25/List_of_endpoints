$(document).ready(function() {
    $.get("https://api.publicapis.org/entries", function(data) {
      $.each(data.entries, function(index, api) {
        if (api.Auth === "" && api.Cors === "no") {
          var row = $("<tr>");
          $("<td>").text(api.API).appendTo(row);
          $("<td>").text(api.Category).appendTo(row);
          $("<td>").text(api.Description).appendTo(row);
          $("<td>").text(api.Auth).appendTo(row);
          $("<td>").text(api.HTTPS).appendTo(row);
          $("<td>").text(api.Cors).appendTo(row);
          $("<td>").html("<a href='" + api.Link + "'>" + api.Link + "</a>").appendTo(row);
          row.appendTo("#api-table tbody");
        }

      });
    });
  });
