// set up store
const store = Redux.createStore(moodReducer);

// subscribe renderFace to face changes
const face = document.getElementById("face");

// listeners for the buttons
document.getElementById("happy").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_HAPPY", payload: "ʘ‿ʘ" });
});

document.getElementById("angry").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_ANGRY", payload: "ಠ_ಠ" });
});

document.getElementById("clapping").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_CLAPPING", payload: '(￣∇￣ﾉﾉ"' });
});

document.getElementById("curious").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_CURIOUS", payload: "⊙.☉" });
});

document.getElementById("lovey").addEventListener("click", () => {
  store.dispatch({ type: "MOOD_LOVEY", payload: "(♥ω♥*)" });
});

const renderFace = () => {
  face.innerHTML = store.getState().face;
};

renderFace();
store.subscribe(renderFace);
