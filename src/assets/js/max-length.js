<script>
var app = angular.module('AppModule', []);
app.filter('limitChar', function () {
  return function (content, length, tail) {
    if (isNaN(length))
      length = 50;

    if (tail === undefined)
      tail = "...";

    if (content.length <= length || content.length - tail.length <= length) {
      return content;
    }
    else {
      return String(content).substring(0, length-tail.length) + tail;
    }
  };
});
</script>
