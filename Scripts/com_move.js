function ComMove() {

  if (roundNum === 0) {
    
    strategyType = (Math.random() > 0.75);

    if (strategyType) {return "11"} // True - center
    else              {return RandomPick(["00", "02", "20", "22"])} // False - Corner
    

  } else if (roundNum === 1) {
    
    
    if (grid[1][1].value === 1) {
      strategyType = 3;
      return RandomPick(["00", "02", "20", "22"])}
    else{
      strategyType = 2;
      return "11"}


  } else if (roundNum === 2) {
    
    if(strategyType)  {

    if(ValueExistWithin(1,["01","12","21","10"])){
      return RandomPick(["00", "02", "20", "22"])
    } else {return DiagonalFinder(1)}

  }
  else{

    if(grid[1][1].value === 1) {return DiagonalFinder(-1)}

    else if(ValueExistWithin(1,["01","12","21","10"])) {return "11"}
    
    else{
      let sort = ["00", "02", "20", "22"]
      
      // Remove taken spot
      sort = sort.filter((pos) => {
        return grid[pos[0]][pos[1]].value === 0;
      })

      // Remove diagonal from -1
      sort = sort.filter((pos) => {
        return pos !== DiagonalFinder(-1);
      })

      if (sort.length > 1) {return RandomPick(sort)}
      else                 {return sort[0]}
    }
  }
  
  } else {
    
    let result

    //Strike
    result = Check2InRow(-2)
  
    if (result.proceed) {return result.pos}

    //Intervene
    result = Check2InRow(2)
 
    if (result.proceed) {return result.pos}

    // Special move for strategy 2
    if (strategyType === 2 && roundNum === 3) {
      result = SpecialMove2()

      if (result.proceed) {return result.pos}
    } 

    //Seek
    result = SeekOpening()
    if (result.proceed) {return result.pos}

    //Slot
    result = Slot()
    return result
  }
}


// Script ---------------------------------------------------

function RandomPick(array){
  return array[Math.floor(Math.random() * array.length)];
}

function DiagonalFinder(seekValue){
  let array = ["00", "02", "20", "22"];

  for (let i = 0;i<array.length;i++){
    
    if (grid[array[i][0]][array[i][1]].value === seekValue) {
      
        if (array[i] === "00")      {return "22"}
        else if (array[i] === "02") {return "20"}
        else if (array[i] === "20") {return "02"}
        else if (array[i] === "22") {return "00"}
    }
  }
}

function ValueExistWithin(seekValue,array){
  let matchFound = false;

  array.forEach((pos) => {

    if (grid[pos[0]][pos[1]].value === seekValue) {matchFound = true}
  })
  return matchFound;
}

function Check2InRow(seekValue){
  // Return object.proceed == True/False 
  // and object.pos == "xy"
  let object = {proceed: false};

  for (let i=0;i<pattern.length;i++){

    let [a,b,c] = pattern[i];
    let sum;

    sum = grid[a[0]][a[1]].value +
              grid[b[0]][b[1]].value +
              grid[c[0]][c[1]].value

    if (sum === seekValue) {

      object.proceed = true;

      if     (!grid[a[0]][a[1]].value) { object.pos = a; return object}
      else if(!grid[b[0]][b[1]].value) { object.pos = b; return object}
      else if(!grid[c[0]][c[1]].value) { object.pos = c; return object}
    }
  }
  return object;
}

function SeekOpening(){
  let object = {proceed: false};

  // Filter line pattern that doesn't contain "X"
  let validPattern = pattern.filter((line) => {
    
    let validcount = 0;

    line.forEach((pos)=> {
      if (grid[pos[0]][pos[1]].value !== 1) {validcount++}
    })

    if (validcount === 3) {return true}
    else                  {return false}
  })


  if (validPattern.length !== 0){
  //Again filter line pattern that contain "O"
   validPattern = validPattern.filter((line) => {
    
    let [a,b,c] = line
    if     (grid[a[0]][a[1]].value === -1) {return true}
    else if(grid[b[0]][b[1]].value === -1) {return true}
    else if(grid[c[0]][c[1]].value === -1) {return true}
    else                                   {return false}
  })
  
  //Check if lines have intersection point
  // If no intersection, mark any valid item

  //----Flatten nested array
  let flatarray = validPattern.reduce( (acc,item) => {
    return acc.concat(item);
  })

  // Remove non-empty position
  let validPos = flatarray.filter((pos) => {
    return grid[pos[0]][pos[1]].value === 0;
  }) 
  
  
  //---Find repeated position, If no select random  position
  let IntersectPoint =  validPos.filter((pos,index)=> {
    return validPos.indexOf(pos) !== index
  })
  
  object.proceed = true;
  if (IntersectPoint.length !== 0){
    
    if(IntersectPoint.length > 1) {
      object.pos = RandomPick(IntersectPoint)
      return object
    }else{
      object.pos = IntersectPoint[0];
      return object
    }

  } else {

    object.pos = RandomPick(validPos)
    return object
  }

  }
  return object;
}

function Slot(){
  // Flatten nested grid array
  let flattenArray = grid.reduce( (acc,item) => {
    return acc.concat(item);
  })

  // Check which position is still free
  let stillFree = flattenArray.filter((cellObject) => {
    return cellObject.value === 0
  })

  // Get pos from grid ID
  let freePos =  stillFree.map((object) => {

    return object.target.getAttribute("id").substring(1)
  })

  return RandomPick(freePos)
  
}

function SpecialMove2(){
  // check X place at a corner
  let object = {proceed: false};
  let Xpos = DiagonalFinder(1)
      
  // Check if there are place dioganally
  if (Xpos && grid[Xpos[0]][Xpos[1]].value === 1){
    
    object.pos = RandomPick(["01","12","21","10"]);
    object.proceed = true;
  } 

  return object
}