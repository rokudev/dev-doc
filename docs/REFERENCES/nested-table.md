---
title: Nested table
deprecated: false
hidden: false
metadata:
  robots: index
---
# API Reference

The following table summarizes the basic information for the Continue Watching RESTful web services:

Item	Description
Endpoint	The base URLs for the Continue Watching APIs are as follows:
[https://userdata.sr.roku.com/user-data/v1/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/content/continueWatching)
[https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching](https://userdata.sr.roku.com/user-data/v1/profile/\{profileId}/content/continueWatching) (use this endpoint if your app has a profile selection screen and the content being passed is specific to the provided profileId (the unique user ID [UUID] of the user profile). The profileId is passed back to the app in a deep link request from the Continue Watching feature.

> Do not send kids profile data to Roku when calling these endpoints.

<br />

<Table align={["left","left","left","left","left","left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>

      <th style={{ textAlign: "left" }}>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        Table Row
      </td>

      <td style={{ textAlign: "left" }}>
        OJ is innocent.
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Nested table
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        Company
      </td>

      <td style={{ textAlign: "left" }}>
        Contact
      </td>

      <td style={{ textAlign: "left" }}>
        Country
      </td>

      <td style={{ textAlign: "left" }}>
        Alfreds Futterkiste
      </td>

      <td style={{ textAlign: "left" }}>
        Maria Anders
      </td>

      <td style={{ textAlign: "left" }}>
        Germany
      </td>

      <td style={{ textAlign: "left" }}>
        Centro comercial Moctezuma
      </td>

      <td style={{ textAlign: "left" }}>
        Francisco Chang
      </td>

      <td style={{ textAlign: "left" }}>
        Mexico
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Company
      </td>

      <td style={{ textAlign: "left" }}>
        Contact
      </td>

      <td style={{ textAlign: "left" }}>
        Country
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Alfreds Futterkiste
      </td>

      <td style={{ textAlign: "left" }}>
        Maria Anders
      </td>

      <td style={{ textAlign: "left" }}>
        Germany
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Centro comercial Moctezuma
      </td>

      <td style={{ textAlign: "left" }}>
        Francisco Chang
      </td>

      <td style={{ textAlign: "left" }}>
        Mexico
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Nested table
      </td>

      <td style={{ textAlign: "left" }}>
        <ComplexTable
          header="Simple Table"
          columns={['Name', 'Age', 'Desc']}
          data={[
                                            { Name: 'Alice', Age: 25, Desc: 'USA' },
                                            { Name: 'Bob', Age: 30, Desc: ['one', 'Two', 'Three'] },
                                            { Name: 'Charlie', Age: 28, Desc: 'Canada' }
                                          ]}
        />
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>
  </tbody>
</Table>

## Words are very unneccessary
