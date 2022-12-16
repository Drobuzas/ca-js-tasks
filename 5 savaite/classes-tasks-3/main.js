console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }
    get points() {
      let levels = { VE: 5, EA: 10, ME: 20, HA: 40, VH: 80, EX: 120 };
      return levels[this.level];
    }
  }


  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }
    set newSolvedChallenge(challenge) {
      this.log.push(challenge.id);
      this.xp += challenge.points;
    }
  }

  const challenge1 = new Challenge(1, "VE"),
    challenge2 = new Challenge(2, "EA"),
    challenge3 = new Challenge(3, "ME"),
    challenge4 = new Challenge(4, "HA"),
    challenge5 = new Challenge(5, "VH"),
    challenge6 = new Challenge(6, "EX"),
    user1 = new User("Madam", 0, []),
    user2 = new User("Steve", 0, []);

  user1.newSolvedChallenge = challenge1;
  user1.newSolvedChallenge = challenge4;
  user1.newSolvedChallenge = challenge6;
  user2.newSolvedChallenge = challenge5;
  user2.newSolvedChallenge = challenge3;
  user2.newSolvedChallenge = challenge2;
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;
    armor;
    name;
    hpPerc;
  
    constructor(name,maxHp,maxEn,armor) {
      this.name = name;
      this.armor = armor;
      this.maxHp = maxHp;
      this.hp = maxHp;
      this.maxEn = maxEn;
      this.en = maxEn;
      this.armor = armor;
    }
  
    getHp() {
      return this.hp;
    }
    setHp(amount) {
      this.hp = amount < 0 ? 0 : amount;
      this.hpPerc = Math.round((this.hp/this.maxHp) * 100 * 100)/100;
    }
    getEn() {
      return this.en;
    }
    setEn(amount) {
      this.en = amount < 0 ? 0 : amount;
    }
    
    skills = {};
    learnSkill(skillName, stats) {
      var fixedSkillName = skillName;
      this.skills[fixedSkillName] = stats;
      this[fixedSkillName] = function(target) {
        var skillStats = this.skills[skillName];
        // Energy
        if (skillStats.cost > this.getEn()) 
          return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        this.setEn(this.getEn() - skillStats.cost);
        
        // Armour
        var effectiveArmor =  target.armor - skillStats.penetration;
        if (effectiveArmor < 0) effectiveArmor = 0;
        else if (effectiveArmor > 100) effectiveArmor = 100;
  
        // Damage
        var newHp = target.getHp();
        var damageAmount = ((100 - effectiveArmor) / 100) * skillStats.damage;
        newHp -= damageAmount;
        target.setHp(newHp);
        
        // Health
        this.setHp(this.getHp() + skillStats.heal);
        
        // Description
        var description = `${this.name} used ${skillName}, ${skillStats.desc}, against ${target.name}, doing ${Math.round(damageAmount*100)/100} damage!`;
        if (skillStats.heal > 0) {
          description += ` ${this.name} healed for ${skillStats.heal} health!`;
        }
        if (target.getHp() <= 0) {
          description += ` ${target.name} died. `;
        } else {
          description += ` ${target.name} is at ${target.hpPerc}% health.`;
        }
        return description;
      };
    }
  }
}
console.groupEnd();