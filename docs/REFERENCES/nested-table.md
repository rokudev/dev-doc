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

## Words are very unnecessary

|             |                                                                                          |         |         |         |         |    |
| :---------- | :--------------------------------------------------------------------------------------- | :------ | :------ | :------ | :------ | :- |
| Table row 1 | {/* Example Usage */}                                                                    |         |         |         |         |    |
| Table row 2 | <table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><td>word up</td></table> | Company | Contact | Country | word up |    |
| Company     | Contact                                                                                  | Country |         |         |         |    |

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>

      </td>

      <td>
        {/* Example Usage */}
        <RokuTable
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Email', accessor: 'email' },
            { header: 'Role', accessor: 'role' }
          ]}
          data={[
            { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
            { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
            { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
          ]}
        />
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

<br />
