import "core-js/stable";
import "regenerator-runtime/runtime.js";

import * as model from "./model";
import adviceView from "./views/adviceView";

const appBehaviorController = async function () {
  try {
    await model.adviceGenerator();

    adviceView.render(model.state.quote);
  } catch (err) {
    console.error(err);
  }
};

(function () {
  adviceView.addHandlerAdviceDisplay(appBehaviorController);
})();
