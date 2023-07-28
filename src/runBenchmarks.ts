export default async function runBenchmarks() {
  const [runReactCreateRoot, runReactDomRender, runVanillaJs, runInferno, runPreact] = await Promise.all([
    import(/* webpackChunkName: "ReactCreateRoot" */ "./ReactCreateRoot"),
    import(/* webpackChunkName: "ReactDom.render" */ "./ReactDom.render"),
    import(/* webpackChunkName: "VanillaJs" */ "./VanillaJs"),
    import(/* webpackChunkName: "Inferno" */ "./Inferno"),
    import(/* webpackChunkName: "Preact" */ "./Preact"),
  ]);
  const benchmarks = [
    { name: "ReactCreateRoot", fn: runReactCreateRoot },
    { name: "ReactDom.render", fn: runReactDomRender },
    { name: "VanillaJs", fn: runVanillaJs },
    { name: "Inferno", fn: runInferno },
    { name: "Preact", fn: runPreact },
  ];

  const runAll = (name: string) => {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", "parentDiv");
    document.body.appendChild(parentDiv);
    benchmarks.forEach((benchmark) => {
      const start = performance.now();
      performance.mark(`${benchmark.name}start`);
      for (let i = 0; i < 10; i += 1) {
        const div = document.createElement("div");
        parentDiv.appendChild(div);
        benchmark.fn.default(div);
      }
      const end = performance.now();
      performance.measure(benchmark.name, `${benchmark.name}start`);
      const div = document.createElement("div");
      div.setAttribute("automation", "true");
      div.innerText = `${name} ${benchmark.name} ${end - start}`;
      document.body.appendChild(div);
      console.log(benchmark.name, end - start);
    });
  };

  runAll("firstRun");
  runAll("repeatRun");
}
