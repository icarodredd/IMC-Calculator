import * as React from "react";

interface Props {
  result: number;
}

function Result({ result }: Props) {
  return (
    <>
      {result !== 0 && (
        <h1 className="p-8 text-3xl text-white text-center">
          Seu resultado é: {result}
        </h1>
      )}
    </>
  );
}

export default Result;
