export function render() {
  document.getElementById("app")!.innerHTML = "main hello wrold";
}
render();

if (import.meta.hot) {
  console.log("hot change");
  import.meta.hot.accept((updatedModule) => updatedModule!.render());
}
