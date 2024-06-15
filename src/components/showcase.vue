<template>
	<h1 class="divide">This is header 1</h1>
	<h2>This is header 2</h2>
	<h3>This is header 3</h3>
	<h4>This is header 4</h4>
	<h5>This is header 5</h5>
	<h6>This is header 6</h6>
	<p>This is p tag</p>

	<!-- Unordered List -->
	<h3 class="divide">Unordered List <i>(ul)</i></h3>
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>

	<!-- Menu List -->
	<h3 class="divide">Menu List <i>(menu)</i></h3>
	<menu>
		<li>Menu Item 1</li>
		<li>Menu Item 2</li>
		<li>Menu Item 3</li>
	</menu>

	<!-- Ordered List -->
	<h3 class="divide">Ordered List <i>(ol)</i></h3>
	<ol>
		<li>Ordered Item 1</li>
		<li>Ordered Item 2</li>
		<li>Ordered Item 3</li>
	</ol>

	<!-- Definition List -->
	<h3 class="divide">Definition List <i>(dl, dt, dd)</i></h3>
	<dl>
		<dt>Term 1</dt>
		<dd>Definition 1</dd>
		<dt>Term 2</dt>
		<dd>Definition 2</dd>
		<dt>Term 3</dt>
		<dd>Definition 3</dd>
	</dl>

	<!-- Table -->
	<table class="divide" style="margin-bottom: 3rem;">
		<caption>Table Caption</caption>
		<colgroup>
			<col style="width: 50%;">
			<col style="width: 50%;">
		</colgroup>
		<thead>
			<tr>
				<th>Header 1</th>
				<th>Header 2</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Row 1, Cell 1</td>
				<td>Row 1, Cell 2</td>
			</tr>
			<tr>
				<td>Row 2, Cell 1</td>
				<td>Row 2, Cell 2</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td>Total 1</td>
				<td>Total 2</td>
			</tr>
		</tfoot>
	</table>
</template>

<style scoped>
.divide {
	margin-top: 1.5rem;
}
</style>
