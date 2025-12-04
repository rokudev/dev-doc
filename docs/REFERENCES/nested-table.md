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

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Table Row
      </td>

      <td>
        OJ is innocent.
      </td>
    </tr>

    <tr>
      <td>
        Nested table
      </td>

      <td>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>

          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>

          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td>
        Nested table
      </td>

      <td>
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
    </tr>
  </tbody>
</Table>

## Words are very unneccessary
