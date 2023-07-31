<script lang="ts">



</script>
<!------------------------------------------------------------>

<h2>Exercise 6</h2>
<h4>Part a</h4>
<ul>
  <li>This is a continuation of exercise 4, so copy your solution from exercise 4 to a new solution here in exercise 6 as your starting point.</li>
  <li>Put your answer here: <a href="/exercises/6/my-answer">/exercises/6/my-answer</a></li>
  <li>Remove the 2nd table so there's just the div table displaying the cars.</li>
  <li>Remove the space between the rows.</li>
  <li>Remove the horizontal lines (borders) from the table cells but leave the vertical lines.  Also, make the vertical lines as thin as possible.  In the end, between each column should be one solid vertical line (1px wide) going all the way down the table.  Make sure there are no vertical lines on the edge/outside of the table -- only include these column separator lines between columns.</li>
  <li>Format the rows so that they use alternating background colors.  Alternate between #f1f1f1 and #d1d1d1.</li>
  <li>While the user hovers over a row, that row background should change to #aaaaff and the font color should change to #fff for the whole row.</li>
  <li>While the user hovers over a row, the cursor should be changed to 'pointer'.</li>
  <li>When a row is clicked, that row becomes the "active" row.  Only one row can be active at a time, so if another row is made active, the original active row goes back to normal.</li>
  <li>When a row becomes active, its background color should change to #7777ee.</li>
  <li>If a row which is already active is clicked, it turns off (i.e., becomes normal once again).</li>
  <li>Refactor the main +page.svelte file so that the table is now its own component (i.e., pull the table code out into a separate svelte file).  Name it 'car-list.svelte'.</li>
</ul>

<h4>Part b</h4>
<ul>
  <li>Create a section below the table to allow the user to edit the active record.</li>
  <li>The section should be its own component (again, separate svelte file which is imported).  Name the svelte file 'car-details.svelte'.</li>
  <li>The section should be arranged as a typical form, such as:<br>
    Make: (textbox here)<br>
    Model: (textbox here)<br>
    Year: (number control here)<br>
    Worth: (number control here)
  </li>
  <li>Make sure all of the row headers are right-justified and are aligned perfectly (i.e., all of the colons should be underneath each other perfectly).</li>
</ul>

<h4>Part c</h4>
<ul>
  <li>When the user makes a record "active", that record's values are displayed in the "details" component.</li>
  <li>If there are no records "active", the inputs should be empty.</li>
  <li>You're going to have to share the state somehow between the two components.  Do this with svelte stores.  There are lots of ways to accomplish this -- feel free to create or modify any svelte stores as needed.  But do not have any state maintained within a svelte file (i.e., all "state" should be kept in one or more stores somewhere).</li>
</ul>

<h4>Part d: Update a car</h4>
<ul>
  <li>Bind the inputs such that if the user edits a value, that value will be retained and the table will be automatically updated to display the new value.</li>
</ul>

<h4>Part e: Add a car</h4>
<ul>
  <li>Create a button above the top-right corner of the table component which says "Add a car".</li>
  <li>When clicked, a new empty row is created at the top of the table, and that row becomes the active row, and the cursor automatically moves to the first text input box.</li>
</ul>

<h4>Part f: Delete a car</h4>
<ul>
  <li>Create a button underneath the "Add a car" button you made in part e which says "Remove this car"</li>
  <li>The button should be red (#990000) with light yellow writing (#ffff88)</li>
  <li>Made sure the "add" and "remove" buttons are the exact same width (so they line up beautifully)</li>
  <li>The button should be hidden by default.  It is only shown while a car record has been made active.</li>
  <li>If you click on the button, the active record gets deleted (and no record should be active afterwards).</li>
  <li>Before the actual delete happens, the user is prompted to confirm the action.  It should say: "Are you sure you want to remove this 2020 Toyota Camry record?"  Use the <b>confirm( )</b> command to do this.</li>
</ul>

<!------------------------------------------------------------>
<!--<style lang="scss"></style>-->

