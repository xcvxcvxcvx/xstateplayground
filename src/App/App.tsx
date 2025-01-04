import { AppContext } from "./AppContext";
import { Toggle } from '../Toggle/Toggle'

export function AppOne() {
  const actorRef = AppContext.useActorRef();
  const { send } = actorRef;
  const value = AppContext.useSelector((state) => state.value);

  if (value === "toggle")
    return (
      <div>
        <button
          onClick={() => {
            send({ type: "back" });
          }}
        >
          {'<-'}
        </button>
        <Toggle />
      </div>
    );

  return (
    <div>
      <button
        onClick={() => {
          send({ type: "toggle" });
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export function App() {
  return (
    <AppContext.Provider>
      <AppOne />
    </AppContext.Provider>
  );
}
