export function problem(){
  const undergroundSystem = new UndergroundSystem();
  undergroundSystem.checkIn(45, "Leyton", 3);
  undergroundSystem.checkIn(32, "Paradise", 8);
  undergroundSystem.checkIn(27, "Leyton", 10);
  undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
  undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
  undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
  console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
  console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
  undergroundSystem.checkIn(10, "Leyton", 24);
  console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000
  undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
  console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
}

//https://leetcode.com/problems/design-underground-system/
var UndergroundSystem = function() {
    this.stations = new Map();
    this.activeCustomers = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {    
    this.activeCustomers.set(id, { in: t, stationName });
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const customer = this.activeCustomers.get(id);
  this.activeCustomers.delete(id);
  if (!this.stations.has(stationName)) this.stations.set(stationName, {})
  const station = this.stations.get(stationName);
  if (!station[customer.stationName]) station[customer.stationName] = { time: [], count: 0 }
  const prevStation = station[customer.stationName];
  prevStation.time = ((prevStation.time * prevStation.count + (t - customer.in)) / (prevStation.count + 1));
  prevStation.count += 1;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  return this.stations.get(endStation)[startStation].time;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */