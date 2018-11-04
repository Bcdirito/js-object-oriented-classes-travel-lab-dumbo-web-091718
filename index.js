class Driver {
  constructor(name, startDate){
    // debugger
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return (Number(year) - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBlocks = (Number(this.endingLocation.vertical) - Number(this.beginningLocation.vertical))
    let horizontalBlocks = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))

    return (horizontalBlocks + verticalBlocks)
  }

  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }

  }
}
