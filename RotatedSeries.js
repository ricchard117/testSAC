(function() {
	let template = document.createElement("template");
template.innerHTML = `
<style>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>

<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

	
`;
class RotatedSeriesTest extends HTMLElement {

constructor() {
super();

);
this._props = {};
}
onCustomWidgetBeforeUpdate(changedProperties) {
this._props = { ...this._props, ...changedProperties };
}
onCustomWidgetAfterUpdate(changedProperties) {
if ("color" in changedProperties) {
this.style["background-color"] = changedProperties["color"];
}
if ("opacity" in changedProperties) {
this.style["opacity"] = changedProperties["opacity"];
}
}
}
customElements.define("RotatedSeriesMain", RotatedSeries);
})();











})();	