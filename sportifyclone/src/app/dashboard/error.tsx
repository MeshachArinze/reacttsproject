"use client"; // Error components must be Client Components

type Props = "fail" | "succeed" | any;


export default function Error(state: Props){
  try {
    if (state === "fail") {
      console.error("fail");
    }
  } catch (e) {
    return (e as Error).message;
  }

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => Error("fail")}></button>
    </div>
  );
}
