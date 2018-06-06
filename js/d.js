function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

var levelExp = {1:0,2:50,3:150,4:300,5:450,6:Infinity};

var characterFunctions = {
	"checkLevelUp":function(exp,currLvl) {while (exp >= levelExp[currLvl+1]) {currLvl += 1;}while(levelExp[currLvl] > exp) {currLvl -= 1;}return currLvl;}
	};