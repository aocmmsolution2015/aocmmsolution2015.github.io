$( document ).ready(function() {
  $('#submit').click(function(){
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
    $('#easy').text("Easy: " + easy);
    $('#em').text("Medium-easy: " + me);
    $('#m').text("Medium: " + medium);
    $('#mh').text("Medium-hard: " + mh);
    $('#h').text("Hard: " + hard);
    $('#o').text("Other: " + other);


  })
});
