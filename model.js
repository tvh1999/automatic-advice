import "regenerator-runtime/runtime.js";

const state = {
  quote: {},
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const adviceGenerator = async function () {
  try {
    const res = await Promise.race([
      fetch(`https://api.adviceslip.com/advice`),
      timeout(3),
    ]);

    if (!res.ok) throw new Error();

    const data = await res.json();
    const { slip } = data;
    const { id, advice } = slip;
    state.quote = {
      id,
      advice,
    };
  } catch (err) {
    throw err;
  }
};

export { adviceGenerator, state };
