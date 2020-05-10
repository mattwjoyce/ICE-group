$(document).ready(function(){
  $("teamsLink").click(function(){
    document.getElementById("compChange").innerHTML = "<app-view-league-table></app-view-league-table>";
  })
})