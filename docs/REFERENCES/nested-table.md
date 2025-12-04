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

/co

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
        <ComplexTable
          header="Simple Table"
          columns={['Name', 'Age', 'Desc']}
          data={[
                    { Name: 'Alice', Age: 25, Desc: 'USA' },
                    { Name: 'Bob', Age: 30, Desc: ['one', 'Two', 'Three'] },
                    { Name: 'Charlie', Age: 28, Desc: 'Canada' }
                  ]}
        /><br /><br />
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## Words are very unneccessary
