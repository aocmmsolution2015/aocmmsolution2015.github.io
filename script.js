$( document ).ready(function() {
  var numProbs = parseInt($('#numStudents').val());
  var easy = Math.floor(numProbs * (0.301)).toString()
  var en = Math.floor(numProbs * (0.301))
  var medium = Math.floor(numProbs * (0.063)).toString()
  var mn = Math.floor(numProbs * (0.063))
  var hard = Math.floor(numProbs * (0.233)).toString()
  var hn = Math.floor(numProbs * (0.233))
  var me = Math.floor(numProbs * (0.201)).toString()
  var men =  Math.floor(numProbs * (0.201))
  var mh = Math.floor(numProbs * (0.202)).toString()
  var mhn = Math.floor(numProbs * (0.202))
  var sum = en + mn + hn + men + mhn;
  var other = (numProbs - sum).toString();
  var string = "Easy: " + easy + " Medium-easy: " + me + " Medium: " + medium + " Medium-hard: " + mh + " Hard: " + hard + " Doesn't matter: " + other


  var data = {
      labels: ["Easy", "Medium-Easy", "Medium", "Medium-Hard", "Hard"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [en,men,mn,mhn,hn]
          }
      ]
  };

/**  var ctx = document.getElementById("myChart").getContext("2d");
  var myNewChart = new Chart(ctx).Line(data);

  // Get context with jQuery - using jQuery's .get() method.
  var ctx = $("#myChart").get(0).getContext("2d");
var myNewChart = new Chart(ctx);**/

  $('#submit').click(function(){
    numProbs = parseInt($('#numStudents').val());
    easy = Math.floor(numProbs * (0.301)).toString()
    en = Math.floor(numProbs * (0.301))
    medium = Math.floor(numProbs * (0.063)).toString()
    mn = Math.floor(numProbs * (0.063))
    hard = Math.floor(numProbs * (0.233)).toString()
    hn = Math.floor(numProbs * (0.233))
    me = Math.floor(numProbs * (0.201)).toString()
    men =  Math.floor(numProbs * (0.201))
    mh = Math.floor(numProbs * (0.202)).toString()
    mhn = Math.floor(numProbs * (0.202))
    sum = en + mn + hn + men + mhn;
    other = (numProbs - sum).toString();
    string = "Easy: " + easy + " Medium-easy: " + me + " Medium: " + medium + " Medium-hard: " + mh + " Hard: " + hard + " Doesn't matter: " + other
    $('#easy').text("Easy: " + easy);
    $('#em').text("Medium-easy: " + me);
    $('#m').text("Medium: " + medium);
    $('#mh').text("Medium-hard: " + mh);
    $('#h').text("Hard: " + hard);
    $('#o').text("Other: " + other);
    data = {
        labels: ["Easy", "Medium-Easy", "Medium", "Medium-Hard", "Hard"],
        datasets: [
            {
                label: "Test scores",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [en,men,mn,mhn,hn]
            },
            {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        }
        ]
    };
    var myNewChart = null;
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(data);

});





});
