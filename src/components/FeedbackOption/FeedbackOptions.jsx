export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArr = Object.keys(options);
  return (
    <>
      <div>
        <h1>Please leave feedback</h1>
        {optionsArr.map(el => {
          return (
            <button key={el} onClick={() => onLeaveFeedback(el)}>
              {el}
            </button>
          );
        })}
      </div>
    </>
  );
};
