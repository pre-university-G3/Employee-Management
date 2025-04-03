import React from 'react'

const Grid = () => {
  return (
    <main>
        <section className="grid grid-cols-5 grid-rows-3 gap-5 p-20 pb-5">
            <div className="bg-red-500 text-center col-span-2 row-span-3">1</div>
            <div className="bg-red-500 text-center col-span-3 row-span-2">2</div>
            <div className="bg-red-500 text-center">3</div>
            <div className="bg-red-500 text-center">4</div>
            <div className="bg-red-500 text-center">5</div>

        </section>
        <section className="flex flex-row gap-5 pl-20 pr-20">
        <div className="bg-red-500 text-center size-30 grow-[1.5]">6</div>
        <div className="bg-red-500 text-center size-30 grow-1">7</div>
        <div className="bg-red-500 text-center size-30 grow-1">8</div>
        </section>
    </main>
  )
}

export default Grid