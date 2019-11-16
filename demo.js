function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} //getRandomInt(минимальное, максимальное +1);
function boss(bossname,bosshp,bossmaxdmg,bossmindmg){
    this.bosshp=bosshp;
    this.bossname=bossname;
    this.bossmaxdmg=bossmaxdmg;
    this.bossmindmg=bossmindmg;
}
function boss(name,hp,maxdmg,mindmg,def){
    this.hp=hp;
    this.name=name;
    this.maxdmg=maxdmg;
    this.mindmg=mindmg;
    this.def=def;
}

var hp = 100;
nhp = hp;
mindmg = 30;
maxdmg = 50;
def = 0;
rec=0;
zak=0;
dopdmg=0;
closedmg=0;
pro = 0;
var bossname = name;
bosshp = 1000;
bossmindmg = 1;
bossmaxdmg = 10;
war = 0;
game=0;

alert("Привет! Что ж начнём?");
alert("Выбери своего персонажа");
do {
    var person = prompt("1 - Дварф\n2 - Вампир\n3 - Маг\n4 - Механик\n5 - Берсерк")
    if (person == 1) {
        var person1 = confirm("Очень маленький, по нему сложно попасть.\n-25% от урона противника.")
    }
    if (person == 2) {
        var person1 = confirm("Просто вампир, пьёт кровь и Балтика 5.\nВостанавливает 2% здоровья при каждом ударе.")
    }
    if (person == 3) {
        var person1 = confirm("Владеет магией, может заколдовать вещи.\n+25% от характеристикам вещей(не оружия).")
    }
    if (person == 4) {
        var person1 = confirm("50-летний механик, может улучшить орудие.\n+30 к урону 1 выстрела.")
    }
    if (person == 5) {
        var person1 = cofirm("Может разрезать сталь мизинцем.\n+50% к ближнему оружию.")
    }
} while (person1 != true);

if (person == 1) {
    def=0.25;
}
if (person == 2) {
    rec=0.02;
}
if (person == 3) {
    zak=0.25;
}
if (person == 4) {
    dopdmg=30;
}
if (person == 5) {
   closedmg=0.5;
}

var name = prompt("Как зовут твоего пресонажа?")


do {
    var menu = prompt("--------------------------Характеристики--------------------------\nHP=" + hp + "\nУрон= " + mindmg + "-" + maxdmg + "\nЗащита= " + def + "%\n----------------------------------------------------------------------\n1 - Пойти в бой!");
    if (menu == 1) {
        var boss = getRandomInt(1, 4);
        if (boss == 1) {
            bossname = "Каменный голем"
            bosshp=1000;
        } else if (boss == 2) {
            bossname = "Ледяной голем"
            bosshp=1500;
        } else if (boss == 3) {
            bossname = "Огненый голем"
            bosshp=2000;
        }
        alert("" + name + "                               VS                               " + bossname + "\n \n--------------------------Характеристики--------------------------\nHP=" + bosshp + "\nУрон= " + bossmindmg + "-" + bossmaxdmg + "\n----------------------------------------------------------------------");
        do {
            var warmenu = prompt("Босс " + bosshp + "                                                                           " + name + " " + nhp + "\n----------------------------------------------------------------------\nOK - Атака")
            if (warmenu == "") {
                nhp -= getRandomInt(bossmindmg, (bossmaxdmg-(def*bossmaxdmg)) + 1);
                bosshp -= getRandomInt(mindmg, maxdmg + 1);
                if (rec>0){
                    nhp+=hp*rec;
                }
            }
            if (nhp <= 0) {
                nhp=hp;
                alert("----------------------------ПОРАЖЕНИЕ----------------------------")
                game=1;
            }
            else if (bosshp <= 0) {
                hp += 1;
                nhp=hp;
                maxdmg += 5
                alert("-----------------------------ПОБЕДА-----------------------------\nВаш максиальный запас здоровья увеличен до " + hp + " \nВаш максимальный урон увеличен до " + maxdmg + "")
                game=1;
            }
        } while (game!=1);
        game=0;
    }
}
while (pro == 0);

//var boss = getRandomInt(1, 4);