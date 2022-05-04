
class Team{
    constructor(name, points, fouls) {
        this.name = name;
        this.points = points;
        this.fouls = fouls;
    }
}

const league=[
    new Team ("Inter",0,0),
    new Team ("Napoli",0,0),
    new Team ("Milan",0,0),
    new Team ("Juve",0,0),
    new Team ("Sassuolo",0,0),
];

league.forEach( (team)=>{
    team.points=getRndInteger(0,100);
    team.fouls=getRndInteger(0,100);
} );

console.log(league);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}