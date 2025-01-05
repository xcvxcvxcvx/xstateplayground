import { ReactNode } from "react";
import { AppContext } from "./AppContext";
import { Toggle } from "../Toggle/Toggle";
import { Timer } from "../Timer/Timer";

const pageStyle = {
  display: "flex",
  gap: "16px",
  flexDirection: "column",
} as const;

function Page({ children }: { children: ReactNode }) {
  const actorRef = AppContext.useActorRef();
  const { send } = actorRef;

  const handleClick = () => {
    send({ type: "back" });
  };

  return (
    <div style={pageStyle}>
      <button onClick={handleClick}>{"<-"}</button>
      <div>{children}</div>
    </div>
  );
}

export function AppOne() {
  const actorRef = AppContext.useActorRef();
  const { send } = actorRef;
  const value = AppContext.useSelector((state) => state.value);

  if (value === "toggle")
    return (
      <Page>
        <Toggle />
      </Page>
    );

  if (value === "timer")
    return (
      <Page>
        <Timer />
      </Page>
    );

  return (
    <div style={pageStyle}>
      <button onClick={() => send({ type: "toggle" })}>Toggle</button>
      <button onClick={() => send({ type: "timer" })}>Timer</button>
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
