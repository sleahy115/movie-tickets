var ticketPrice = "";

function Ticket(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}
// $16-full priced adult ticket @ night
// $8-senior/kids ticket at  night
// $8-day ticket adult
// $5-kids day ticket

Ticket.prototype.moviePrice = function(age,time) {
  if (age >= 50 || <= 10) {
    return ticketPrice - 2;
  } else if (time === "am") {
    return ticketPrice - 2;
  }
});