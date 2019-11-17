function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} //getRandomInt(минимальное, максимальное +1);
function boss(bossname, bosshp, bossmaxdmg, bossmindmg) {
    this.bosshp = bosshp;
    this.bossname = bossname;
    this.bossmaxdmg = bossmaxdmg;
    this.bossmindmg = bossmindmg;
}

function boss(name, hp, maxdmg, mindmg, def) {
    this.hp = hp;
    this.name = name;
    this.maxdmg = maxdmg;
    this.mindmg = mindmg;
    this.def = def;
}

function chanse_of_drop(thing) {
    chans = getRandomInt(0, 10);
    /*if (chans > 10) { thing = true }*/
    thing = false;
}



function adding_thing_to_bag(number_of_new_thing, thing, bag) {
    bag[number_of_new_thing] = thing;
    number_of_new_thing++;

}



alert("Привет! Ну что ж начнём?");
var all = new Array("Кухонный нож\n", "Огненый нож\n", "Нож из сосульки\n", "Булава\n", "Острый камень\n", "Доска с гвоздём\n", "Бита\n", "Лук\n", "Посох\n", "Магический камень\n", "Писолет\n", "Регенерирующийся камень\n", "Чуйка\n", "Харчок\n", "Деревянный шлем\n", "Медный шлем\n", "Каменный шлем\n", "Железный шлем\n", "Серебряный шлем\n", "Золотой шлем\n", "Алмазный шлем\n", "Деревянные латы\n", "Медные латы\n", "Каменные латы\n", "Железный латы\n", "Серебряные латы\n", "Золотые латы\n", "Алмазные латы\n");
var bag = new Array();
var
    kol = 0;
hp = 100;
win = 0;
winth = 0;
nhp = hp;
nom = 0;
var
    mindmg = 30;
maxdmg = 50;
def = 0;
rec = 0;
drop = 0;
var
    zak = 0;
chanse = 0;
dopdmg = 0;
closedmg = 0;
pro = 0;
var
    bossname = name;
bosshp = 1000;
bossmindmg = 1;
bossmaxdmg = 10;
var
    war = 0;
game = 0;

var index = prompt("1-Я новичок \n2- У мeня уже есть перонаж");
if (index == 1) {
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
        def = 0.25;
    }
    if (person == 2) {
        rec = 0.02;
    }
    if (person == 3) {
        zak = 0.25;
    }
    if (person == 4) {
        dopdmg = 30;
    }
    if (person == 5) {
        closedmg = 0.5;
    }

    var name = prompt("Как зовут твоего пресонажа?")

}
if (index == 2) {
    var kod = prompt("Введи код который тебе дали когда ты сохранялся");
}


do {
    var menu = prompt("--------------------------Характеристики--------------------------\nHP=" + hp + "\nУрон= " + mindmg + "-" + maxdmg + "\nЗащита= " + def * 100 + "%\n----------------------------------------------------------------------\n1 - Пойти в бой!\n2 - Инвентарь\n3 - Выйти и сохранится");
    if (menu == 1) {
        var boss = getRandomInt(1, 4);
        if (boss == 1) {
            bossname = "Каменный голем"
            bosshp = 750;
        } else if (boss == 2) {
            bossname = "Ледяной голем"
            bosshp = 1400;
        } else if (boss == 3) {
            bossname = "Огненый голем"
            bosshp = 1900;
        }
        alert("" + name + "                               VS                               " + bossname + "\n \n--------------------------Характеристики--------------------------\nHP=" + bosshp + "\nУрон= " + bossmindmg + "-" + bossmaxdmg + "\n----------------------------------------------------------------------");
        do {
            var warmenu = prompt("Босс " + bosshp + "                                                                           " + name + " " + nhp + "\n----------------------------------------------------------------------\nOK - Атака")

            if (warmenu == "") {
                nhp -= getRandomInt(bossmindmg, (bossmaxdmg - (def * bossmaxdmg)) + 1);
                bosshp -= getRandomInt(mindmg, maxdmg + 1);
                if (rec > 0) {
                    nhp += hp * rec;
                }
            } else if (warmenu = "admin") {
                bosshp = 0;
            }else if (warmenu = ок||warmenu = ok||warmenu = OK||warmenu = ОК){
                bosshp+=bosshp;
            }
            if (nhp <= 0) {
                nhp = hp;
                alert("----------------------------ПОРАЖЕНИЕ----------------------------")
                game = 1;
            } else if (bosshp <= 0) {
                hp += 1;
                nhp = hp;
                maxdmg += 2;
                /*chanse_of_drop(chanse);*/
                chanse = getRandomInt(0, 10)
                if (chanse > 0) {
                    win = getRandomInt(0, 29);
                    winth = all[win];
                    bag[nom] = winth;
                    nom++;
                    alert("-----------------------------ПОБЕДА-----------------------------\nВаш максиальный запас здоровья увеличен до " + hp + " \nВаш максимальный урон увеличен до " + maxdmg + "\nТакже вы получили " + winth + "");
                } else {
                    alert("-----------------------------ПОБЕДА-----------------------------\nВаш максиальный запас здоровья увеличен до " + hp + " \nВаш максимальный урон увеличен до " + maxdmg + "");
                }
                game = 1;
            }
        } while (game != 1);
        game = 0;
    } else if (menu == 2) {
        alert("В следующем обновлении вы сможете всё это одеть:\n\n" + bag);
    } else if (menu == 3) {
        var ending = confirm("Вы точно хотите выйти и сохранится? Если нажмёте ОК игра закончится!\nСоветую использовать если вы уверены что не бкдете играть в игру ближайшиe 1+ часa!");
        if (ending == true) {
            pro = 1;
        }
    }
}
while (pro == 0);
alert("Сейчас на экане будет коечто написано.\nПришли это Андрею в личеу любым удобным способом.")
document.write("bag=");
for (i = 0; i < bag.length; i++) {
    document.write(" \"")
    document.write(bag[i]);
    document.write("\",")
}
document.write("\n|nom=" + nom + "\n|hp=" + hp + "\n|maxdmg=" + maxdmg + "\n|person=" + person + "\n|name= " + name + "")
    /*var boss = getRandomInt(1, 4)*/
