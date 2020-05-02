const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class Facebook extends LIBRARIES.Skill {
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("Facebook.post", function(_intent, _socket){
      // Here yu will add an action when the user want to post anything on Facebook.
    });
  }
}

module.exports = Facebook;
