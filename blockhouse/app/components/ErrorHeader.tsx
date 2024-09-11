import React from 'react'

function ErrorHeader({error} : {error : string}) {
  return (
    <>
      <h1 className="text-2xl text-red-600 font-medium">Error</h1>
      <p>{error}</p>
    </>
  );
}

export default ErrorHeader