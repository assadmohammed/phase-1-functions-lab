const scubahq = 42 
const blockdistance = 264 




function distanceFromHqInBlocks(pickupStation){
   let distance;
    if (pickupStation > scubahq) {
         distance = pickupStation - scubahq;
        
    } else {
        distance = scubahq - pickupStation; 
         
    }
    return distance;

}
function distanceFromHqInFeet(pickUpStation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUpStation);
    
    const distanceInFeet = distanceInBlocks * blockdistance;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    
    let distanceFeet;
    if (destination > start) {
        distanceFeet = (destination - start) * blockdistance;
    } else {
        distanceFeet = (start - destination) * blockdistance;
    }
    return distanceFeet;
  }


  function calculatesFarePrice(start, destination) {
    
    const distanceTravelled = distanceTravelledInFeet(start, destination)
    let farePrice;
    if (distanceTravelled < 400) {
        farePrice = 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        farePrice = (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
  }
