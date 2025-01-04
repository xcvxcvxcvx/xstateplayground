import { ToggleContext } from "./ToggleContext";

export function ToggleOne() {
  const actorRef = ToggleContext.useActorRef();
  const { send } = actorRef;
  const value = ToggleContext.useSelector((state) => state.value);

  return (
    <div>
      {value === "inactive" ? "🔴🔴" : "🟢🟢"}
      {value === "active" ? (
        <button
          onClick={() => {
            send({ type: "toggle" });
          }}
        >
          Turn off
        </button>
      ) : (
        <button
          onClick={() => {
            send({ type: "toggle" });
          }}
        >
          Turn on
        </button>
      )}
    </div>
  );
}

export function Toggle() {
  return (
    <ToggleContext.Provider>
      <ToggleOne />
    </ToggleContext.Provider>
  );
}
