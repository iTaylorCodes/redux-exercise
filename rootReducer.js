const DEFAULT_STATE = {
  face: "◔_◔",
};

const moodReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "MOOD_HAPPY":
      return { ...state, face: action.payload };
    case "MOOD_ANGRY":
      return { ...state, face: action.payload };
    case "MOOD_CLAPPING":
      return { ...state, face: action.payload };
    case "MOOD_CURIOUS":
      return { ...state, face: action.payload };
    case "MOOD_LOVEY":
      return { ...state, face: action.payload };
    default:
      return state;
  }
};
