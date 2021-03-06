/*
Created on 04.11.2017 by Freshek
*/

class ShipSelectedHandler {
  static get ID() {
    return 11261;
  }

  constructor() {
    this._handler = function(e, a) {
      var parsedJson = JSON.parse(e.detail);

      var ship = a.ships[parsedJson.userId];

      ship.maxHp = parsedJson[Variables.selectMaxHp];
      ship.maxShd = parsedJson[Variables.selectMaxShd];
      ship.hp = parsedJson[Variables.selectHp];
      ship.shd = parsedJson.shield;

      if (ship != null)
        a.lockedShip = ship;
    }
  }

  get handler() {
    return this._handler;
  }
}
