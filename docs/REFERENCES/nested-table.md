---
title: Nested table
deprecated: false
hidden: false
metadata:
  robots: index
---
<HTMLBlock>{`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
table {
  width: 100%;
  border: 1px solid #ddd;
}

td {
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #eee;
}
</style>
</head>
<body>

<h2>Nested Table</h2>
<p>An example of how to create a table inside a table:</p>

<table>
  <tr>
    <td>Cell</td>
    <td>Nested Table
      <table>
        <tr>
          <td>Cell 1</td>
        </tr>
        <tr>
          <td>Cell 2</td>
        </tr>
        <tr>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

</body>
</html>
`}</HTMLBlock>

<br />
