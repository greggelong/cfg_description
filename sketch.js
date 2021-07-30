
// Using Context free grammer to 

//complete natural language tasks that are required of 

// Chinese middle school students in public school English class
// 
// comments in the descript object show changes usually to greater
// generalization




// sentence expanding algorithm based on 

// Daniel Shiffman
// context free grammar videos
// from his 
//Session 7 of my Programming from A to Z class - Fall 2016. 
//http://shiffman.net/a2z/



// 
// so I will take the noun phrase out of the sentence and move it
// further down into the the has phrase and seperate by person and number

let descript = {
  
  "S": [
    //["NP","DescriP"],
    ["DES"]
  
  ],
   
  "DES": [
    ["PossessiveDecript"],
    ["isDescript"],
  ],
  "PossessiveDecript": [
    // hpn is have or has person and number
    // moved into a seperate expansion for body description
    //["Hpn","BodyAdj","PluralBodyNoun"],
   // ["Hpn","a","BodyAdj","SingBodyNoun"],
    ["Hpn","bodyDescript"],
    ["Hpn","hairDescript"],
    // further moved hair into the the hair description part
    //["Hpn","hairDescript","hair"],
    // moved these into a seperate expansion for hair description
    //["Hpn","HairAdj", "hair"],
    //["Hpn","HairAdj", "HairClr","hair"],
    //["Hpn","Len","HairAdj", "hair"],
    //["Hpn","Len","HairAdj", "HairClr","hair"],
  ],
  "bodyDescript": [
    ["BodyAdj","PluralBodyNoun"],
    ["a","BodyAdj","SingBodyNoun"],
  ],
  "hairDescript":[
  	["HairAdj","hair"],
  	["HairAdj", "HairClr","hair"],
  	["Len","HairAdj","hair"],
  	["Len","HairClr","hair"],
  	["Len","hair"],
  	["Len","HairAdj","HairClr","hair"],
  ],
  "isDescript":[

  	["ispn", "height"],
  	["ispn", "build"],
  ],
  
  "build": [
  	["thin"],
  	["heavy"],
  	["overweight"],
  	["average build"]
  ],
  "height":[
  	["tall"],
  	["short"],
  	["average height"],
  ],
  "Len": [
    ["long"],
    ["short"],
  ],
  "HairAdj":[
    ["curly"],
    ["straight"],
    ["wavy"],
  ],
  "HairClr":[
    ["red"],
    ["black"],
    ["blond"],
    ["grey"],
    ["white"],
    ["brown"]
  ],
  
  "BodyAdj": [
    ["big"],
    ["small"]
  ],
  "SingBodyNoun": [
    ["nose"],
    ["mouth"],
    ["moustache"],
    ["beard"]
  ],
  
  "PluralBodyNoun": [
    ["eyes"],
    ["ears"],
    ["hands"],
    ["rosy cheeks"]
  ],
  
  
  "Hpn": [
    ["Dets","PersonNoun3s", "has" ],
    ["Detp","PersonNoun3p", "each", "have"],
    ["Pronoun123p", "have"],
    ["Pronoun3s", "has"],
    ["PropName","has"]
    
  ],

  "ispn": [
    ["Dets","PersonNoun3s", "is" ],
    ["Detp","PersonNoun3p", "are"],
    ["you", "are"],
    ["I", "am"],
    ["we", "are"],
    ["they","are"],
    ["Pronoun3s","is"],
    ["PropName","is"]
    
  ],
  
  "Pronoun123p": [
    ["I"],
    ["you"],
    ["we both"],
    ["they all"]
    // had to quallify it here
  ],
  
  "Pronoun3s":[
    ["he"],
    ["she"],
    ["it"],
  ],
  
  
  "Dets": [
    ["this"],
    ["that"],
    ["the"]
  ],
  "Detp": [
    ["these"],
    ["thoes"],
    ["the"]
  ],
  
  "PersonNoun3s": [
    ["doctor"],
    ["man"],
    ["woman"],
    ["teacher"],
    ["boy"],
    ["girl"]
  ],
 "PersonNoun3p": [
    ["doctors"],
    ["men"],
    ["women"],
    ["teachers"],
    ["boys"],
    ["girls"]
  ],
  
  "PropName": [
    ["Greg"],
    ["Mary"],
    ["Sue"],
    ["Judy"],
    ["Kelly"],
    ["Robert"],
    ["Betty"],
    ["Angela"],
    
    ]
  
}

// var rules = {
//   "S": [
//     ["NP", "VP"],
//     ["Interj", "NP", "VP"]
//   ],
//   "NP": [
//     ["Det", "N"],
//     ["Det", "N", "that", "VP"],
//     ["Det", "Adj", "N"],
//     ["PropName"]
//   ],
//   "VP": [
//     ["Vtrans", "NP"],
//     ["Vintr"]
//   ],
//   "Interj": [
//     ["oh"],
//     ["my"],
//     ["wow"],
//     ["darn"]
//   ],
//   "Det": [
//     ["this"],
//     ["that"],
//     ["the"]
//   ],
//   "N": [
//     ["amoeba"],
//     ["dichotomy"],
//     ["seagull"],
//     ["trombone"],
//     ["overstaffed"],
//     ["corsage"]
//   ],
//   "Adj": [
//     ["bald"],
//     ["smug"],
//     ["important"],
//     ["tame"],
//     ["overstaffed"],
//     ["corsage"]
//   ],
//   "Vtrans": [
//     ["computes"],
//     ["examines"],
//     ["foregrounds"],
//   ],
//   "Vintr": [
//     ["coughs"],
//     ["daydreams"],
//     ["whines"],
//   ],
  
//   "PropName": [
//     ["Greg"],
//     ["Mj"],
//     ["Cuko"],
//     ["Sapa"],
    
//     ]
// };
// var rules = {
//   "S": [
//     ["The", "N", "V"]
//   ],
//   "N": [
//     ["cat"],
//     ["dog"]
//   ],
//   "V": [
//     ["meows"],
//     ["barks"]
//   ]
// };



function expand(start, expansion) {
  if (descript[start]) {
    var pick = random(descript[start]);
    console.log(pick);
    for (var i = 0; i < pick.length; i++) {
      expand(pick[i], expansion);
    }
  } else {
    expansion.push(start);
  }
  return expansion.join(" ");
}

var button;

let myp;

function setup() {
  noCanvas();
  myp = createP("Click generate for a randomly expanded sentence").style("color","lime");
  button = createButton('generate');
  button.mousePressed(cfg);
  createP();
  createP(); // put some space between button and link
  createA('https://github.com/greggelong/cfg_description', 'link to this  repo');
}

function cfg() {

  var start = "S";
  var expansion = [];
  var result = expand(start, expansion);
  console.log(result);
  result+="."
  // capitalize the first letter
  let caps = result.charAt(0).toUpperCase() + result.slice(1);
  
  myp.html(caps).style("color","lime");

}
